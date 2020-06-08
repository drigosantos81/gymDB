const { age, date, birthDay } = require('../../lib/utils');

module.exports = {
    // index
    index(req, res) {
        return res.render("members/index");
    },

    // Exibe a página create
    create(req, res) {
        return res.render("members/create");
    },

    // create - POST (Exibe a página para preencher com os dados)
    post(req, res) {
        const keys = Object.keys(req.body);

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Por favor, preencha todos os campos.");
            }
        }
        return

    },

    // show (Exibe a página com os dados do registro)
    show(req, res) {
        return
    
    },

    // edit (Exibe formulário com os dados disponivéis para alteração)
    edit(req, res) {
        return
    },

    // update - PUT (Comando de atualização)
    put(req, res) {
        const keys = Object.keys(req.body);

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Por favor, preencha todos os campos.");
            }
        }
        return
    },

    // delete - DELETE (Comando de deletar)
    delete(req, res) {
        return
    },
}
