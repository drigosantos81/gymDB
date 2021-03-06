const Member = require('../models/Member');
const { age, date, birthDay } = require('../../lib/utils');

module.exports = {
    // index
    index(req, res) {        
        let { filter, page, limit } = req.query;

        page = page || 1;
        limit = limit || 2;
        let offset = limit * (page - 1);

        const params = {
            filter,
            page,
            limit,
            offset,
            callback(members) {

                const pagination = {
                    total: Math.ceil(members[0].total / limit),
                    page
                }
                
                return res.render('members/index', { members, pagination, filter });
            }            
        }

        Member.paginate(params);
    },

    // Exibe a página create
    create(req, res) {
        Member.instructorSelectOptions(function(options) {
            return res.render("members/create", { instructorOptions: options });
        });
    },

    // create - POST (Exibe a página para preencher com os dados)
    post(req, res) {
        const keys = Object.keys(req.body);

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Por favor, preencha todos os campos.");
            }
        }

        Member.create(req.body, function(member) {
            return res.redirect(`/members/${member.id}`);
        })
    },

    // show (Exibe a página com os dados do registro)
    show(req, res) {
        Member.find(req.params.id, function(member) {
            if (!member) {
                return res.send('Registro não encontrado!')
            }

            member.age = age(member.birth);
            member.birthDay = birthDay(member.birth).iso;
            member.created_at = date(member.created_at).format;
            
            return res.render('members/show', { member })
        });
    },

    // edit (Exibe formulário com os dados disponivéis para alteração)
    edit(req, res) {
        Member.find(req.params.id, function(member) {
            if (!member) {
                return res.send("Registro não encontrado!")
            }

            member.birth = date(member.birth).iso;

            Member.instructorSelectOptions(function(options) {
                return res.render("members/edit", { member, instructorOptions: options });
            });
        });
    },

    // update - PUT (Comando de atualização)
    put(req, res) {
        const keys = Object.keys(req.body);

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Por favor, preencha todos os campos.");
            }
        }

        Member.update(req.body, function() {
            return res.redirect(`/members/${req.body.id}`)
        });
    },

    // delete - DELETE (Comando de deletar)
    delete(req, res) {
        Member.delete(req.body.id, function() {
            return res.redirect(`/members`)
        });
    },
}
