const express = require('express');
const app = express();
const moduloRotasAdmin = require('./rotas/rotasAdmin');
const moduloRotasUser = require('./rotas/rotasUser');

app.use(express.static(__dirname + '/publico'));

class Filme{
	 constructor(nome, tipo, img, desc){
		this.nome = nome;
		this.tipo = tipo;
		this.img = img;
		this.desc = desc;
	}
}

filmes = [];
filmes[0] = new Filme("Evangelion: 1.0 You Are (Not) Alone", "action", "/imgs/eva1.jpg", "desc here");
filmes[1] = new Filme("Evangelion: 2.0 You Can (Not) Advance", "mecha", "/imgs/eva2.jpg", "desc here");
filmes[2] = new Filme("Evangelion: 3.0 You Can (Not) Redo", "drama", "/imgs/eva3.jpg", "desc here");

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(moduloRotasUser);
app.use(moduloRotasAdmin);

app.get('*', (req, res) => {
	res.statusCode = 404;
	res.write('oops 404 - not found');
	res.end();
});

app.listen(3000);
console.log('Server running on http://localhost:3000');