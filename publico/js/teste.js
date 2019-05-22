$(document).ready(function(){
	console.log('i went here');
	const express = require('./../../node_modules/express');
	const app = express();
	app.use(express.static("./../../publico"));
	const lib = require('/personal/lib_module.js');
	const lista = lib.filmes;
	for(var i = 0; i < lista.length; i++){
		$("movies_holder").append("<div class=\"movie\"></div>");
		console.log('i went here');
	}
});
