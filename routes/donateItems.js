const express = require("express");
const { Router } = require("express");
const router = express.Router();

const DonateItems = require("../models/DonateItems");
const {
  getSingleAccountRequest,
  createItemRequest,
  updateItemRequest,
  deleteItemRequest,
  getOneDonationItem,
  createDonationItem,
  updateDonation,
  deleteDonation,
} = require("../controllers/donateItems");

// ================= CRUD ====================//
router.get("/:id", getSingleAccountRequest);
router.get("/:id", getOneDonationItem);
router.post("/create", createDonationItem);
router.patch("/:id", updateDonation);
router.delete("/:donate_id", deleteDonation);

module.exports = router;
