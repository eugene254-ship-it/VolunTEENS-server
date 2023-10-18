const mongoose = require("mongoose");

const VolunteerApprovalSchema = new mongooseSchema({
  account_id: { type: Number },
  status: { type: String, required: true, enum: ["Approve", "Reject"] },
});

const VolunteerApproval = mongoose.model(
  "VolunteerApproval",
  VolunteerApprovalSchema
);

module.exports = VolunteerApproval;

module.exports = mongoose.model()
