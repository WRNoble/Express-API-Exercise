const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Emperor = new Schema({
  name: String,
  birth: String,
  death: String,
  birthProvidence: String,
  rise: String,
  reignStart: String,
  dynasty: String,
  causeOfDeath: String,
  image: Object,
});

module.exports = mongoose.model("Emperor", Emperor);
