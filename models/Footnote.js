const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utils/db');

const Footnote = db.define('Footnote', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    reference: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

Footnote.hasOne(User);

module.exports = Footnote