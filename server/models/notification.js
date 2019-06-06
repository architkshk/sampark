const mongoose = require("mongoose");

var ObjectId = mongoose.Schema.Types.ObjectId;

var notificationSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true
  },
  createdFor:ObjectId,
  createdAt: Date,
});

notificationSchema.pre('save',function (next) {
  this.createdAt= Date.now();
  next();
});

var notification = mongoose.model("notifications", notificationSchema);

module.exports = { notification };
