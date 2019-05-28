var filme = JSON.parse(localStorage.getItem("filme")); 

document.getElementById("nome").innerHTML = filme.nome; 
document.getElementById("tipo").innerHTML = filme.tipo; 
document.getElementById("desc").innerHTML = filme.desc; 
document.getElementById("poster").src = filme.img; 