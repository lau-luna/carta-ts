interface Plato {
    nombre: string;
    descripcion: string;
    precio: number;
    tipo: string; // Tipo para filtrar
}

const platos: Plato[] = [
    { nombre: "Hamburguesa completa", descripcion: "Un medallon de carne, huevo, cebolla, jamon", precio: 5000, tipo: "normal" },
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
    platosAMostrar.forEach(plato => {
        const card = document.createElement("div");
        card.className = "card col-md-4 mb-4"; // Estilo de Bootstrap para las cartas
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${plato.nombre}</h5>
                <p class="card-text">${plato.descripcion}</p>
                <div class="alert alert-warning col-md-4" role="alert">$${plato.precio}</div>
            </div>
        `;
        carta.appendChild(card);
    });
}

// Mostrar todos los platos al cargar
mostrarPlatos(platos);

// Filtrar platos por tipo
function filtrarPlatos(tipo: string) {
    if (tipo === 'todos') {
        mostrarPlatos(platos);
    } else {
        const platosFiltrados = platos.filter(plato => plato.tipo === tipo);
        mostrarPlatos(platosFiltrados);
    }
}
