//import form model
let Message = require("../models/message.model");

module.exports.submitForm = async (req, res, next) => {
  // get the message body
  const userMessage = { ...req.body };
  const { firstName, lastName, email, phone, textArea } = {
    ...userMessage.userData,
  };
  const newMessage = new Message({
    firstName,
    lastName,
    email,
    phone,
    textArea,
  });

  // save the message to the database
  newMessage
    .save()
    .then(() => {
      res.json({ message: "success" });
    })
    .catch((err) => console.log(err));
};
