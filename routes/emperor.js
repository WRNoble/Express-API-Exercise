const express = require("express");
const router = express.Router();
const Emperor = require("../models/emperor-schema");

router.get("/", function (req, res) {
  Emperor.find({}).then((emperor) => {
    res.json(emperor);
  });
});

router.get("/name/:name", function (req, res) {
  Emperor.find({ name: req.params.name }).then((emperor) => {
    res.json(emperor);
  });
});

router.get("/id/:id", function (req, res) {
  Emperor.findById({ _id: req.params.id }).then((emperor) => {
    res.json(emperor);
  });
});

router.post("/", function (req, res) {
  Emperor.create(req.body).then((emperor) => {
    res.json(emperor);
  });
});

router.put("/id/:id", function (req, res) {
  Emperor.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).then((emperor) => {
    res.json(emperor);
  });
});

router.put("/name/:name", function (req, res) {
  Emperor.findOneAndUpdate({ name: req.params.name }, req.body, {
    new: true,
  }).then((emperor) => {
    res.json(emperor);
  });
});

router.delete("/id/:id", function (req, res) {
  Emperor.findOneAndRemove({ _id: req.params.id }).then((emperor) => {
    res.json(emperor);
  });
});

router.delete("/name/:name", function (req, res) {
  Emperor.findOneAndRemove({ name: req.params.name }).then((emperor) => {
    res.json(emperor);
  });
});

module.exports = router;
