const db = require('../db')
const { Shoe } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const shoes = [
    {
      brand: 'Nike',
      model: 'Air Jordan',
      color: 'Red'
    },
    {
      brand: 'Adidas',
      model: 'Yeezy Boost 350',
      color: 'Cream V2'
    },
    {
      brand: 'Adidas',
      model: 'Yeezy Boost 350',
      color: 'Cream V2'
    },
    {
      brand: 'Adidas',
      model: 'Yeezy Boost 350',
      color: 'Cream V2'
    },
    {
      brand: 'Adidas',
      model: 'Yeezy Boost 350',
      color: 'Cream V2'
    },
    {
      brand: 'Adidas',
      model: 'Yeezy Boost 350',
      color: 'Cream V2'
    }
  ]

  await Shoe.insertMany(shoes)
  console.log('Created shoes!')
}
const run = async () => {
  await main()
  db.close()
}

run()
