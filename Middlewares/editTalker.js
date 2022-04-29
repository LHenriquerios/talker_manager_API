const fs = require('fs').promises;
const { SUCESS } = require('../statusCode');

const editTalker = async (req, res) => {
    const id = Number(req.params.id);

    const data = JSON.parse(await fs.readFile('./talker.json', 'utf8'));
    // const talker = JSON.parse(data).find((t) => t.id === id);
    // data.splice(id - 1, 1, { id, ...req.body });
    console.log(data);
    data[id - 1] = { id, ...req.body };
    await fs.writeFile('./talker.json', JSON.stringify(data));
    res.status(SUCESS).json({ id, ...req.body });
};

module.exports = editTalker;