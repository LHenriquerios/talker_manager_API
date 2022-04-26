const express = require('express');
const { getTalker, getTalkerById } = require('./getTalkers');

const router = express.Router();

router.get('/talker', getTalker);
router.get('/talker/:id', getTalkerById);

module.exports = router;