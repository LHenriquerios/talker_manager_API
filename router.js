const express = require('express');
const getTalker = require('./Middlewares/getTalker');
const getTalkerById = require('./Middlewares/getTalekerById');
const login = require('./Middlewares/login');
const createTalker = require('./Middlewares/createTalker');
const validateAutorization = require('./Middlewares/validateAuthorization');
const {
    validationName, validationAge, validationTalk, validationTalkChildrens,
} = require('./Middlewares/validationInputs');
const editTalker = require('./Middlewares/editTalker');

const router = express.Router();

router.get('/talker', getTalker);
router.get('/talker/:id', getTalkerById);
router.post('/login', login);
router.post('/talker',
validationName,
validationTalk,
validationTalkChildrens,
validateAutorization,
validationAge,
createTalker);
router.put('/talker/:id',
validationName,
validationTalk,
validationTalkChildrens,
validateAutorization,
validationAge,
editTalker);

module.exports = router;