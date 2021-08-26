const User = require('../models/user')

const createUsers = async (req, res) => {
  try {
    const user = await new User(req.body)
    await user.save()
    return res.status(201).json({
      User
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const user = await User.find()
    return res.status(200).json({ User })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getUsersById = async (req, res) => {
  try {
    const { id } = req.params
    const User = await User.findById(id)
    if (User) {
      return res.status(200).json({ User })
    }
    return res.status(404).send('User with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateUsers = async (req, res) => {
  try {
    const { id } = req.params
    const updatedUsers = await User.findByIdAndUpdate(id, req.body, {
      new: true
    })
    if (!updatedUsers) throw Error('User not found')
    return res.status(200).json(updatedUsers)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createUsers,
  getAllUsers,
  getUsersById,
  updateUsers
}
