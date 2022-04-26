const fs = require('fs').promises;
const { SUCESS, NOT_FOUND } = require('../statusCode');

const getTalkerById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await fs.readFile('./talker.json', 'utf8');
        const talker = JSON.parse(data).find((element) => element.id === Number(id));
        if (!talker) {
            return res.status(NOT_FOUND).json({
            message: 'Pessoa palestrante não encontrada',
        }); 
}
        res.status(SUCESS).json(talker);
    } catch (err) {
        console.log(err);
    }
};

module.exports = getTalkerById;