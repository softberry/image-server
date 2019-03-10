const { ImagesList } = require("../lib");

function extractImages(list, from, to) {
  const count = to - from;
  if (count > list.length) {
    throw new Error("Not enough images!");
  }

  const result = []
    .concat(list.slice(from, list.length - from), list.slice(0, from - 1))
    .slice(0,count);
  console.log(from, to);
  return result;
}

module.exports = (req, res, next) => {
  Promise.all([ImagesList.images(), ImagesList.cards()])
    .then(images => {
      const from = parseInt(req.params.from, 10);
      const to = parseInt(req.params.to, 10);
      const cardId = parseInt(req.params.cardId, 10);

      const frontImages = extractImages(images[0], from, to).map(f =>
        encodeURI(f)
      );
      const cardBacks = extractImages(images[1], cardId, cardId + 1).map(f =>
        encodeURI(f)
      );
      res.json({
        images: frontImages,
        cards: cardBacks
      });
    })
    .catch(next);
};
