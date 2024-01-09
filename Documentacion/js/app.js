setInterval(changeColor, 1000);

let titulo = document.getElementById('titulo');
function changeColor(){
    titulo.classList.toggle('oscuro');
}