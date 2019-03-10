const express = require("express");
const cors = require("cors");

const app = express();
const router = require("./routes");
app.use(
  cors({
    origin: [/localhost:8080$/, /(\.|\/)emresakarya.com$/] // allow : all sub domains, http, https from emresakarya.com
  })
);

app.use("/memory", router);

app.listen(80, () => {
  console.log("Ready");
});
