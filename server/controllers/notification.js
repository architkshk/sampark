const {Notification} = require ("../models/group");

module.exports = {
  createNotification: (req, res) => {
    console.log(req);
    let value= "abc";
    let createdFor = req.user._id;
    let newNotification=new Notification({
      value,
      createdFor
    });
    newNotification.save();
  },

  returnMyNotification: async (req, res) => {
    try {
      let notifications = await Notification.find({createdFor:req.user._id}).select({value:true});
      //console.log(groups);
      if (!notifications) {
        return res.send({ notifications: [] });
      }
      res.send({ notifications });
    } catch (e) {
      res.status(400).send(e);
    }
  },

};