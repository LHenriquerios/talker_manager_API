const fs = require('fs').promises;
const { CREATED } = require('../statusCode');

const createTalker = async (req, res) => {
    const log = req.body;
    const data = JSON.parse(await fs.readFile('./talker.json', 'utf8'));
    await fs.writeFile('./talker.json', JSON.stringify([...data, {
        id: data.length + 1, ...log }], null, 1));
    return res.status(CREATED).json({ id: data.length + 1, ...log });
};

module.exports = createTalker;