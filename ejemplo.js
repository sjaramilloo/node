const Math = {};
function add(x1, x2){
    return x1 + x2;
}
function substract(x1, x2){
    return x1 - x2;
}
function multiply(x1, x2){
    return x1 * x2; 
}
function divide(x1, x2){
    if (x2 == 0){
        console.log('No se puede dividir por cero')
    }
    return x1 / x2;
}
console.log(divide(7,0));

function saludo(name){
    console.log('hola', name);
}
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = saludo;