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
    contents: {
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

Chapter.hasMany(Footnote, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Footnote.belongsTo(Chapter, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

module.exports = Chapter