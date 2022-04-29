const express = require('express');
const getTalker = require('./Middlewares/getTalker');
const getTalkerById = require('./Middlewares/getTalekerById');
const getTalkerSearch = require('./Middlewares/getTalkerSearch');
const login = require('./Middlewares/login');
const createTalker = require('./Middlewares/createTalker');
const validateAutorization = require('./Middlewares/validateAuthorization');
const {
    validationName, validationAge, validationTalk, validationTalkChildrens,
} = require('./Middlewares/validationInputs');
const editTalker = require('./Middlewares/editTalker');
const deleteTalker = require('./Middlewares/deleteTalker');

const router = express.Router();

router.get('/talker/search', validateAutorization, getTalkerSearch);
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
router.delete('/talker/:id', validateAutorization, deleteTalker);

module.exports = router;