const express = require('express'); // Express
const mongoose = require('mongoose'); // Mongoose
const router = express.Router();

const Course = mongoose.model('Course');

// Create
router.post('/', async (req, res) => {
  const body = req.body;
  try {
      const courseDB = await Course.create(body);
      res.status(200).json(courseDB);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error)
  }
});

// Get By Id
router.get('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const courseDB = await Course.findById(_id);
    res.json(courseDB);
  } catch (error) {
    return res.status(400).json(error)
  }
});

// Get All
router.get('/', async (req, res) => {
  try {
    const courseDB = await Course.find();
    res.json(courseDB);
  } catch (error) {
    return res.status(400).json(error)
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const courseDB = await Course.findByIdAndDelete(_id);
    res.json(courseDB);
  } catch (error) {
    return res.status(500).json(error)
  }
});

// Put
router.put('/:id', async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const courseDB = await Course.findByIdAndUpdate(_id, body, {
      new: true,
    });
    res.json(courseDB);
  } catch (error) {
    return res.status(500).json(error)
  }
});


module.exports = router;