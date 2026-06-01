const colaciones = [
    { nombre: "Manzana", categoria: "Fruta" },
    { nombre: "Banana", categoria: "Fruta" },
    { nombre: "Pera", categoria: "Fruta" },
    { nombre: "Tostadas", categoria: "Panificado" },
    { nombre: "Medialunas", categoria: "Panificado" },
    { nombre: "Bizcochos", categoria: "Panificado" }
];

const contenedor =
    document.getElementById("contenedor");

function mostrarElementos(lista) {

    contenedor.innerHTML = "";

    lista.forEach(item => {

        const tarjeta =
            document.createElement("div");

        tarjeta.classList.add("tarjeta");

        tarjeta.textContent = item.nombre;

        contenedor.appendChild(tarjeta);

    });

}

mostrarElementos(colaciones);

document
    .getElementById("btnTodos")
    .addEventListener("click", () => {

        mostrarElementos(colaciones);

    });

document
    .getElementById("btnFrutas")
    .addEventListener("click", () => {

        const frutas = colaciones.filter(
            item => item.categoria === "Fruta"
        );

        mostrarElementos(frutas);

    });