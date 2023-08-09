const mongoose = require("mongoose");

const ItemRequestsSchema = new mongoose.Schema(
  {
    account_id: { type: String, required: true },
    // ------------------------------------------------------------------------------------------------------------------
    // item_request_category & item_request_detail set to "true" in Phase 1. When text/image feature is launched, to deactivate to "false"
    // *** check with team whether want to limit to 3 items ***
    request_id: { type: String, required: true },
    item: { type: String, required: true },
    // [
    //   {
    //     type: String,
    //     stock: Number,
    //     waitingtime: String,
    //     required: true,
    //     enum: [
    //       "Fruit Blender",
    //       "Microwave",
    //       "Iron & Ironing board",
    //       "Fridge",
    //       "Water Heater",
    //       "Toaster Oven",
    //       "Kettle",
    //       "Fan",
    //       "Washing Machine",
    //       "Rice Cooker",
    //       "Rice/Noodles",
    //       "Hot Meals",
    //       "Soap Bar",
    //       "Toothbrush",
    //       "Spectacles",
    //       "Shaver",
    //       "Towel",
    //       "Water Bottle",
    //       "Blankets",
    //       "Shirts",
    //       "Suits",
    //       "Pants",
    //       "Caps",
    //       "Safety Boots",
    //       "Covered Shoes",
    //       "Sunglasses",
    //       "Raincoat",
    //       "Bluetooth Earpieces",
    //       "Smartphone",
    //       "Portable Power Bank",
    //       "Laptop",
    //       "Data Card",
    //       "Extension Cord",
    //       "Dumbbells",
    //       "Cricket Gear",
    //       "Board Games",
    //       "Bicycle",
    //       "Backpacks",
    //       "Duffel Bags",
    //       "Luggages",
    //     ],
    //   },
    // ],
    item_text_request: { type: String },
    item_photo_request: { data: Buffer, contentType: String },
    item_delivery: {
      type: String,
      required: true,
      enum: ["delivery", "pickup"],
    },
    delivery_address: { type: String },
    icon: { type: String },
    status: {
      type: String,
      enum: ["approve", "rejected", "completed", "pending"],
    },
  },
  { collection: "item_request", timestamps: true }
);

const ItemRequests = mongoose.model("ItemRequests", ItemRequestsSchema);

module.exports = ItemRequests;
