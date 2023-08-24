let numero = 0;
const contadorHTML = document.getElementById("contador");

contadorHTML.innerText = numero;

const btnRestar = document.getElementById("buttonRestar");
const btnSumar = document.getElementById("buttonSumar");

const alertaHTML = document.getElementById("alerta");

/* const cuenta = (x) => {
  if (x == "restar") {
    if (numero > 0) {
      numero = --numero;
    }
  }
  if (x == "sumar") {
    if (numero < 10) {
      numero = ++numero;
    }
  }
  return numero;
};

btnRestar.addEventListener("click", (evento) => {
  contadorHTML.innerText = cuenta("restar");
});
btnSumar.addEventListener("click", (evento) => {
  contadorHTML.innerText = cuenta("sumar");
}); */

btnRestar.addEventListener("click", () => {
  if (numero > 0) {
    contadorHTML.innerText = --numero;
    alertaHTML.innerText = "";
  }
  if (numero == 0) {
    alertaHTML.innerText = "No puedes decrementar";
    alertaHTML.style.color = "red";
  }
});
btnSumar.addEventListener("click", () => {
  if (numero < 10) {
    contadorHTML.innerText = ++numero;
    alertaHTML.innerText = "";
  }
  if (numero == 10) {
    alertaHTML.innerText = "No puedes crementar";
    alertaHTML.style.color = "red";
  }
});

const mensajeHTML = document.getElementById("mensaje");

const btnVer = document.getElementById("btnVer");

btnVer.addEventListener("click", () => {
  mensajeHTML.classList.toggle("ocultar");
});

/* 

Crear un parrafo con un lorem, luego crear un boton, cuando le demos click al 
boton el parrafo se debera ocultar y al darle click otra vez se debera mostrar

*/

/* MOSTRAR Y OCULTAR RECOMENDADOS

 

Crear un array de objetos con usuarios donde cada usuario tenga las propiedaes:

 

-Nombre

-Nickname

-Descripcion

 

A parir de este array de objetos generar una carta por cada usuario con la sig forma

 

<div>

    <h2>Nombre</h2>

    <h3>Nick</h3>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi error dicta nostrum atque dolor consequuntur? Praesentium nesciunt quae fugiat fugit repellendus sequi unde eligendi mollitia. Cumque quaerat aut eum repellat.</p>

</div>

 

TODOS LAS PERSONAS SE DEBERAN RENDERIZAR EN UN DIV CONTENEDOR

 

crear un boton que diga <button>Ocultar recomendados</button>

Al darle click el boton ocultara los recomendados y su texto cambiara a <button>Mostrar recomendados</button>

Al darle click otra vez mostrara los recomendados y volvera a cambiar el texto (asi por cada vez que vayamos ocultando y mostrando) */
