const express = require("express");
const router = express.Router();
const {
  getAllWorkers,
  createWorker,
  updateOneWorker,
  deleteOneWorker,
} = require("../controllers/workerProfileController");

// ================== CRUD ===================== //
router.get("/all", getAllWorkers);
router.put("/create", createWorker);
router.patch("/:id", updateOneWorker);
router.delete("/:id", deleteOneWorker);
module.exports = router;
