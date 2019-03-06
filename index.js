const  express  = require("express");

const app = express();
const  router  = require("./routes");

app.use("/memory", router);

app.listen(80, () => {
  console.log("Ready");
});
