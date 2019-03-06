const express = require("express");
const router = express.Router();
const { ImagesList } = require("../lib");

router.get("/list/:count", (req, res, next) => {
  ImagesList()
    .then(files => {
      res.json(files);
    })
    .catch(next);
});

module.exports = router;
