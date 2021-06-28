// aula 10 - 23/06/21
//Objeto Literal - Exportação de módulo

let pessoa = {
    nome: 'Jennifer',
    idade: 24,
    genero: 'f',
    filho: 0
}
//module.exports = pessoa;      //exportando um único objeto

let cachorro = {
    nome: 'Theodoro',
    idade: 3,
    genero: 'm',
    filho: 0
}
//module.exports = cachorro;

module.exports = {pessoa, cachorro};        //exportando mais de um objeto