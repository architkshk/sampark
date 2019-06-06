const express = require("express");
const router = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");

const GroupController = require("../controllers/group");
const passportJWT = passport.authenticate("jwt", { session: false });

router.route("/group/create").post(passportJWT, GroupController.createGroup);
router.route("/groups/all").get(GroupController.returnAllGroups);
router.route("/groups/my").get(passportJWT, GroupController.returnMyGroups);
router.route("/group/:id").get(GroupController.returnGroupsById);
router.route("/group/join/:id").get(passportJWT, GroupController.joinGroup);
router.route("/group/leave/:id").get(passportJWT, GroupController.leaveGroup);
router
  .route("group/delete/:id")
  .delete(passportJWT, GroupController.deleteGroup);
router.route("/groups/recommend").get(passportJWT, GroupController.recommend);
router.route("/groups/filter").get(GroupController.filter);

module.exports = router;
