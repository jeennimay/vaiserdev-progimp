// aula 10 - 23/06/21
//Objeto Literal - Importação de módulo

let {pessoa, cachorro} = require('./modulos/ex01Exp.js')
//const {pessoa, cachorro} = require('./modulos/ex01Exp.js') //importando mais de um objeto em um mesmo arquivo

//let pessoa = require('./modulos/ex01Exp.js'); //importando de arquivos diferetes
console.log(pessoa);
console.log(pessoa.nome);

//let cachorro = require('./modulos/ex02Exp.js'); //importando de arquivos diferetes
console.log(cachorro);
