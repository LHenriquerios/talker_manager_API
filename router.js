const express = require('express');
const fs = require('fs');

const json = fs.readFileSync('talker.json', 'utf8');
console.log(json);

const router = express.Router();

router.get('/talker', (_req, res) => res.status(200).send(json));

module.exports = router;