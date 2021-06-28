// 23/06/21 - Aula 10
// Importação de funções

const calculadora = require('./modulos/ex02ExpFuncoes.js');


console.log(`somar: ` + calculadora.somar(1, 2));
console.log(`subtrair: ` + calculadora.subtrair(1, 2));
console.log(`multiplicar: ` + calculadora.multiplicar(1, 2));
console.log(`dividir: ` + calculadora.dividir(1, 2));
console.log(`dividir: ` + calculadora.dividir(1, 0));

//------------------

//const letrasMaiusculas

calculadora.maiuscula('oi jennifer tudo bem?')