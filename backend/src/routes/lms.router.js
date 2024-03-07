"use strict";
/* ====================================================== */
/*                       LMS - ROUTER                     */
/* ====================================================== */
const router = require('express').Router();
const book = require('../controllers/lms.controller')

router.route('/books')
.get(book.list)
.post(book.create)

router.route('/books/:id')
.get(book.read)
.put(book.update)
.patch(book.update)
.delete(book.delete)

module.exports = router