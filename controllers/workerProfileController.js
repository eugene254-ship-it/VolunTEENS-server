const WorkerProfiles = require("../models/WorkerProfiles");

// ================ read =================== //
const getAllWorkers = async (req, res) => {
  const allWorkers = await WorkerProfiles.find();
  res.json(allWorkers);
};

// const getOneWorker = async (req, res) => {
//   const oneWorker = await WorkerProfiles.findOne();
//   res.json(oneWorker);
// };

// ================ create =================== //
const createWorker = async (req, res) => {
  console.log(req.body);
  try {
    const createdWorker = new WorkerProfiles({
      account_id: req.body.account_id,
      name_salutation: req.body.salutation.toLowerCase(),
      full_name: req.body.full_name.toLowerCase(),
      nationality: req.body.nationality.toLowerCase(),
      resident_status: req.body.resident_status.toLowerCase(),
      address: req.body.address.toLowerCase(),
      address_unitnumber: req.body.address_unitnumber.toLowerCase(),
      address_postcode: parseInt(req.body.address_postcode),
      address_dormitory: req.body.address_dormitory.toLowerCase(),
      contact_number: parseInt(req.body.contact_number),
      tshirt_size: req.body.tshirt_size.toLowerCase(),
      shoe_size: parseInt(req.body.shoe_size),
      diet: req.body.diet.toLowerCase(),
    });
    await createdWorker.save();
    res.json({ status: "ok", message: "worker account created" });
  } catch (err) {
    console.error(err.message);
    res
      .status(400)
      .json({ status: "error", message: "failed to create worker profile" });
  }
};

// ================ update =================== //
const updateOneWorker = async (req, res) => {
  const response = await WorkerProfiles.findByIdAndUpdate(req.params.id, {
    name_salutation: req.body.salution,
    full_name: req.body.full_name,
    nationality: req.body.nationality,
    resident_status: req.body.resident_status,
    address: req.body.address,
    address_unitnumber: req.body.address_unitnumber,
    address_postcode: req.body.address_postcode,
    address_dormitory: req.body.address_dormitory,
    contact_number: req.body.contact_number,
    tshirt_size: req.body.tshirt_size,
    shoe_size: req.body.shoe_size,
    diet: req.body.diet,
  });
  res.json({ status: "ok", message: "worker updated" });
};
// ================ delete =================== //
const deleteOneWorker = async (req, res) => {
  const { id } = req.body;
  await WorkerProfiles.deleteOne({ id });
  res.json({ status: "ok", message: "worker deleted" });
};

module.exports = {
  getAllWorkers,
  createWorker,
  updateOneWorker,
  deleteOneWorker,
};
