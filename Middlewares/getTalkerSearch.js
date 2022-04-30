const fs = require('fs').promises;
const { SUCESS } = require('../statusCode');

const getTalkerSearch = async (req, res, next) => {
    const { q } = req.query;

    try {
    const data = JSON.parse(await fs.readFile('./talker.json', 'utf8'));
    const dataFilter = data.filter((r) => r.name.includes(q));
    res.status(SUCESS).json(dataFilter);
    } catch (err) {
        console.error(err);
        next(err);
    }
};

module.exports = getTalkerSearch;