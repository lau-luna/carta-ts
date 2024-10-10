interface Plato {
    nombre: string;
    descripcion: string;
    precio: number;
    tipo: string; // Tipo para filtrar
}

const platos: Plato[] = [
    { nombre: "Hamburguesa completa", descripcion: "Un medallón de carne, huevo, cebolla, jamón", precio: 5000, tipo: "normal" },
    { nombre: "Ensalada de pollo", descripcion: "Pollo, lechuga, tomate, pepino", precio: 5000, tipo: "normal" },
    { nombre: "Pescado con papas", descripcion: "Pescado frito con papas fritas", precio: 6000, tipo: "normal" },
    { nombre: "Tortilla de papas", descripcion: "Tortilla de papas con huevo", precio: 3000, tipo: "vegetariano" },
    { nombre: "Sopa de verduras", descripcion: "Sopa de verduras con pan", precio: 2000, tipo: "vegetariano" },
    { nombre: "Pasta sin gluten", descripcion: "Pasta hecha con harina sin gluten", precio: 4000, tipo: "celiaco" },
    { nombre: "Tacos vegetarianos", descripcion: "Tortillas con vegetales asados", precio: 4500, tipo: "vegetariano" },
];

const carta = document.getElementById("carta") as HTMLDivElement;

function mostrarPlatos(platosAMostrar: Plato[]) {
    carta.innerHTML = ""; // Limpiar la carta actual
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

        // Usar un pequeño retraso para que la animación sea visible
        setTimeout(() => {
            card.classList.add("show");
        }, index * 75); // Retraso de 100ms entre cada tarjeta
    });
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


// Funcion de búsqueda onchange

function buscar(){
    const input = document.getElementById("buscador") as HTMLInputElement;
    const busqueda = input.value.toLowerCase();

    // Buscar por nombre, descripcion y tipo
    const platosBusqueda = platos.filter(plato => 
        plato.nombre.toLowerCase().indexOf(busqueda) !== -1 || 
        plato.descripcion.toLowerCase().indexOf(busqueda) !== -1 ||
        plato.tipo.toLowerCase().indexOf(busqueda) !== -1
    );


    mostrarPlatos(platosBusqueda);
}