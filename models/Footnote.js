const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utils/db');

const Footnote = db.define('Footnote', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

});

module.exports = Footnote