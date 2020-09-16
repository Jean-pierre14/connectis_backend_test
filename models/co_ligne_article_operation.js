const { DATE } = require('sequelize')
const Sequelize = require('sequelize')
const { sequilize } = require('../config')
const db = require('../config')

const ligne = db.sequilize.define(
    "co_ligne_article_operation",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },produit_id: {
            type: Sequelize.INTEGER
        },operation_id: {
            type: Sequelize.INTEGER
        },quantite: {
            type: Sequelize.INTEGER
        },prix: {
            type: Sequelize.INTEGER
        }
    },{
        tableName : 'co_ligne_article_operation',
        timestamps: false
    }
)

module.exports = ligne