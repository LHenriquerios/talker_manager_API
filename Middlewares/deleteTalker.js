const fs = require('fs').promises;
const { NO_CONTENT } = require('../statusCode');

const deleteTalker = async (req, res) => {
    const { id } = req.params;
    
    try {
    const data = JSON.parse(await fs.readFile('./talker.json', 'utf8'));
    data.splice(id - 1, 1);
    await fs.writeFile('./talker.json', JSON.stringify(data));
    res.status(NO_CONTENT).json();
    } catch (err) {
        console.error(err);
    }
};

module.exports = deleteTalker;