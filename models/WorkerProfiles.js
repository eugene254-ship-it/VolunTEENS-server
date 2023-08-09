const mongoose = require("mongoose");
const WorkerProfilesSchema = new mongoose.Schema(
  {
    account_id: { type: String },
    salutation: { type: String, enum: ["mr", "ms", "mrs"] },
    full_name: { type: String, required: true },
    nationality: { type: String, required: true },
    resident_status: {
      type: String,
      required: true,
      enum: [
        "work permit",
        "s pass",
        "employment pass",
        "permanent resident",
        "citizen",
      ],
    },
    address: { type: String, required: true },
    address_unitnumber: { type: String },
    address_postcode: { type: Number, required: true },
    address_dormitory: { type: String },
    contact_number: { type: Number, maxLength: 8 },
    tshirt_size: {
      type: String,
      required: true,
      enum: ["xs", "s", "m", "l", "xl", "xxl"],
    },
    shoe_size: {
      type: Number,
      required: true,
      enum: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    },
    diet: {
      type: String,
      required: true,
      enum: [
        "none",
        "vegetarian",
        "vegan",
        "kosher",
        "halal",
        "no seafood",
        "no nuts",
      ],
    },
  },
  { collection: "worker_profiles", timestamps: true }
);

const WorkerProfiles = mongoose.model("WorkerProfiles", WorkerProfilesSchema);

module.exports = WorkerProfiles;
