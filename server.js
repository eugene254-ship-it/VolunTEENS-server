require("dotenv").config();
const express = require("express");
const connectDB = require("./db/db");
const cors = require("cors");
const app = express();

// --- middleware --- //
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectDB(process.env.MONGODB_URI);

const profiles = require("./routes/workerProfileRouter");

const itemRequest = require("./routes/itemRequestRouter");

const donateItems = require("./routes/donateItems");

const users = require("./routes/userRouter");

app.use("/profile", profiles);
app.use("/item_request", itemRequest);
app.use("/donate", donateItems);
app.use("/user", users);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
