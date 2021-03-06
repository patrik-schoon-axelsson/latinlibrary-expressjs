const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utils/db');
const Chapter = require('./Chapter');

const Book = db.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    yearOfPublicationCE: {
        type: DataTypes.DATE,
        allowNull: true
    }
});

Book.hasMany(Chapter, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Chapter.belongsTo(Book, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

module.exports = Book