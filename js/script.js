/* bar es el id del boton hamburguesa
navbar es el id de la barra de navegacion completa
Este codigo hace aparecer la barra de navegacion cuando no
se ve en pequenos dispositivos, apretando el boton hamburguesa */

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

/* Este codigo hace desaparecer la barra de navegacion cuando
se apreta la cruz.
close es el id de la cruz */

const close = document.getElementById('close');

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

/* Este codigo cambia la imagen principal
de la pagina con los detalles de cada producto,
clickeando el las fotos pequenas*/

let MainImg = document.getElementById("MainImg");
let smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;
}