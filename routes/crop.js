const sharp = require("sharp");
const { resolve } = require("path");

module.exports = (req, res, next) => {
  let imagePath = decodeURI(req.query.image);
  const width = Math.max(req.params.width, 0);
  const height = Math.max(req.params.height);
  imagePath = resolve(__dirname, "..", imagePath);
  const image = sharp(imagePath);
  image
    .metadata()
    .then(file => {
      return image
        .resize({ width, height })
        .toBuffer()
        .then(data => {
          res.contentType(`image/${file.format}`);
          res.end(data);
        });
    })
    .catch(next);
};

