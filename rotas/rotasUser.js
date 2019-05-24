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

router.post('/', (req, res) =>{
	res.statusCode = 302;
	res.setHeader('Location', '/user/meus-dados');
	res.end();
});

router.get('/user/meus-dados', (req, res) =>{
	res.render('meusdados');
	res.end();
});

router.get('/user/ver-catalogo', (req, res) =>{
	res.render('homeuser', {lista: filmes});
	res.end();
});

router.post('/user/ver-catalogo', urlencodedParser, (req, res) =>{
	var search = [];
	for(var i = 0; i < (filmes.length - 1); i++) {
		var s = filmes[i].nome;
		console.log(s.includes(req.body.nome));
		if(s.includes(req.body.nome)){
			search.push(filmes[i]);
			console.log(search.length);
		}
	}
	res.render('homeuser', {lista: search});
	res.end();
})


module.exports = router; 