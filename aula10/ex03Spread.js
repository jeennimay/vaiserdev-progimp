// 23/06/21 - Aula 10
// Spread - é muito útil para "quebrar" um array

function somar(x, y, z) {
    return x + y + z;
}
const numeros = [1, 2, 3];

console.log('Total.............: ' + somar(...numeros));

console.log('Maior número do array........: ' + Math.max(...numeros));
console.log('Menor número do array........: ' + Math.min(...numeros));

//----------------------------------------------------------
console.log('\n-----------------------------------\n');

let nome = 'Jennifer';
let sobrenome = 'Koga';

// com o spread operator, ele junta os dois

let nomeCompleto = [sobrenome, nome];
console.log(...nomeCompleto)