const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static(path.join(__dirname +'/../publico')));

router.get('/', (req, res) =>{
	res.render('home');
	res.end();
});

router.post('/user/meus-dados', urlencodedParser, (req, res) =>{
	res.render('meusdados', {nome: req.body.nome, senha: req.body.senha});
	res.end();
});

router.get('/user/ver-catalogo', (req, res) =>{
	res.render('homeuser', {lista: filmes});
	res.end();
});

router.post('/user/ver-catalogo', urlencodedParser, (req, res) =>{
	var search = [];
	for(var i = 0; i < (filmes.length); i++) {
		var n = filmes[i].nome;
		if(n.includes(req.body.nome)){
			search.push(filmes[i]);
		}
	}
	res.render('homeuser', {lista: search});
	res.end();
})

router.get('/user/ver-catalogo/filme', (req, res) =>{
	res.render('filmemostrar');
	res.end();
});


module.exports = router; 