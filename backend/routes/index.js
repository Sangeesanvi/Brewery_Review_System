const express = require('express');
const router = express.Router();
const breweriesRouter = require('./breweries');

router.use('/breweries', breweriesRouter);

module.exports = router;
