const express = require('express');
const getTalker = require('./Middlewares/getTalker');
const getTalkerById = require('./Middlewares/getTalekerById');
const login = require('./Middlewares/login');

const router = express.Router();

router.get('/talker', getTalker);
router.get('/talker/:id', getTalkerById);
router.post('/login', login);

module.exports = router;