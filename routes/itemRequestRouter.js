const express = require("express");
const router = express.Router();
const {
  getSingleAccountRequest,
  createItemRequest,
  updateItemRequest,
  deleteItemRequest,
} = require("../controllers/itemRequestController");

// =================== CRUD ==========================//
router.get("/:account_id", getSingleAccountRequest);
router.put("/create", createItemRequest);
router.patch("/:request_id", updateItemRequest);
router.delete("/:request_id", deleteItemRequest);

module.exports = router;
