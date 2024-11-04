// calcular el área de un círculo
function areaCirculo(radio) {
  return Math.PI * (radio ** 2); // fórmula: π * R²
}

// calcular el área de un triángulo
function areaTriangulo(base, altura) {
  return (base * altura) / 2; // fórmula: (base * altura) / 2
}

// calcular el área de un rectángulo
function areaRectangulo(base, altura) {
  return base * altura; // fórmula: base * altura
}

// prompts y cálculo de áreas
let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
console.log("Área del círculo:", areaCirculo(radio));

let baseTriangulo = parseFloat(prompt("Ingrese la base del triángulo:"));
let alturaTriangulo = parseFloat(prompt("Ingrese la altura del triángulo:"));
console.log("Área del triángulo:", areaTriangulo(baseTriangulo, alturaTriangulo));

let baseRectangulo = parseFloat(prompt("Ingrese la base del rectángulo:"));
let alturaRectangulo = parseFloat(prompt("Ingrese la altura del rectángulo:"));
console.log("Área del rectángulo:", areaRectangulo(baseRectangulo, alturaRectangulo));
