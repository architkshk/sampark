var { Group } = require("../models/group");
const _ = require("lodash");
const { ObjectID } = require("mongodb");
const akin = require("@asymmetrik/akin");

module.exports = {
  createGroup: (req, res) => {
    var body = _.pick(req.body, [
      "name",
      "description",
      "nationality",
      "address",
      "city",
      "state",
      "age",
      "diseases",
      "interests",
      "time"
    ]);
    body.createdBy = req.user._id;
    body.members = [req.user._id];
    var group = new Group(body);
    group
      .save()
      .then(group => {
        res.send(group);
      })
      .catch(e => {
        res.status(400).send(e);
      });
  },

  returnAllGroups: async (req, res) => {
    try {
      let groups = await Group.find();
      console.log("here");
      if (!groups) {
        return res.send({ groups: [] });
      }
      res.send({ groups });
    } catch (e) {
      res.status(400).send(e);
    }
  },

  returnGroupsById: (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
    Group.findById(id)
      .then(group => {
        if (!group) {
          return res.status(404).send();
        }
        res.send({ group });
      })
      .catch(e => {
        res.status(400).send(e);
      });
  },

  joinGroup: async (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
    try {
      let group = await Group.findById(id);
      let isMember = group.members.some(memberId =>
        memberId.equals(req.user._id)
      );
      if (isMember) {
        return res.send("user already a member");
      }
      group.members.push(req.user._id);
      group.save().then(async group => {
        await akin.activity.log(req.user.id, group.id);
        res.send(group);
      });
    } catch (e) {
      res.status(400).send(e);
    }
  },

  leaveGroup: async (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
    try {
      let group = await Group.findById(id);
      let isMember = group.members.some(memberId =>
        memberId.equals(req.user._id)
      );
      if (!isMember) {
        return res.send("user not a member");
      }
      group.members.pop(req.user._id);
      group.save().then(group => {
        res.send({ success: true });
      });
    } catch (e) {
      res.status(400).send(e);
    }
  },

  returnMyGroups: (req, res) => {
    Group.find()
      .then(group => {
        var isInArray = group.members.filter(function(user) {
          return user.equals(req.user.id);
        });
        res.send({ groups: isInArray });
      })
      .catch(e => {
        res.status(400).send(e);
      });
  },

  deleteGroup: (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    Group.findByIdAndRemove(id)
      .then(group => {
        if (!group) {
          return res.status(404).send();
        } else {
          return res.send({ success: true });
        }
      })
      .catch(e => {
        res.status(400).send(e);
      });
  },
  recommend: async (req, res) => {
    let a = await akin.run();
    let b = await akin.recommendation.getAllRecommendationsForUser(
      req.user._id
    );
    res.send(b);
  },
  filter: async (req, res) => {
    Group.find(req.query).then(groups => res.send(groups));
  }
};
