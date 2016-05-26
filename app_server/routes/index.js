var express = require('express');
var router = express.Router();
var controller = require('../controllers/main.js');

//routes
router.get('/',controller.index);


router.get('/todo/',controller.getAllItems);


router.get('/todo/:number',controller.getItem);

router.post('/todoList',controller.updateToDoList);
//export router
module.exports = router;
