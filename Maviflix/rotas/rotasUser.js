const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

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


module.exports = router; 