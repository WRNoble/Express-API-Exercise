const express = require("express");
const app = express();
const Emperor = require("./models/emperor-schema");
const router = require("./routes/emperor.js");
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(router);

//catch 404 errors
app.use(function (req, res) {
  let err = new Error("not found");
  err.status = 404;
});

//error handler
app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

app.listen(4000, () => console.log("listening on port 4000"));
