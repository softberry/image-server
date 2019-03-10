const Glob = require("glob").Glob;
const dotenv = require("dotenv");
const { resolve } = require("path");

dotenv.config();

const imagesPath = resolve(process.cwd(), process.env.IMAGES_PATH);
const cardsPath = resolve(process.cwd(), process.env.CARDS_PATH);

const images = function() {
  return new Promise((resolve, reject) => {
    new Glob("/**/*.+(jpg|jpeg|png)", { root: imagesPath }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.map(i => i.replace(process.cwd(), "").slice(1)));
      }
    });
  });
};

const cards = function() {
  return new Promise((resolve, reject) => {
    new Glob("/**/*.+(jpg|jpeg|png)", { root: cardsPath }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.map(i => i.replace(process.cwd(), "").slice(1)));
      }
    });
  });
};

module.exports = { images, cards };
