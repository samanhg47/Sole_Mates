const { Router } = require('express')
const controllers = require('../controllers/user')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/user', controllers.createUser)

router.get('/user', controllers.getAllUser)

router.get('/user/:user_id', controllers.getUserById)

router.put('/user/:id', controllers.updateUser)

module.exports = {
  router,
  controllers
}
