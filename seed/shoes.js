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
      model: 'Yeezy Boost 350 V2',
      color: 'Cream'
    },
    {
      brand: 'New Balance',
      model: '997',
      color: 'Grey'
    },
    {
      brand: 'Adidas',
      model: 'NMD',
      color: 'Black'
    },
    {
      brand: 'Nike',
      model: 'Air Max 2090',
      color: 'White'
    },
    {
      brand: 'Puma',
      model: 'RS-X',
      color: 'White'
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
