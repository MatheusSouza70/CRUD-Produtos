const express = require('express')
const app = express()
// general settings
const session = require('express-session')
const flash = require('connect-flash')

const handlebars = require("express-handlebars")
const handlebars_mod = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')


const bodyParser = require('body-parser')
// routes settings
//const admin = require ('./routes/admin')
const customersRoutes = require('./routes/customersRoutes')

// require models and database settings.
const { sequelize, Sequelize } = require("./config/database")
const customerModel = require("./models/customers")(sequelize,Sequelize)
const ordersModel = require("./models/orders")(sequelize,Sequelize)
customerModel.hasMany(ordersModel)
ordersModel.belongsTo(customerModel)


app.use(session({
    secret:"a_any_key_for_this_project",
    resave: false,
    saveUninitialized: false
}))

app.use(flash())
// middleware to use flashdata
app.use((req,res,next) => {
    res.locals.success_msg = req.flash("success_msg")
    res.locals.error_msg = req.flash("error_msg")
    res.locals.errors = req.session.errors
    next()
})

// forms validator...
//app.use(expressValidator())


// some settings 

app.engine('handlebars', handlebars({
    handlebars: allowInsecurePrototypeAccess(handlebars_mod)
}))
app.set('view engine','handlebars')

// use bodyparser to get post results and URI parameters
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use(customersRoutes)


const PORT = 8081
app.listen(PORT,function(){
    console.log("Server running at " + PORT)
})