const express = require('express'); // Express
const mongoose = require('mongoose'); // Mongoose
const router = express.Router();

const File = mongoose.model('File');

// Create
router.post('/', async (req, res) => {
  const body = req.body;
  try {
      const fileDB = await File.create(body);
      res.status(200).json(fileDB);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error)
  }
});

// Get By Id
router.get('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const fileDB = await File.findById(_id);
    res.json(fileDB);
  } catch (error) {
    return res.status(400).json(error)
  }
});

// Get All
router.get('/', async (req, res) => {
  try {
    const fileDB = await File.find();
    res.json(fileDB);
  } catch (error) {
    return res.status(400).json(error)
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const fileDB = await File.findByIdAndDelete(_id);
    res.json(fileDB);
  } catch (error) {
    return res.status(500).json(error)
  }
});

// Put
router.put('/:id', async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const fileDB = await File.findByIdAndUpdate(_id, body, {
      new: true,
    });
    res.json(fileDB);
  } catch (error) {
    return res.status(500).json(error)
  }
});


module.exports = router;