const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utils/db');
const Footnote = require('./Footnote');

const Chapter = db.define('Chapter', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    chapterNo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    chaptContent: {
        type: DataTypes.STRING,
        allowNull: false
    },
    translator: {
        type: DataTypes.STRING,
        defaultValue: "Unknown Translator"
    },
    yearOfTranslation: {
        type: DataTypes.DATE,
        allowNull: true
    }
});

Chapter.hasMany(Footnote);
Footnote.belongsTo(Chapter);

module.exports = Chapter