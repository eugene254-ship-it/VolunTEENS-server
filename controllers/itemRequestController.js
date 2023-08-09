const { v4: uuidv4 } = require("uuid");
const ItemRequest = require("../models/ItemRequest");

// ===================== read ====================== //;

// * this is to find all items within one account */
const getSingleAccountRequest = async (req, res) => {
  try {
    const request = await ItemRequest.find({
      account_id: req.params.account_id,
    });
    const count = await ItemRequest.countDocuments({
      account_id: req.params.account_id,
    });
    res.json({ data: [...request], count });
  } catch (err) {
    console.error(err.message);
    res
      .status(400)
      .json({ status: "error", msesage: "failed to retrieve applications" });
  }
};

// ===================== create ====================== //;
const createItemRequest = async (req, res) => {
  // console.log({ body: req.body });
  try {
    for (const request of req.body) {
      console.log({ request });
      const requestId = uuidv4();

      const createRequest = new ItemRequest({
        account_id: request.account_id,
        request_id: requestId,
        item: request.name.toLowerCase(),
        item_text_request: request.item_text_request.toLowerCase(),
        item_photo_request: request.item_photo_request.toLowerCase(),
        item_delivery: request.delivery_method.toLowerCase(),
        delivery_address: request.delivery_address.toLowerCase(),
        icon: request.icon,
        status: request.status,
      });
      await createRequest.save();
    }
    res.json({ status: "ok", message: "item request created" });
  } catch (err) {
    console.error(err.message);
    res
      .status(400)
      .json({ status: "ok", message: "failed to create item request" });
  }
};
// ===================== update ====================== //;
const updateItemRequest = async (req, res) => {
  const updateRequest = new ItemRequest({
    item_request_category: req.body.item_request_category,
    item_request_details: req.body.item_request_details,
    item_text_request: req.body.item_text_request,
    item_photo_request: req.body.item_photo_request,
    item_delivery: req.body.item_delivery,
    delivery_address: req.body.delivery_address,
    icon: req.body,
    status: req.status,
  });
  res.json({ status: "ok", message: "item updated" });
};

// ===================== delete ====================== //;
const deleteItemRequest = async (req, res) => {
  try {
    await ItemRequest.deleteOne({ request_id: req.params.request_id });
    res.json({ status: "ok", message: "one item deleted" });
  } catch (err) {
    console.error(err.message);
    res
      .status(400)
      .json({ status: "error", message: "failed to delete item request" });
  }
};

module.exports = {
  getSingleAccountRequest,
  createItemRequest,
  updateItemRequest,
  deleteItemRequest,
};
