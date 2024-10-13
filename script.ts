interface Plato {
    nombre: string;
    descripcion: string;
    precio: number;
    tipo: string; // Tipo para filtrar
}

const platos: Plato[] = [
    // Normal
    { nombre: "Hamburguesa completa", descripcion: "Un medallón de carne, huevo, cebolla, jamón", precio: 5000, tipo: "normal" },
    { nombre: "Ensalada de pollo", descripcion: "Pollo, lechuga, tomate, pepino", precio: 5000, tipo: "normal" },
    { nombre: "Pescado con papas", descripcion: "Pescado frito con papas fritas", precio: 6000, tipo: "normal" },

    // Vegetarianos
    { nombre: "Tortilla de papas", descripcion: "Tortilla de papas con huevo", precio: 3000, tipo: "vegetariano" },
    { nombre: "Sopa de verduras", descripcion: "Sopa de verduras con pan", precio: 2000, tipo: "vegetariano" },
    { nombre: "Tacos vegetarianos", descripcion: "Tortillas con vegetales asados", precio: 4500, tipo: "vegetariano" },

    // Celiacos
    { nombre: "Pasta sin gluten", descripcion: "Pasta hecha con harina sin gluten", precio: 4000, tipo: "celiaco" },

    // Pizzas
    { nombre: "Pizza Margarita", descripcion: "Tomate, mozzarella, albahaca fresca", precio: 3500, tipo: "pizza" },
    { nombre: "Pizza Napolitana", descripcion: "Tomate, mozzarella, ajo, orégano", precio: 3800, tipo: "pizza" },
    { nombre: "Pizza Fugazzeta", descripcion: "Cebolla, mozzarella", precio: 4000, tipo: "pizza" },

    // Pastas
    { nombre: "Spaghetti Carbonara", descripcion: "Spaghetti con salsa de crema y panceta", precio: 4500, tipo: "pasta" },
    { nombre: "Lasagna", descripcion: "Capas de pasta, carne, salsa de tomate y queso", precio: 5500, tipo: "pasta" },
    { nombre: "Ravioles de espinaca", descripcion: "Relleno de espinaca con salsa blanca", precio: 4800, tipo: "pasta" },

    // Bebidas
    { nombre: "Coca-Cola", descripcion: "Bebida gaseosa", precio: 1000, tipo: "bebida" },
    { nombre: "Agua mineral", descripcion: "Agua sin gas", precio: 800, tipo: "bebida" },
    { nombre: "Vino Tinto", descripcion: "Copa de vino tinto", precio: 1500, tipo: "bebida" },

    // Postres
    { nombre: "Helado de chocolate", descripcion: "Helado cremoso de chocolate", precio: 1200, tipo: "postre" },
    { nombre: "Tiramisú", descripcion: "Postre italiano con café y crema", precio: 2000, tipo: "postre" },
    { nombre: "Flan con dulce de leche", descripcion: "Clásico flan argentino con dulce de leche", precio: 1500, tipo: "postre" }
];

const carta = document.getElementById("carta") as HTMLDivElement;

function mostrarPlatos(platosAMostrar: Plato[]) {
    carta.innerHTML = ""; // Limpiar la carta actual

    // Verificar si no hay resultados
    if (platosAMostrar.length === 0) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "No se encontraron resultados.";
        mensaje.className = "text-center mt-4"; // Centrar el texto y añadir margen
        carta.appendChild(mensaje);
        return; // Salir de la función para no ejecutar la animación

    }else{
        platosAMostrar.forEach((plato, index) => {
            const col  = document.createElement("div");
            col.className = "col-md-4 mb-4";
            col.id = "plato";
    
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${plato.nombre}</h5>
                    <p class="card-text">${plato.descripcion}</p>
                    <div class="alert alert-warning col-md-4" role="alert">$${plato.precio}</div>
                </div>
            `;
            col.appendChild(card);
            carta.appendChild(col);
    
            // Retraso para la animación
            setTimeout(() => {
                card.classList.add("show");
            }, index * 75); // Retraso de 75ms entre cada tarjeta
        });
    }
}


// Mostrar todos los platos al cargar
document.addEventListener("DOMContentLoaded", () => {
    mostrarPlatos(platos);
});

// Filtrar platos por tipo
function filtrarPlatos(tipo: string) {
    if (tipo === 'todos') {
        mostrarPlatos(platos);
    } else {
        const platosFiltrados = platos.filter(plato => plato.tipo === tipo);
        mostrarPlatos(platosFiltrados);
    }
}

let debounceTimer: number | undefined;

function buscar() {
    const input = document.getElementById("buscador") as HTMLInputElement;
    const busqueda = input.value.toLowerCase();

    // Limpiar el temporizador previo si el usuario sigue escribiendo
    if (debounceTimer) {
        clearTimeout(debounceTimer);
    }

    // Establecer un nuevo temporizador que retrase la ejecución de la búsqueda
    debounceTimer = window.setTimeout(() => {
        // Buscar por nombre, descripcion y tipo
        const platosBusqueda = platos.filter(plato =>
            plato.nombre.toLowerCase().indexOf(busqueda) !== -1 ||
            plato.descripcion.toLowerCase().indexOf(busqueda) !== -1 ||
            plato.tipo.toLowerCase().indexOf(busqueda) !== -1
        );

        mostrarPlatos(platosBusqueda); // Mostrar los resultados de la búsqueda
    }, 300); // Retraso de 300ms para ejecutar la búsqueda
}