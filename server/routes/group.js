const express = require("express");
const router = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");

const GroupController = require("../controllers/group");
const passportSignIn = passport.authenticate("local", { session: false });

router
  .route("/groups/create")
  .post(passportSignIn, GroupController.createGroup);
router.route("/groups/all").get(GroupController.returnAllGroups);
router.route("/groups/my").get(passportSignIn, GroupController.returnMyGroups);
router.route("/group/:id").get(GroupController.returnGroupsById);
router.route("/groups/join/:id").get(passportSignIn, GroupController.joinGroup);
router
  .route("/groups/leave/:id")
  .get(passportSignIn, GroupController.leaveGroup);
router
  .route("groups/delete/:id")
  .delete(passportSignIn, GroupController.deleteGroup);

module.exports = router;
