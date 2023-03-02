// Seleccionando Elementos

// Por ID 
let elementoPorID = document.getElementById('parrafo1');

// Por Clase
let elementoPorClase = document.getElementsByClassName('parrafos');
console.log(elementoPorClase.length);

// Por Etiqueta
let elementoPorEtiqueta = document.getElementsByTagName('p');
console.log(elementoPorEtiqueta.length);


elementoPorClase[1].innerHTML = 'HTML';
elementoPorID.innerHTML = 'APRENDIENDO EL DOM'
elementoPorEtiqueta[2].innerHTML = 'CSS';

setTimeout(() => {
    // Modificar estilos
    elementoPorID.style.background = 'black';
    elementoPorID.style.color = 'white';
    elementoPorID.style.borderRadius = '8px';
    elementoPorID.style.width = '250px';
    elementoPorID.style.textAlign = 'center';
}, 3000);




let lista = ['hugo', ' sergio' , ' juanmanuel']

lista.forEach(nombre => {
document.write(nombre)    
});





