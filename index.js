const  express  = require("express");

const app = express();
const  router  = require("./routes");

app.use("/app", router);

app.listen(80, () => {
  console.log("Ready");
});
