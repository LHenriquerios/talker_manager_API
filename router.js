const express = require('express');
const fs = require('fs');

const router = express.Router();

const data = fs.readFileSync('talker.json', 'utf8');
console.log(data);

router.get('/talker', (_req, res) => res.status(200).send(data));

module.exports = router;