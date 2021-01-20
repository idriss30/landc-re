//import form model
let model = require("../models/message.model");

module.exports.submitForm = async (req, res, next) => {
  const userMessage = { ...req.body };
  res.json({ userMessage });
};
