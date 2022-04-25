const express = require('express');
const fs = require('fs').promises;

const router = express.Router();

router.get('/talker', (_req, res) => {
fs.readFile('talker.json', 'utf8')
.then((data) => {
    res.status(200).json(JSON.parse(data));
})
.catch((err) => {
 console.log(err);
});
});

module.exports = router;