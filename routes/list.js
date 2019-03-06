const { ImagesList } = require("../lib");

module.exports = (req, res, next) => {
  ImagesList()
    .then(files => {
      const count = req.params.count > 0 ? req.params.count : 0;
      res.json(files.slice(0, count).map(f => encodeURI(f)));
    })
    .catch(next);
};
