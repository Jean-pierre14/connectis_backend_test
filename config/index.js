const Sequelize = require('sequelize')
const db = {}
const sequilize = new Sequelize("connectis", "root", "", {
    host: "localhost",
    dialect: "mysql",
    operatorAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequilize = sequilize
db.Sequelize = Sequelize

module.exports = db