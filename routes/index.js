const { Router } = require('express')
const controllers = require('../controllers/shoe')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/newsfeed/shoes', controllers.createShoes)

router.get('/newsfeed', controllers.getAllNewsfeed)

router.get('/shoes/:user_id', controllers.getShoesById)

router.put('/shoes/:id', controllers.updateShoes)

module.exports = {
  router,
  controllers
}
