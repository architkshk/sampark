const express = require("express");
const router = express.Router();
const NotificationController = require("../controllers/notification");

router.route("/notification/create").post(NotificationController.createNotification());
router.route("/notification/my").get(NotificationController.returnMyNotification());


module.exports = router;
