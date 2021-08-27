const db = require('../db')
const { Shoe } = require('../models')

const createShoe = async (req, res) => {
  try {
    console.log('createShoe', req.body)
    const shoe = await new Shoe(req.body)
    await shoe.save()
    return res.status(201).json({
      shoe
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllNewsfeed = async (req, res) => {
  try {
    const shoes = await Shoe.find()
    res.send(shoes)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getShoe = async (req, res) => {
  try {
    const brand = req.params.keyword
    let shoes = await Shoe.find({ brand: brand })
    if (shoes) {
      res.send(shoes)
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createShoe,
  getAllNewsfeed,
  getShoe
}
