const obtenerNumeroRandom = () => {
  return Math.floor(Math.random() * 10) + 1;
};

class personaje {
  constructor(nombre, armadura, danioBase) {
    this.nombre = nombre;
    this.vida = 100;
    this.arma = null;
    this.armadura = armadura;
    this.danioBase = danioBase;
  }

  recibirAtaque(danio) {
    let danioTotal = danio - this.armadura / 10 + obtenerNumeroRandom();
    console.log(danioTotal, "danioTotal");
    if (danioTotal < 0) {
      danioTotal = danioTotal + 2 * -danioTotal;
      console.log(danioTotal, "danioTotal corregido");
    }
    /* this.vida=this.vida-(danio-(this.armadura/10)+obtenerNumeroRandom()) */
    if (danioTotal > 0) {
      this.vida = this.vida - danioTotal;
      console.log("recibi: " + danioTotal + " y quedo con: " + this.vida);
    }

    return this.vida;
  }

  calcularAtaque() {
    return this.danioBase / obtenerNumeroRandom() + this?.arma.danio;
    /*  if (this.arma) {
      return this.danioBase / obtenerNumeroRandom() + this.arma.obtenerDanio();
    } */
  }

  atacar(objetivo) {
    /* console.log(objetivo, "objetivo"); */
    let danio = objetivo.calcularAtaque();
    console.log(danio, "danio");
    objetivo.recibirAtaque(danio);
    console.log(
      "el personaje " +
        this.nombre +
        " tiene vida: " +
        this.vida +
        " y el personaje " +
        objetivo.nombre +
        " tiene vida: " +
        objetivo.vida
    );
  }
  asignarArma(arma) {
    if (arma.nombre && arma.danio) {
      this.arma = arma;
    } else {
      console.log("no es posible asignar arma");
    }
  }
  obtenerVida() {
    return this.vida;
  }
}

class arma {
  constructor(nombre, danio) {
    this.nombre = nombre;
    this.danio = danio;
  }

  obtenerDanio() {
    return this.danio;
  }
}

const piedra = new arma("piedra", 5);
const faca = new arma("faca", 5);

const gabriel = new personaje("gabriel", 80, 20);
const luis = new personaje("luis", 90, 20);

gabriel.asignarArma(piedra);
luis.asignarArma(faca);

function combate(personaje1, personaje2) {
  console.log(personaje1, personaje2, "combate");
  /* 
  console.log(luis.atacar(gabriel));
  console.log(gabriel.atacar(luis));
  console.log(personaje1.vida);
  console.log(personaje2.vida);
  console.log(personaje1, personaje2, "combate1");
  console.log(luis.atacar(gabriel));
  console.log(gabriel.atacar(luis));
  console.log(personaje1.vida);
  console.log(personaje2.vida);
  console.log(personaje1, personaje2, "combate2"); */

  let aux = false;

  do {
    if (aux === false) {
      console.log(personaje1.atacar(personaje2));
      if (personaje2.vida < 0) {
        console.log("gano el personaje : " + personaje1.nombre);
      }
      aux = !aux;
      console.log(personaje1, personaje2, "combate1");
    } else {
      console.log(personaje2.atacar(personaje1));
      if (personaje1.vida < 0) {
        console.log("gano el personaje : " + personaje2.nombre);
      }
      aux = !aux;
      console.log(personaje1, personaje2, "combate2");
    }

    /* console.log(luis.atacar(gabriel));
    console.log(gabriel.atacar(luis));

    console.log(personaje1, personaje2, "combate1");
    console.log(luis.atacar(gabriel));
    console.log(gabriel.atacar(luis));

    console.log(personaje1, personaje2, "combate2");
    if (personaje1.vida < 0) {
      console.log("gano el personaje : " + personaje2.nombre);
    } else {
      if (personaje2.vida < 0)
        console.log("gano el personaje : " + personaje1.nombre);
    } */
  } while (personaje1.vida > 0 && personaje2.vida > 0);

  /*  while ) {
    if (aux === false) {
      console.log(personaje1.atacar(personaje2));
      aux === true;
    } else {
      console.log(personaje2.atacar(personaje1));
    }
  } */
}

combate(luis, gabriel);

/* recibirAtaque(danio): recibira un daño al cual le restara la (decima parte de la armadura + un numero random) , 
y ese danioTotal sera el que le restaremos a la vida de nuestro personaje

calcularAtaque(): devolvera la suma de (danioBase / unNumeroRandom)  y el danio del arma (si es que tiene arma)

atacar(objetivo : objeto) recibira a un objeto Personaje al cual calculara un ataque y activara el metodo recibir ataque de el objetivo
Debera decir por consola el estado de la pelea:
Ejemplo: 'personaje1.nombre ataco a personaje2 inflingiendole 6 de daño y dejandolo con personaje2.vida restante'


asignarArma(arma: objeto) (el arma debe tener las propiedades nombre y danio) : asignara el arma recibida a la propiedad arma


Combate:


Declarar dos objetos de la clase personaje y una variable llamada turno (con el valor 'personaje' o 'enemigo')
asignaremos un arma a cada personaje (o almenos a 1) */
