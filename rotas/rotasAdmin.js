const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static(path.join(__dirname +'/../publico')));

router.get('/admin', (req, res) =>{
	res.render('adminmostrar', {lista: filmes});
	res.end();
})

router.get('/admin/adicionar', (req, res) =>{
	res.render('adminadicionar', {lista: filmes});
	res.end();
})

router.post('/admin/adicionar', urlencodedParser, (req, res) =>{
	for (var i = 0; i < filmes.length; i++) {
		if(filmes[i].nome.includes(req.body.nome)){
			filmes[i].visi = true;
			break;
		}
	}
	res.redirect('/admin');
	res.end();
})

router.get('/admin/remover', (req, res) =>{
	res.render('adminremover', {lista: filmes});
	res.end();
})

router.post('/admin/remover', urlencodedParser, (req, res) =>{
	for (var i = 0; i < filmes.length; i++) {
		if(filmes[i].nome.includes(req.body.nome)){
			filmes[i].visi = false;
			break;
		}
	}
	res.redirect('/admin');
	res.end();
})

module.exports = router; 