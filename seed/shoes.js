const db = require('../db')
const { Shoe } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const shoes = [
    {
      brand: 'Nike',
      model: 'Air Jordan',
      color: 'Red',
      image: './images/nike-air-jordan-red.jpg'
    },
    {
      brand: 'Adidas',
      model: 'Yeezy Boost 350 V2',
      color: 'Cream',
      image: './images/Adidas-Yeezy-350-V2-Cream.jpg'
    },
    {
      brand: 'New Balance',
      model: '997',
      color: 'Grey',
      image: './new_balance_997_grey.jpg'
    },
    {
      brand: 'Adidas',
      model: 'NMD',
      color: 'Black',
      image: './images/adidas-nmd-black.jpg'
    },
    {
      brand: 'Nike',
      model: 'Air Max 2090',
      color: 'White',
      image: './Nike-Air-Max-2090-White.jpg'
    },
    {
      brand: 'Puma',
      model: 'RS-X',
      color: 'White',
      image: './Puma-RS-X-White.jpg'
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
