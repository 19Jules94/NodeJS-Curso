function sumar(a, b) {
    return a + b;
}

console.log(sumar(5, 10));

const sumar_flecha = (a, b) => {
    return a + b;
}

//Cuando solo hay una linea puede simplificarse a :
const sumar_flecha_simple = (a, b) => a + b;

console.log(sumar_flecha(4, 4));
console.log(sumar_flecha_simple(4, 2));