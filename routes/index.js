const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', controllers.getAllNewsfeed) 

router.get('/shoes/:brand', controllers.getShoe)

router.post('/new-post', controllers.createShoe)

module.exports = router;
