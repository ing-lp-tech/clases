/* console.log(fetch('https://jsonplaceholder.typicode.com/todos/1', {method: "GET"})) */

const llamarAJSONplaceholder = async () => {
  const respuesta = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1",
    { method: "GET" }
  );
  console.log(respuesta);
};

const funcionAsincronica = async () => {
  const respuesta = await fetch("https://swapi.dev/api/people/1/", {
    method: "GET",
  });

  console.log(respuesta);

  console.log("hola desde async");
};

funcionAsincronica();

llamarAJSONplaceholder();

console.log("hola");
