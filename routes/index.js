const express = require("express");
const router = express.Router();

router.get("/list/:count", (req, res, next) => {
  res.json({ id: req.params.count, test:process.env });
  next();
});

module.exports = router;
