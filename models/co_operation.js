const { DATE } = require('sequelize')
const Sequelize = require('sequelize')
const { sequilize } = require('../config')
const db = require('../config')

const operation = db.sequilize.define(
    "co_operation",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },emeteur: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'CONNECTIS'
        },recepteur: {
            type: Sequelize.STRING
        },prix: {
            type: Sequelize.INTEGER
        },date_operation: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            defaultValue: new Date()
        },id_type_operation: {
            type: Sequilize.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    },{
        tableName : 'co_operation',
        timestamps: false
    }
)

module.exports = operation