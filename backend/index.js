"use strict";
/* ====================================================== */
/*       FULLSTACK - Library Management System (LMS)      */
/* ====================================================== */
const express = require("express");
const app = express();

require('dotenv').config();
const PORT = process.env?.PORT || 8000;
const HOST = process.env?.HOST || "127.0.0.1";
/* ====================================================== */
// Accept json data:
app.use(express.json())

// Catch async-errors:
require('express-async-errors')

// Routes:
// app.use(require('./src/routes/lms.router'))

// ErrorHandler
// app.use(require('./src/errorHandler'))
/* ====================================================== */
app.listen(8000, () => console.log(`Server running on : http://${HOST}:${PORT}`));