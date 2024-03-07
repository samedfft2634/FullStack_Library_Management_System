"use strict";
/* ====================================================== */
/*                       LMS - CONTROLLER                 */
/* ====================================================== */
const Book = require("../models/lms.model");

module.exports = {
	list: async (req, res) => {
		const data = await Book.findAndCountAll();
		res.status(200).send({
			error: false,
			result: data,
		});
	},

	//CRUD:
	create: async (req, res) => {
		const data = await Book.create(req.body);
		res.status(201).send({
			error: false,
			result: data?.dataValues,
		});
	},

	read: async (req, res) => {
		const data = await Book.findByPk(req.params.id);
		res.status(200).send({
			error: false,
			result: data,
		});
	},

	update: async (req, res) => {
		const oldData = await Book.findByPk(req.params.id);
		const data = await Book.update(req.body, {
			where: { id: req.params.id },
		});
		console.log(oldData);
		res.status(202).send({
			error: false,
			message: "Book informations are updated!",
			result: data,
			old: oldData, // to see old data (optional)
			new: await Book.findByPk(req.params.id), // to see updated data
		});
	},

	delete: async (req, res) => {
		const data = await Book.destroy({ where: { id: req.params.id } });
		if (data > 0) {
			res.sendStatus(204);
		} else {
			//? Send it to ErrorHandler
			res.errorStatusCode = 404;
			throw new Error("Not Found.");
		}
	},
};
