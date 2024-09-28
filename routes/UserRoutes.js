// routes/user.routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get('/test', userController.test);
router.post('/register', userController.createUser);

router.get('/', userController.getUsers);


router.get('/:id', userController.getUserById);


router.put('/:id', userController.updateUser);


router.delete('/:id', userController.deleteUser);

module.exports = router;
