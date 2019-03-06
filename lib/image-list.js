const Glob = require("glob").Glob;
const dotenv = require("dotenv");
const { resolve } = require("path");

dotenv.config();

const imagesPath = resolve(__dirname, "..", process.env.IMAGES_PATH);

module.exports = function() {
  return new Promise((resolve, reject) => {
    new Glob("**/*.+(jpg|jpeg|png)", imagesPath, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("result: ", result);
        resolve(result);
      }
    });
  });
};
