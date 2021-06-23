/*13/06/21 - Micro Desafio
Arrow function*/

/* Tranforme as seguintes funções em arrow function*/

/*function print(mensagem){
    console.log(mensagem);
}

print("Olá, bom dia")*/

let print = mensagem => console.log(mensagem)

print("Olá, bom dia")

/*function somar(n1, n2){
    return n1 + n2;
}

console.log(somar(10, 10))*/

let somar = (n1, n2) => n1 + n2

console.log(somar(10,10))