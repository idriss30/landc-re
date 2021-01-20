const express = require("express");
const router = express.Router();
const formCtrl = require("../controllers/formCtrl.js");

router.post("/", formCtrl.submitForm);

module.exports = router;
