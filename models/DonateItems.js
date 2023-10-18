const mongoose = require("mongoose");

const DonateItemsSchema = new mongoose.Schema(
  {
    account_id: { type: String },
    area_select: {
      type: String,
      required: true,
      // enum: [
      //   "WEST areas",
      //   "NORTH areas",
      //   "CENTRAL areas",
      //   "EAST areas",
      //   "InspIRRe Warehouse",
      // ],
    },
    dropoff: { type: String }, //did not input enum warehouse address. limit on front end
    donation_category: {
      type: String,
      required: true,
      // enum: [
      //   "Appliances",
      //   "Food & Drinks",
      //   "Personal Care",
      //   "Clothing",
      //   "Electronics",
      //   "Sports & Games",
      //   "Luggage",
      // ],
    },

    donation_details: {
      type: String,
      stock: Number,
      waitingtime: String,
      required: true,
      // enum: [
      //   "Fruit Blender",
      //   "Microwave",
      //   "Iron & Ironing board",
      //   "Fridge",
      //   "Water Heater",
      //   "Toaster Oven",
      //   "Kettle",
      //   "Fan",
      //   "Washing Machine",
      //   "Rice Cooker",
      //   "Rice/Noodles",
      //   "Hot Meals",
      //   "Soap Bar",
      //   "Toothbrush",
      //   "Spectacles",
      //   "Shaver",
      //   "Towel",
      //   "Water Bottle",
      //   "Blankets",
      //   "Shirts",
      //   "Suits",
      //   "Pants",
      //   "Caps",
      //   "Safety Boots",
      //   "Covered Shoes",
      //   "Sunglasses",
      //   "Raincoat",
      //   "Bluetooth Earpieces",
      //   "Smartphone",
      //   "Portable Power Bank",
      //   "Laptop",
      //   "Data Card",
      //   "Extension Cord",
      //   "Dumbbells",
      //   "Cricket Gear",
      //   "Board Games",
      //   "Bicycle",
      //   "Backpacks",
      //   "Duffel Bags",
      //   "Luggages",
      // ],
    },

    donate_quantity: {
      type: String,
      required: true,
      // enum: ["Small (1-10)", "Bulk(10+)"],
    },
    item_condition: {
      type: String,
      required: true,
      // enum: ["Brand New", "Lightly Used", "Heavily Used"],
    },
    item_photo: { data: Buffer, contentType: String },
    item_comment: { type: String },
    status: {
      type: String,
      required: true,
       enum: [
       "Approved",
         "Rejected",
        "Request Submitted",
         "Pending Review",
        "Pending Drop-Off",
         "Completed",
       ],
    },
    icon: String,
  },
  { collection: "donation_items", timestamps: true }
);

const DonateItems = mongoose.model("DonateItems", DonateItemsSchema);

module.exports = DonateItems;
