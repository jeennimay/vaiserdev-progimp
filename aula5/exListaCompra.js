//07/06/21 - Exercício de Array - conteúdo assíncrono

let listaCompras = ["Pão", "Manteiga", "Frios", "Ovo"];
console.log("Quantos itens têm na lista?")
console.log(listaCompras.length);

console.log("compra suco pra mim também");
listaCompras.push("suco");
console.log(listaCompras);

console.log("Pega pra mim: limão, chocolate, cerveja, refrigerante, arroz e chocolate");
listaCompras.unshift("limão", "Chocolate", "Refrigerante", "Arroz", "Cerveja");
console.log(listaCompras);

console.log("Como já vai pegar refrigerante, não precisa do suco tá?!");
listaCompras.pop();
console.log(listaCompras);

console.log("Quantos itens têm na lista agora?");
console.log(listaCompras.length);

console.log("Tem chocolate na lista?");
let chocolate = listaCompras.includes("Chocolate");
console.log(chocolate);

console.log("Qual o 5º item da lista?");
console.log(listaCompras[4]);  //Nº [4] porque a contagem começa do [0]

console.log("Quais são os itens da lista?");
console.log(listaCompras.join());

console.log("pode tirar o primeiro item");
listaCompras.shift();
console.log(listaCompras.join());

