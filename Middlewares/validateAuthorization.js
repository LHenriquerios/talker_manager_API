 const { UNAUTHORIZED } = require('../statusCode');

const validateAutorization = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) return res.status(UNAUTHORIZED).json({ message: 'Token não encontrado' });
    if (authorization.length !== 16) {
      return res.status(UNAUTHORIZED).json({ message: 'Token inválido' });
    }

    next();
};

module.exports = validateAutorization;