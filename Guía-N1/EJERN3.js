// Clase Trabajador
class Trabajador {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    mostrarDetalles() {
        console.log(`Trabajador - Nombre: ${this.nombre}, Sueldo: ${this.sueldo}`);
    }
}

// Clase Gerente
class Gerente {
    constructor(nombre, sueldo, departamento) {
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.departamento = departamento;
    }

    mostrarDetalles() {
        console.log(`Gerente - Nombre: ${this.nombre}, Sueldo: ${this.sueldo}, Departamento: ${this.departamento}`);
    }
}

// Crear Trabajadores
const trabajadores = [
    new Trabajador('Juan Pérez', 3000),
    new Trabajador('Ana Gómez', 2500)
];

// Crear Gerentes
const gerentes = [
    new Gerente('Luis Martínez', 5000, 'Ventas'),
    new Gerente('Marta Sánchez', 5500, 'Recursos Humanos')
];

// Mostrar los trabajadores
console.log("Lista de Trabajadores:");
trabajadores.forEach(trabajador => trabajador.mostrarDetalles());

// Mostrar los gerentes
console.log("\nLista de Gerentes:");
gerentes.forEach(gerente => gerente.mostrarDetalles());
