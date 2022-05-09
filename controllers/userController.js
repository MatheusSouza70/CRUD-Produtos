const { sequelize, Sequelize } = require("../config/database")
//models settings
const customerModel = require("../models/customers")(sequelize, Sequelize)
const ordersModel = require("../models/orders")(sequelize, Sequelize)
//encrypt md5 function
const md5 = require('md5')
const { validationResult } = require('express-validator');


exports.registrationMethod = (req, res) => {
    res.render("users/register", { title: "Registration", layout: "formregistermaster", errors: req.session.errors })
}// exports registrationMethod



exports.create = (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        req.session.errors = errors.array()
        return res.redirect('/registration')
    }


    const customerSetData = {
        name: req.body.name,
        email: req.body.email,
        passwd: md5(req.body.passwd)
    }

    customerModel.findOne({
        where: {
            email: customerSetData.email
        }

    }).then((result) => {
        if (!result) {

            customerModel.create(customerSetData).then(data => {
                req.flash("success_msg", "Usuário registrado com sucesso.")
                console.log("Usuário registrado com sucesso.")
                res.redirect('/');
            }).catch((err) => {
                console.log("oops" + err.message)
                req.flash("error_msg", "Houve um problema com o processo de registro.")
                res.redirect('/')
            })


            //res.send({ message:"not result", error: result, email: customerSetData.email} )
        } else {

            // if exist one, so redirect to login page with suitable warning message
            req.flash("error_msg", "Usuário já registrado.")
            //res.send({ error: result, email: customerSetData.email} )
            console.log("Usuário já registrado...")
            res.redirect('/')
        }


    }).catch((err) => {

        console.log("oops" + err.message)
        req.flash("error_msg", "Houve um problema com o processo de registro.")
        res.redirect('/')

    })



}// exports create



exports.login = (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        req.session.errors = errors.array()
        return res.redirect('/')
    }

    const customerSetData = {
        email: req.body.email,
        password: md5(req.body.password)
    }


    customerModel.findOne({
        where: {
            email: customerSetData.email,
            passwd: customerSetData.password
        }

    }).then((result) => {
        if (!result) {

            req.flash("error_msg", "Usuário ou senha não coincidem.")
            console.log("Usuário ou senha não coincidem.")
            res.redirect('/');
        } else {

            console.log("Senha e Email coincidem.")
            if (result.name == 'admin') {

                console.log("Entrando na sessão de admin")
                res.redirect('/admin')

            } else {
                console.log("Entrando na sessão.")
                req.session.user = result
                res.redirect('/usersession')
            }
        }


    }).catch((err) => {

        console.log("oops" + err.message)
        req.flash("error_msg", "Houve um problema com o processo de registro.")
        res.redirect('/')

    })


}//exports login


exports.logout = (req, res) => {

    if (req.session.user) {
        req.session.destroy();
    }
    res.redirect('/');

}//logout




exports.userSession = (req, res) => {
    userdata = req.session.user
    console.log(userdata.name)
    console.log(userdata.id)
    ordersModel.findAll({
        order: [['description', 'ASC']],
        where: {
            customer_id: userdata.id
        }
    }).then((orders) => {

        res.render("users/usersession", { title: "Session", layout: "sessionmaster", admin: false, userdata: userdata, orders: orders });
    }
    ).catch(err => {
        req.flash("error_msg", "Houve um problema para carregar os produtos.")
        res.redirect('/')
    })

}// esports userSession

exports.ordersView = (req, res) => {
    userdata = req.session.user
    res.render('users/insertorders', { title: "Orders", layout: "sessionmaster", admin: false, userdata: userdata })
}// exports

exports.ordersSave = (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        req.session.errors = errors.array()
        return res.redirect('/orders')
    }
    const orderSetData = {
        customer_id: req.session.user.id,
        description: req.body.description,
        amount: req.body.amount
    }


    ordersModel.create(orderSetData).then(data => {
        console.log("Order: " + orderSetData.description + "Salvo com sucesso.")
        console.log("customer_id" + orderSetData.customer_id)
        res.redirect('/usersession');
    }).catch((err) => {
        console.log("oops" + err.message)
        req.flash("error_msg", "Houve um problema para salvar.")
        res.redirect('/orders')
    })

}//exports

exports.deleteOrder = (req, res) => {

    const id = req.params.id; // order id to be deleted

    ordersModel.destroy({
        where: { id: id }
    }).then((result) => {
        if (!result) {
            req.status(400).send({ message: "Ocorreu um erro ao remover este produto." })
        }
        res.redirect('/usersession')
    }).catch((err) => {
        res.status(500).send({
            message: "Não pode deletar o produto com id = " + id
        });
    })

}


exports.updateFormOrder = (req, res) => {
    const id = req.params.id;
    userdata = req.session.user
    ordersModel.findOne({
        where: { id: id }
    }).then(order => {
        if (order) {
            res.render('users/editorder', { title: "Orders", layout: "sessionmaster", admin: false, order: order })
        } else {
            req.status(400).send({ message: "Ocorreu um erro ao atualizar este produto." })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Erro ao atualizar o item com id =" + id
        });
    })
}



exports.updateOrder = (req, res) => {
    const orderid = req.params.id;

    ordersModel.update({
        description: req.body.description,
        amount: req.body.amount
    },
        {
            where: { id: orderid }
        }).then(num => {
            if (!num) {
                req.status(400).send({ message: "Ocorreu um erro ao tentar atualizar o produto." })
            }
            res.redirect('/usersession');
        }).catch(err => {
            res.status(500).send({
                message: "Erro ao atualizar item com id = " + orderid
            });
        });
};
