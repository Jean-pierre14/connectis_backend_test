const { DATE } = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../config')

const carte = db.sequilize.define(
    "co_produits",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },nom: {
            type: Sequelize.STRING
        },volume: {
            type: Sequelize.STRING
        },prix: {
            type: Sequelize.INTEGER
        }
    },{
        tableName : 'co_produits',
        timestamps: false
    }
)

module.exports = carte