const express = require("express");
const router = express.Router();

router.get("/list/:from/:to/:cardId", require("./list"));
router.get("/crop/:width/:height", require("./crop"));

module.exports = router;
