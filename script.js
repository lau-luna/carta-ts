var platos = [
    // Normal
    { nombre: "Hamburguesa completa", descripcion: "Un medallón de carne, huevo, cebolla, jamón", precio: 5000, tipo: "normal", platoDelDia: false },
    { nombre: "Ensalada de pollo", descripcion: "Pollo, lechuga, tomate, pepino", precio: 5000, tipo: "normal", platoDelDia: false },
    { nombre: "Pescado con papas", descripcion: "Pescado frito con papas fritas", precio: 6000, tipo: "normal", platoDelDia: false },
    // Vegetarianos
    { nombre: "Tortilla de papas", descripcion: "Tortilla de papas con huevo", precio: 3000, tipo: "vegetariano", platoDelDia: false },
    { nombre: "Sopa de verduras", descripcion: "Sopa de verduras con pan", precio: 2000, tipo: "vegetariano", platoDelDia: false },
    { nombre: "Tacos vegetarianos", descripcion: "Tortillas con vegetales asados", precio: 4500, tipo: "vegetariano", platoDelDia: false },
    // Celiacos
    { nombre: "Pasta sin gluten", descripcion: "Pasta hecha con harina sin gluten", precio: 4000, tipo: "celiaco", platoDelDia: false },
    // Pizzas
    { nombre: "Pizza Margarita", descripcion: "Tomate, mozzarella, albahaca fresca", precio: 3500, tipo: "pizza", platoDelDia: false },
    { nombre: "Pizza Napolitana", descripcion: "Tomate, mozzarella, ajo, orégano", precio: 3800, tipo: "pizza", platoDelDia: false },
    { nombre: "Pizza Fugazzeta", descripcion: "Cebolla, mozzarella", precio: 4000, tipo: "pizza", platoDelDia: false },
    // Pastas
    { nombre: "Spaghetti Carbonara", descripcion: "Spaghetti con salsa de crema y panceta", precio: 4500, tipo: "pasta", platoDelDia: false },
    { nombre: "Lasagna", descripcion: "Capas de pasta, carne, salsa de tomate y queso", precio: 5500, tipo: "pasta", platoDelDia: true },
    { nombre: "Ravioles de espinaca", descripcion: "Relleno de espinaca con salsa blanca", precio: 4800, tipo: "pasta", platoDelDia: false },
    // Bebidas
    { nombre: "Coca-Cola", descripcion: "Bebida gaseosa", precio: 1000, tipo: "bebida", platoDelDia: false },
    { nombre: "Agua mineral", descripcion: "Agua sin gas", precio: 800, tipo: "bebida", platoDelDia: false },
    { nombre: "Vino Tinto", descripcion: "Copa de vino tinto", precio: 1500, tipo: "bebida", platoDelDia: false },
    // Postres
    { nombre: "Helado de chocolate", descripcion: "Helado cremoso de chocolate", precio: 1200, tipo: "postre", platoDelDia: false },
    { nombre: "Tiramisú", descripcion: "Postre italiano con café y crema", precio: 2000, tipo: "postre", platoDelDia: false },
    { nombre: "Flan con dulce de leche", descripcion: "Clásico flan argentino con dulce de leche", precio: 1500, tipo: "postre", platoDelDia: false }
];
var carta = document.getElementById("carta");
function mostrarPlatos(platosAMostrar) {
    carta.innerHTML = ""; // Limpiar la carta actual
    // Verificar si no hay resultados
    if (platosAMostrar.length === 0) {
        var mensaje = document.createElement("p");
        mensaje.textContent = "No se encontraron resultados.";
        mensaje.className = "text-center mt-4"; // Centrar el texto y añadir margen
        carta.appendChild(mensaje);
        return; // Salir de la función para no ejecutar la animación
    }
    else {
        platosAMostrar.forEach(function (plato, index) {
            var col = document.createElement("div");
            col.className = "col-md-4 mb-4";
            col.id = "plato";
            var card = document.createElement("div");
            card.className = "card";
            card.innerHTML = "\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">".concat(plato.nombre, "</h5>\n                    <p class=\"card-text\">").concat(plato.descripcion, "</p>\n                    <div class=\"alert alert-warning\" role=\"alert\">$").concat(plato.precio, "</div>\n                </div>\n            ");
            col.appendChild(card);
            carta.appendChild(col);
            // Retraso para la animación
            setTimeout(function () {
                card.classList.add("show");
            }, index * 75); // Retraso de 75ms entre cada tarjeta
        });
    }
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
// Filtrar por plato del dia
function filtrarPlatoDelDia() {
    var platosFiltrados = platos.filter(function (plato) { return plato.platoDelDia === true; });
    mostrarPlatos(platosFiltrados);
}
var debounceTimer;
function buscar() {
    var input = document.getElementById("buscador");
    var busqueda = input.value.toLowerCase();
    // Limpiar el temporizador previo si el usuario sigue escribiendo
    if (debounceTimer) {
        clearTimeout(debounceTimer);
    }
    // Establecer un nuevo temporizador que retrase la ejecución de la búsqueda
    debounceTimer = window.setTimeout(function () {
        // Buscar por nombre, descripcion y tipo
        var platosBusqueda = platos.filter(function (plato) {
            return plato.nombre.toLowerCase().indexOf(busqueda) !== -1 ||
                plato.descripcion.toLowerCase().indexOf(busqueda) !== -1 ||
                plato.tipo.toLowerCase().indexOf(busqueda) !== -1;
        });
        mostrarPlatos(platosBusqueda); // Mostrar los resultados de la búsqueda
    }, 300); // Retraso de 300ms para ejecutar la búsqueda
}
