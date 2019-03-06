const express = require("express");
const router = express.Router();

router.get("/list/:count", require("./list"));
router.get("/crop/:width/:height", require("./crop"));

module.exports = router;
