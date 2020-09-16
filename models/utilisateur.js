const { DATE } = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../config')

const usr = db.sequilize.define(
    "co_utilisateur",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },nom: {
            type: Sequelize.STRING
        },prenom: {
            type: Sequelize.STRING
        },dob: {
            type: Sequelize.DATE
        },email: {
            type: Sequelize.STRING
        },password: {
            type: Sequelize.STRING
        },created_date: {
            type: Sequelize.DATE,
            default: DATE.now
        }
    },{
        tableName : 'co_utilisateur',
    }
)

module.exports = usr