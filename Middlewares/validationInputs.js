const { BAD_REQUEST } = require('../statusCode');

const validationName = (req, res, next) => {
    const { name } = req.body;

    if (!name) return res.status(BAD_REQUEST).json({ message: 'O campo "name" é obrigatório' });
    if (name.length < 3) {
        return res.status(BAD_REQUEST).json({
            message: 'O "name" deve ter pelo menos 3 caracteres' });
    }

    next();
};

const validationAge = (req, res, next) => {
    const { age } = req.body;

    if (!age) return res.status(BAD_REQUEST).json({ message: 'O campo "age" é obrigatório' });
    if (age < 18) {
        return res.status(BAD_REQUEST).json({
            message: 'A pessoa palestrante deve ser maior de idade' });
    }

    next();
};

const validationTalk = (req, res, next) => {
    const { talk } = req.body;

    if (!talk || !talk.watchedAt || talk.rate === undefined) {
        return res.status(BAD_REQUEST).json({
            message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
        });
    }

    next();
};

const validationTalkChildrens = (req, res, next) => {
    const { watchedAt, rate } = req.body.talk;
    // regex consultado em 'https://www.codegrepper.com/code-examples/javascript/regex+for+date+mm%2Fdd%2Fyyyy'
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!(dateRegex.test(watchedAt))) {
        return res.status(BAD_REQUEST).json({
            message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    if (rate < 1 || rate > 5) {
    return res.status(BAD_REQUEST).json({
        message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    });
    }

    next();
};

module.exports = {
    validationName,
    validationAge,
    validationTalk,
    validationTalkChildrens,
};