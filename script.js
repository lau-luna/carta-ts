var platos = [
    { nombre: "Hamburguesa completa", descripcion: "Un medallón de carne, huevo, cebolla, jamón", precio: 5000, tipo: "normal" },
    { nombre: "Ensalada de pollo", descripcion: "Pollo, lechuga, tomate, pepino", precio: 5000, tipo: "normal" },
    { nombre: "Pescado con papas", descripcion: "Pescado frito con papas fritas", precio: 6000, tipo: "normal" },
    { nombre: "Tortilla de papas", descripcion: "Tortilla de papas con huevo", precio: 3000, tipo: "vegetariano" },
    { nombre: "Sopa de verduras", descripcion: "Sopa de verduras con pan", precio: 2000, tipo: "vegetariano" },
    { nombre: "Pasta sin gluten", descripcion: "Pasta hecha con harina sin gluten", precio: 4000, tipo: "celiaco" },
    { nombre: "Tacos vegetarianos", descripcion: "Tortillas con vegetales asados", precio: 4500, tipo: "vegetariano" },
];
var carta = document.getElementById("carta");
function mostrarPlatos(platosAMostrar) {
    carta.innerHTML = ""; // Limpiar la carta actual
    platosAMostrar.forEach(function (plato, index) {
        var col = document.createElement("div");
        col.className = "col-md-4 mb-4";
        col.id = "plato";
        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML = "\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">".concat(plato.nombre, "</h5>\n                <p class=\"card-text\">").concat(plato.descripcion, "</p>\n                <div class=\"alert alert-warning col-md-4\" role=\"alert\">$").concat(plato.precio, "</div>\n            </div>\n        ");
        col.appendChild(card);
        carta.appendChild(col);
        // Usar un pequeño retraso para que la animación sea visible
        setTimeout(function () {
            card.classList.add("show");
        }, index * 75); // Retraso de 100ms entre cada tarjeta
    });
}
// Mostrar todos los platos al cargar
document.addEventListener("DOMContentLoaded", function () {
    mostrarPlatos(platos);
});
// Filtrar platos por tipo
function filtrarPlatos(tipo) {
    if (tipo === 'todos') {
        mostrarPlatos(platos);
    }
    else {
        var platosFiltrados = platos.filter(function (plato) { return plato.tipo === tipo; });
        mostrarPlatos(platosFiltrados);
    }
}
// Funcion de búsqueda onchange
function buscar() {
    var input = document.getElementById("buscador");
    var busqueda = input.value.toLowerCase();
    // Buscar por nombre, descripcion y tipo
    var platosBusqueda = platos.filter(function (plato) {
        return plato.nombre.toLowerCase().indexOf(busqueda) !== -1 ||
            plato.descripcion.toLowerCase().indexOf(busqueda) !== -1 ||
            plato.tipo.toLowerCase().indexOf(busqueda) !== -1;
    });
    mostrarPlatos(platosBusqueda);
}
