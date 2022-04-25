const express = require('express');
const fs = require('fs').promises;

const router = express.Router();

fs.readFile('talker.json', 'utf8')
.then((data) => {
    router.get('/talker', (_req, res) => res.status(200).json(JSON.parse(data)));
})
.catch((err) => {
 console.log(err);
});

module.exports = router;