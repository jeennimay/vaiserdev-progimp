// 23/06/21
// Exportação de função

exports.somar = (a, b) => a + b;     //caoncatenando o exports + funções
exports.subtrair = (a, b) => a - b;
exports.multiplicar = (a, b) => a * b;
exports.dividir = (a, b) => {
    if (b != 0) {
        return a / b;
    } else {
        return 'Impossivel dividir por 0 (zero)';
    }
}

//FUNÇÃO LETRA MAIÚSCULA
exports.maiuscula = (texto) => console.log(texto.toUpperCase());
