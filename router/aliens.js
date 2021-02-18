const express = require("express");
const router = express.Router();

const Alien = require("../Model/aliens_model");

router.get("/", async (req, res) => {
  try {
    const aliens = await Alien.find();
    res.json(aliens);
  } catch (err) {
    res.send("Error" + err);
  }
});

//find by id
router.get("/:id", async (req, res) => {
  try {
    const byID = await Alien.findById(req.params.id);
    res.json(byID);
  } catch (err) {
    res.send("Error" + err);
  }
});

//Check Individuals Value
router.patch("/:id", async (req, res) => {
  try {
    const alldata = await Alien.findById(req.params.id);
    alldata.sub = req.body.sub;
    const a1 = await alldata.save();
    res.json(a1);
  } catch (err) {
    res.send("Error:" + err);
  }
});

//insert
router.post("/add", async (req, res) => {
  const alien = new Alien({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });

  try {
    const a1 = await alien.save();
    res.json(a1);
  } catch (error) {
    res.send(error);
  }
});

//update data

router.post("/update/:id", async (req, res) => {
  const id = req.params.id;
  let updatedata = {
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  };
  try {
    const a2 = await Alien.findByIdAndUpdate(id, { $set: updatedata });
    res.json(a2);
  } catch (err) {
    res.send(err);
  }
});

//delete Data

router.post("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const s1 = await Alien.findOneAndRemove(id);
    res.json(s1);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
