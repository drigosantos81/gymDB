const Instructor = require('../models/Instructor');

module.exports = {
    // index
    index(req, res) {
        
        Instructor.all(function(instructors) {
            return res.render("instructors/index", { instructors });
        });
    },

    // Exibe a página create
    create(req, res) {
        return res.render("instructors/create");
    },

    // create - POST (Exibe a página para preencher com os dados)
    post(req, res) {
        const keys = Object.keys(req.body);

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Por favor, preencha todos os campos.");
            }
        }

        Instructor.create(req.body, function(instructor) {
            return res.redirect(`/instructors/${instructor.id}`);
        })
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
