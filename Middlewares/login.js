const { SUCESS, BAD_REQUEST } = require('../statusCode');

// função retirada do blog 'https://www.webtutorial.com.br/funcao-para-gerar-uma-string-aleatoria-random-com-caracteres-especificos-em-javascript/'
function geraToken() {
    let stringAleatoria = '';
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 16; i += 1) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
}

const login = (req, res) => {
    const { email, password } = req.body;
    const re = /\S+@\S+\.\S+/;
    const INVALID_EMAIL = 'O "email" deve ter o formato "email@email.com"';
    const INVALID_PASSWORD = 'O "password" deve ter pelo menos 6 caracteres';
    if (!email) {
        return res.status(BAD_REQUEST).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!re.test(email)) {
        return res.status(BAD_REQUEST).json({ message: INVALID_EMAIL });
    }
    if (!password) {
        return res.status(BAD_REQUEST).json({ message: 'O campo "password" é obrigatório' });
    }
    if (password.length < 6) {
        return res.status(BAD_REQUEST).json({ message: INVALID_PASSWORD });
    }
    return res.status(SUCESS).json({ token: geraToken() });
};

module.exports = login;