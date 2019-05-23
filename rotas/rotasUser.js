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
	for (var i = filmes.length - 1; i >= 0; i--) {
		if(filmes[i].name == req.body.name){
			search.concat(filmes[i]);
		}
	}
	res.render('homeuser', {lista: search});
	res.end();
})


module.exports = router; 