const { DATE } = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../config')

const carte = db.sequilize.define(
    "userfidelite",
    {
        countItems: {
            type: Sequelize.INTEGER
        }
    },{
        tableName : 'userfidelite',
        timestamps: false
    }
)

module.exports = carte