const Shoe = require('../models/shoe')

const createShoes = async (req, res) => {
  try {
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
    const shoe = await Shoe.find()
    return res.status(200).json({ Shoe })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getShoesById = async (req, res) => {
  try {
    const { id } = req.params
    const shoe = await Shoe.findById(id)
    if (shoe) {
      return res.status(200).json({ shoe })
    }
    return res.status(404).send('Shoe with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateShoes = async (req, res) => {
  try {
    const { id } = req.params
    const updatedShoes = await Shoe.findByIdAndUpdate(id, req.body, {
      new: true
    })
    if (!updatedShoes) throw Error('Shoe not found')
    return res.status(200).json(updatedShoes)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createShoes,
  getAllNewsfeed,
  getShoesById,
  updateShoes
}


