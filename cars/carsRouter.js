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

router.get("/:id", (req, res) => {
  const { id } = req.params;
  carHelpers
    .findById(id)
    .then((car) => {
      if (car === undefined)
        res.status(404).json({ message: "404, car not found" });
      console.log("carVal: ", car);
      res.json({ message: "getem", car: car });
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
      res.json({ message: "Car posted successfully", car: post });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to post car", err: err.message });
    });
});

router.put("/:id", (req, res) => {
  changes = req.body;
  const { id } = req.params;

  return carHelpers
    .editById(id, changes)
    .then((car) => {
      res.json({ message: "Car updated successfully", car: car });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to post car", err: err.message });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  return carHelpers
    .remove(id)
    .then((car) => {
      res.json({ message: "Car deleted successfully", car: car });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Failed to delete car", err: err.message });
    });
});

module.exports = router;
