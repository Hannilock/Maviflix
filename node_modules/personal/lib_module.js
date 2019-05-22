const express = require('express');
const path = require('path');

class Filme{
	 constructor(nome, tipo, img, desc){
		this.nome = nome;
		this.tipo = tipo;
		this.img = img;
		this.desc = desc;
	}
}

class User{
	constructor(nickname, senha){
		this.nickname = nickname;
		this.senha = senha;
	}

}

let users = [];

let filmes = [];
filmes[0] = new Filme("Evangelion: 1.0 You Are (Not) Alone", "action", "imgs/eva1.jpg", "desc here");
filmes[0] = new Filme("Evangelion: 2.0 You Can (Not) Advance", "mecha", "imgs/eva2.jpg", "desc here");
filmes[0] = new Filme("Evangelion: 3.0 You Can (Not) Redo", "drama", "imgs/eva3.jpg", "desc here");

module.exports.addUser = function(n, s){
	users.push(new User(n, s));
};

module.exports.addFilme = function(pos){
	console.log('filme adicionado!');
};

module.exports.delFilme = function(pos){
	console.log('filme removido!');
};

module.exports.filmes = filmes; 
module.exports.users = users;