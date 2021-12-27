const express = require("express");
const Records = require("../controllers/Records");
const schemas = require("../validations/Records");
const validate = require("../middlewares/validate");

const router = express.Router();

router.route("/").post(validate(schemas.validateReq, "body"), Records.listRecords);

module.exports = router; 
