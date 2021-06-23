/* 15/06/21 - microDesafio
Spread e Parâmetro Rest */

/* spread:
- permite criar uma terceira variavavel juntando todos os elementos de mais de um array;
- contatenar dados de umobjetio no outro (criar uma tabela relacional - banco de dados);
*/

{
    let numerosPrimos = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

    let numeros = [...numerosPrimos]

    console.log(numeros)
}

console.log(" \n\ -----------------------------------------");

console.log(" \n\ ex02")


maiorNumero(4, 1, 3)
maiorNumero(5, 10, 2, 24, 6, 20, 9);

function maiorNumero(...paramns) {
    // (...params) vai permitir declarar os valores fora da função 

    /* return console.log(Math.min(maiorNumero));
    //Math.min = menor valor */
    //return (maiorNumero())
} 



let numeros = Math.min(...maiorNumero);
console.log(numeros)


//console.log(Math.min(numeros));
//Math.min = menor valor
