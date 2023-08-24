const contenedorHTML = document.getElementById("contenedor");

const mostrarRespuesta = () => {
  if (lukeskywalker) {
    contenedorHTML.innerHTML = `

            <div>

                <h2>${lukeskywalker.name}</h2>

            </div>

        `;
  } else {
    contenedorHTML.innerHTML = "<span>Cargando</span>";
  }
};

let lukeskywalker = null;

const funcionAsincronica = async () => {
  lukeskywalker = await fetch("https://swapi.dev/api/people/1/", {
    method: "GET",
  }).then((respuesta) => respuesta.json());

  mostrarRespuesta();
};

funcionAsincronica();

mostrarRespuesta();
