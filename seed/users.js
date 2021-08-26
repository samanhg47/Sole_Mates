const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const users = [
    {
      name: 'Bob Jones',
      age: 21,
      email: 'BobJones1@Gmail.com'
    },
    {
      name: 'Ryan Craig',
      age: 18,
      email: 'Rcraig@outlook.com'
    },
    {
      name: 'Nick Jonas',
      age: 22,
      email: 'Nick@yahoo.com'
    }
  ]

  await User.insertMany(users)
  console.log('Created users!')
}
const run = async () => {
  await main()
  db.close()
}

run()