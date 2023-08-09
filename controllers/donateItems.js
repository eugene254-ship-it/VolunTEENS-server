const DonateItems = require("../models/DonateItems");

// ===================== read ====================== //;

// to find all Donation Items within 1 account //
const getSingleAccountRequest = async (req, res) => {
  try {
    const request = await DonateItems.find({
      account_id: req.params.id,
    });
    const count = await DonateItems.countDocuments({
      account_id: req.params.id,
    });
    res.json({ data: [...request], count });
  } catch (err) {
    console.error(err.message);
    res
      .status(400)
      .json({ status: "error", message: "failed to retrieve applications" });
  }
};

// const getOneDonationItem = async (req, res) => {
//   const request = await DonateItems.findOne({ id });
//   res.json(request);
// };

// ===================== create ====================== //;
const createDonationItem = async (req, res) => {
  try {
    const createDonation = new DonateItems({
      account_id: req.body.account_id,
      area_select: req.body.area_select,
      dropoff: req.body.dropoff,
      donation_category: req.body.donation_category,
      donation_details: req.body.donation_details,
      donate_quantity: req.body.donate_quantity,
      item_condition: req.body.item_condition,
      item_photo: req.body.item_photo,
      item_comment: req.body.item_comment,
      status: req.body.status,
      icon: req.body.icon,
    });
    await createDonation.save();
    res.json({ status: "ok", message: "donation successful" });
  } catch (err) {
    console.log("PUT //create", err);
    res.status(400).json({ status: "error", message: "error occurred" });
  }
};

// ===================== update ====================== //;
const updateDonation = async (req, res) => {
  const update = new DonateItems({
    area_select: req.body.area_select,
    dropoff: req.body.dropoff,
    donation_category: req.body.donation_category,
    donation_item: req.body.donation_item,
    donate_quantity: req.body.donate_quantity,
    item_condition: req.body.item_condition,
    item_photo: req.body.item_photo,
    item_comment: req.body.item_comment,
    status: req.body.status,
  });
  res.json({ status: "ok", message: "donation amended" });
};

// ===================== delete ====================== //;
const deleteDonation = async (req, res) => {
  await DonateItems.deleteOne({ _id: req.params.donate_id });
  res.json({ status: "ok", message: "donation item deleted" });
};

module.exports = {
  getSingleAccountRequest,
  // getOneDonationItem,
  createDonationItem,
  updateDonation,
  deleteDonation,
};
