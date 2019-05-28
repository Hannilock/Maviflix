function mostrarFilme(n, t, i, d){
	var f = { 'nome' : n, 'tipo' : t, 'img' : i, 'desc' : d };
	localStorage.setItem('filme', JSON.stringify(f));
	window.location.href = '/user/ver-catalogo/filme';
}