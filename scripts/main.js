// let nombreDeLaVariable = 'Danie';
// nombreDeLaVariable = 'Evelyn'

// let helado = 'chocolate';
// if (helado === 'chocolate'){
//     alert('¡Si, amo el helado de chocolate!')
// } else{
//     alert('Awww, pero mi favorito es el de chocolate')
// }

// document.querySelector('html').onclick = function() {
//     alert('¡Ouch! ¡Deja de pincharme!');
// }

let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/manantial.JPG') {
      miImage.setAttribute('src','images/manantial2.JPG');
    } else {
      miImage.setAttribute('src', 'images/manantial.JPG');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    if(!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.textContent = 'Albercas el Manantial son lo mejor ' + miNombre;
    } 
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Albercas el Manantial son lo mejor ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();

}