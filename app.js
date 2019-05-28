const express = require('express');
const app = express();
const moduloRotasAdmin = require('./rotas/rotasAdmin');
const moduloRotasUser = require('./rotas/rotasUser');


app.use(express.static(__dirname + '/publico'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(moduloRotasUser);
app.use(moduloRotasAdmin);

class Filme{
	 constructor(nome, tipo, img, desc, visi){
		this.nome = nome;
		this.tipo = tipo;
		this.img = img;
		this.desc = desc;
		this.visi = visi;
	}
}

filmes = [];
filmes[0] = new Filme("evangelion: 1.0 you are (not) alone", "action", "/imgs/eva1.jpg", "desc here", true);
filmes[1] = new Filme("evangelion: 2.0 you can (not) advance", "mecha", "/imgs/eva2.jpg", "desc here", true);
filmes[2] = new Filme("evangelion: 3.0 you can (not) redo", "drama", "/imgs/eva3.jpg", "desc here", true);
filmes[3] = new Filme("her", "drama", "/imgs/her.jpg", "desc here", true);
filmes[4] = new Filme("les miserables", "musical", "/imgs/lesmis.jpg", "desc here", true);
filmes[5] = new Filme("doukyuusei", "romance", "/imgs/doukyuusei.jpg", "desc here", true);

app.get('*', (req, res) => {
	res.statusCode = 404;
	res.write('oops 404 - not found');
	res.end();
});

app.listen(3000);
console.log('Server running on http://localhost:3000');