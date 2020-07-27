const Emperor = require("../models/emperor-schema.js");
const data = require("./data.json");

Emperor.deleteMany({}, function () {
  data.records.forEach(function (record) {
    Emperor.create({
      name: record.fields.name,
      birth: record.fields.birth,
      birthProvidence: record.fields.birth_prv,
      rise: record.fields.rise,
      reignStart: record.fields.reign_start,
      dynasty: record.fields.dynasty,
      causeOfDeath: record.fields.cause,
      image: record.fields.image,
    });
  });
});
