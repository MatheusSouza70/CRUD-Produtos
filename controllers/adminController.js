const { sequelize, Sequelize } = require("../config/database")
//models settings
const customerModel = require("../models/customers")(sequelize, Sequelize)
const ordersModel = require("../models/orders")(sequelize, Sequelize)
//tables settings
customerModel.hasMany(ordersModel, { foreignKey: "customer_id" })
ordersModel.belongsTo(customerModel, { foreignKey: "customer_id" })


exports.adminView = (req, res) => {


    /*
    SELECT `customers`.id, `customers`.name, `customers`.`email`, `orders`.id, `orders`.description,`orders`.`amount`   FROM `orders` INNER JOIN `customers` on `orders`.customer_id = `customers`.id ORDER BY `customers`.name, `orders`.description
    
    */
    console.log("at admsession controller")
    customerModel.findAll({
        raw: false,
        nest: false,
        order: [['name', 'ASC']],
        include: [{
            model: ordersModel,
            required: true
        }]
    }).then(results => {

        res.render("admin/adminsession", { title: "ADMINISTRATION", layout: "sessionmaster", admin: true, results: results });

    }).catch(err => {
        res.status(500).send({
            message: "Error " + err.message,

        });
    });



}// exports registrationMethod