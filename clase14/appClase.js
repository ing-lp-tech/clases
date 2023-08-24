/*javascript es un lenguaje basado en prototipos, que tiene soporte
para programacion orientada a objetos*/

//paradigmas de programacion

//programacion funcional

//programacion orientada a objetos

//ES5
//funcion constructora

/objeto literal/;
/*const obj={
    color:"rojo",
    peso:90
}*/
/*
function arma(danio, durabilidad, nombre){

    this.danio = danio
    this.durabilidad = durabilidad
    this.categoria = "armamento"
    this.nombre = nombre

}

const espada = new arma(30, 100, "espada de hierro")
const hacha = new arma(40, 120, "hacha de hierro")
hacha. duenio = "gabriel" //agrega dinamicamente una propiedad a un objeto
                          //se aprecia en el constructor "arma" que la propieda "duenio"
                          //no esta definida

console.log(espada)
console.log(hacha)*/

//ES6
//class

class persona {
  constructor(nombre, remuneracion, profesion) {
    this.nombre = nombre;
    this.remuneracion = remuneracion;
    this.profesion = profesion;
    this.dinero = 0;
    this.trabajos = [];
  }

  presentarme() {
    console.log(`hola, soy ${this.nombre}`);
  }

  cobrar() {
    this.dinero = this.remuneracion + this.dinero;
    console.log(`ya cobre, tengo: ${this.dinero}`);
  }

  asignarTrabajo(trabajo) {
    this.trabajos.push(trabajo);
    console.log("ahora consegui el trabajo: " + trabajo);
  }

  /*  obtenerTrabajosActivos(i){
        return this.trabajos[i]
    }*/

  obtenerTrabajosActivos() {
    return this.trabajos;
  }
}

const gabriel = new persona("gabriel", 300000, "ing.informatico");
const martin = new persona("martin", 40000, "junior developer");

gabriel.presentarme();
martin.presentarme();

gabriel.cobrar();
martin.cobrar();

gabriel.presentarme();

gabriel.asignarTrabajo("desarrollo de lading page");
gabriel.asignarTrabajo("mantenimiento");

//console.log(gabriel.obtenerTrabajosActivos(1))

console.log(gabriel.obtenerTrabajosActivos()[1]);

const obtenerNumeroRandom = () => {
  return Math.floor(Math.random() * 10) + 1;
};

///////////

/* 
const obtenerNumeroRandom = () =>{
    return Math.floor(Math.random() * ( 10 )) + 1;
}
 */

/* Crear una clase llamada personaje que tenga las propiedades:


-nombre (param)
-vida = 100
-arma = null
-armadura = (param)
-danioBase = (param)


Metodos:


recibirAtaque(danio): recibira un daño al cual le restara la (decima parte de la armadura + un numero random) , 
y ese danioTotal sera el que le restaremos a la vida de nuestro personaje


calcularAtaque(): devolvera la suma de (danioBase / unNumeroRandom)  y el danio del arma (si es que tiene arma)


atacar(objetivo : objeto) recibira a un objeto Personaje al cual calculara un ataque y activara el metodo recibir ataque de el objetivo
Debera decir por consola el estado de la pelea:
Ejemplo: 'personaje1.nombre ataco a personaje2 inflingiendole 6 de daño y dejandolo con personaje2.vida restante'


asignarArma(arma: objeto) (el arma debe tener las propiedades nombre y danio) : asignara el arma recibida a la propiedad arma


Combate:


Declarar dos objetos de la clase personaje y una variable llamada turno (con el valor 'personaje' o 'enemigo')
asignaremos un arma a cada personaje (o almenos a 1)


Crear un bucle donde se combatira hasta que la vida del personaje1 o personaje2 sea menor o igual a 0


Si algun personaje muere, al finalizar el bucle while se debera decir 'x personaje ha ganado'
RECOMENDACIONES
-Usar la variable turno para ordenar quien ataca




CODIGO DE LA CLASE
class Persona{
    constructor(nombre, remuneracion, profesion){
        this.nombre = nombre
        this.remuneracion = remuneracion
        this.profesion = profesion
        this.dinero = 0
        this.trabajosActivos = []
    }
    presentarme(){
        console.log(`Hola, soy ${this.nombre}`)
    }
    cobrar(){
        this.dinero = this.dinero + this.remuneracion
        console.log('Ya cobre, ahora tengo $' +  this.dinero)
    }
    asignarTrabajo(trabajo){
        this.trabajosActivos.push(trabajo)
        console.log('Ahora consegui el trabajo ' + trabajo)
    }
    obtenerTrabajosActivos (){
        return this.trabajosActivos
    }
}




const laureano = new Persona('Laureano', 301000, 'Junior web developer')
const bianca = new Persona('Bianca', 300000, 'Junior front end web developer')


laureano.presentarme()
laureano.cobrar()
laureano.cobrar()
bianca.presentarme()
bianca.asignarTrabajo('desarrollar una landing page')
console.log(laureano.obtenerTrabajosActivos())
console.log(laureano)
console.log(bianca)
 */
