const fs = require('fs').promises;
const { SUCESS } = require('../statusCode');

const getTalker = async (_req, res, next) => {
    try {
        const data = await fs.readFile('./talker.json', 'utf8');
        return res.status(SUCESS).json(JSON.parse(data));
    } catch (err) {
        console.log(err);
        next(err);
    }
};

module.exports = getTalker;