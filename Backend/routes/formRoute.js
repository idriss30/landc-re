const express = require("express");
const router = express.Router();
const formCtrl = require("../controllers/formCtrl.js");

router.post("/", formCtrl.submitForm);

router.get("/messages", formCtrl.getMessages);

router.get("/message/:id", formCtrl.getMessage);

module.exports = router;
