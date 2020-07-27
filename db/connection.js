const mongoose = require("mongoose");

mongoose.Promise = Promise;

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/emperors";
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((instance) => {
    console.log(`Connected to db: ${instance.connections[0].name}`);
  })
  .catch((err) => console.log("Sorry, we failed to connect properly", err));

module.exports = mongoose;
