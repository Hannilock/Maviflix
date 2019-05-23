const addBut = document.getElementById('add');
const delBut = document.getElementById('del');

addBut.addEventListener('click', function(e){
	window.location.href = "/admin/adicionar";
});
delBut.addEventListener('click', function(e){
	window.location.href = "/admin/remover";
});

