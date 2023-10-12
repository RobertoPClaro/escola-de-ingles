const bodyParse = require('body-parser');
const pessoas = require('./pessoasRoute');

module.exports = app => {
    app.use(bodyParse.json())
    app.use(pessoas);

    app.get("/", (req, res) => {
        res.status(200)
            .send({mensagem: "Ola"})
    })
}