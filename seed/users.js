const db = require('../db')
const { Shoe, User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const nike1 = await Shoe.find({ brand: 'Nike', model: 'Air Jordan' })
  const addidaYeez = await Shoe.find({ brand: 'Adidas', model: 'Yeezy Boost 350 V2' })
  const newBal = await Shoe.find({ brand: 'New Balance', model: '997' })
  // const nmd = await Shoe.find({ brand: 'Adidas', model: 'NMD' })
  // const nikeAirMax = await Shoe.find({ brand: 'Nike', model: 'Air Max 2090' })
  // const pumaRS = await Shoe.find({ brand: 'Puma', model: 'RS-X' })

  const users = [
    {
      name: 'Bob Jones',
      age: 21,
      email: 'BobJones1@Gmail.com',
      shoe_ids: nike1[0]._id
    },
    {
      name: 'Ryan Craig',
      age: 18,
      email: 'Rcraig@outlook.com',
      shoe_ids: addidaYeez[0]._id
    },
    {
      name: 'Nick Jonas',
      age: 22,
      email: 'Nick@yahoo.com',
      shoe_ids: newBal[0]._id
    }
  ]

  await User.insertMany(users)
  console.log('Created users with posts!')
}
const run = async () => {
  await main()
  db.close()
}

run()