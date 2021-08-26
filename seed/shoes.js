const db = require('../db')
const { User, Shoe } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const bob = await User.findOne({ name: 'Bob Jones' })
  const nick = await User.findOne({ name: 'Nick Jonas' })
  const ryan = await User.findOne({ name: 'Ryan Craig' })

  const shoes = [
    {
      brand: 'Nike',
      model: 'Air Jordan',
      color: 'Red',
      image: './images/nike-air-jordan-red.jpg',
      user_id: bob._id
    },
    {
      brand: 'Adidas',
      model: 'Yeezy Boost 350 V2',
      color: 'Cream',
      image: './images/Adidas-Yeezy-350-V2-Cream.jpg',
      user_id: bob._id
    },
    {
      brand: 'New Balance',
      model: '997',
      color: 'Grey',
      image: './new_balance_997_grey.jpg',
      user_id: nick._id
    },
    {
      brand: 'Adidas',
      model: 'NMD',
      color: 'Black',
      image: './images/adidas-nmd-black.jpg',
      user_id: nick._id
    },
    {
      brand: 'Nike',
      model: 'Air Max 2090',
      color: 'White',
      image: './Nike-Air-Max-2090-White.jpg',
      user_id: ryan._id
    },
    {
      brand: 'Puma',
      model: 'RS-X',
      color: 'White',
      image: './Puma-RS-X-White.jpg',
      user_id: ryan._id
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
