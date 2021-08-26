const mongoose = require('mongoose')

let MONGODB_URL = 'mongodb://127.0.0.1:27017/soleMatesDatabase'

mongoose
    .connect(MONGODB_URL, { 
        useUnifiedTopology: true, 
        useNewUrlParser: true 
    })
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db