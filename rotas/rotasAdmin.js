const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/admin', (req, res) =>{
	res.render('adminmostrar');
})

router.get('/admin/adicionar', (req, res) =>{
	res.render('adminadicionar');
})

router.get('/admin/remover', (req, res) =>{
	res.render('adminremover');
})

module.exports = router; 