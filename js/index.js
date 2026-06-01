const meriendas = [
    "Tostadas",
    "Yogur",
    "Fruta",
    "Galletitas",
    "Café"
];

const lista = document.getElementById("lista");

meriendas.forEach(merienda => {
    const item = document.createElement("li");
    item.textContent = merienda;
    lista.appendChild(item);
});

document
    .getElementById("btnCantidad")
    .addEventListener("click", () => {

        document.getElementById("resultado").textContent =
            `La lista contiene ${meriendas.length} meriendas.`;

    });