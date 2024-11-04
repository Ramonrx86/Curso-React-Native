class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre; 
        this.precio = precio; 
    }

    // mostrar los detalles del producto
    mostrarDetalles() {
        console.log(`Producto: ${this.nombre}, Precio: $${this.precio.toFixed(2)}`);
    }
}

// instancias de la clase Producto
const producto1 = new Producto("Laptop AMD", 599.99);
const producto2 = new Producto("Teléfono SONY", 259.49);
const producto3 = new Producto("Auriculares PHILLIPS", 9.99);

// mostrar los detalles de cada producto
producto1.mostrarDetalles();
producto2.mostrarDetalles();
producto3.mostrarDetalles();
