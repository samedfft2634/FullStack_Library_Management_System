"use strict";
/* ====================================================== */
/*                       LMS - MODEL                      */
/* ====================================================== */

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite:./db.sqlite3");

const Book = sequelize.define("Book", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	author: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	ISBN: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	genre: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	publicationYear: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	image: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
});

// Syncronization:
// sequelize.sync(); // CREATE TABLE
// sequelize.sync({ alter: true }); // TO BACKUP & DROP TABLE & CREATE TABLE & FROM BACKUP

// Connect to db:
sequelize
	.authenticate()
	.then(() => console.log("* DB connected *"))
	.catch(() => console.log("* DB couldn't connected * "));

module.exports = Book;
