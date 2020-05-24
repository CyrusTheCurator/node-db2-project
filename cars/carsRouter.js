const express = require("express");

const carHelpers = require("./cars");

const router = express.Router();

router.get("/", (req, res) => {
  carHelpers
    .find()
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Failed to retrieve cars", err: err.message });
    });
});

router.post("/", (req, res) => {
  post = req.body;

  return carHelpers
    .insert(post)
    .then((cars) => {
      res.json({message: "Car posted successfully", car: post);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Failed to retrieve cars", err: err.message });
    });
});

module.exports = router;
