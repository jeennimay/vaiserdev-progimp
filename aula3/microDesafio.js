/* Aula03 - 31/05/21
Micro Desafio - Etapa I - Playground*/

/*1) Criar a função calcularIndiceDeMassaCorporal que receba a altura em centímetros e o peso em quilogramas e calcule o IMC do usuário (peso / altura2).
Em seguida, execute a função testando diferentes valores.*/

//let IMC = (peso/(altura**2))

function calcularIndiceDeMassaCorporal(peso,altura){
    return(peso/(altura**2));
}

console.log(`1)`);
console.log(`IMC da Jennifer ${calcularIndiceDeMassaCorporal(70, 1.55)}`);
console.log(`IMC do Rafa ${calcularIndiceDeMassaCorporal(80, 1.77)}`);


/* 2)Criar as 4 “function expression” (dentro de variáveis) básicas de uma calculadora:

Soma;
Subtração;
Multiplicação;
Divisão.

As 4 funções deverão receber dois parâmetros e retornar o resultado da operação matemática correspondente.*/

function soma(a , b){
    return (a + b);
}

function subtracao(a , b){
    return (a - b);
}

function multiplicacao(a , b){
    return (a * b);
}

function divisao(a , b){
    return (a / b);
}

console.log(`2) definindo a=6 e b=3`);
console.log(`soma ${soma(6 ,3)}, subtração ${subtracao(6 , 3)}, multiplicação ${multiplicacao(6 , 3)} e divisão ${divisao(6 , 3)}`);

/*3) Criar as variáveis, nomeJogador, golsJogador, precoEmDolares. Depois, criar a função fazer Gol que incremente a quantidade de gols do jogador em uma unidade e, em seguida, imprima em tela a mensagem “GOL!!!!!!!!!”. Além disso, incremente o valor do jogador em 10.000 dólares. Por conseguinte, teste a execução da função várias vezes e imprima em tela a nova quantidade de gols do jogador e o preço do jogador no mercado.*/

{
    let nomeJogador = "João"
    let golsJogador = 0
    let precoEmDolares = 10000

    function fazerGol (){
        golsJogador++
        console.log(` ${golsJogador} “GOL!!!!!!!!!” `)
        return(golsJogador);
    }
    console.log(`3)`);

    fazerGol();
    fazerGol();
    fazerGol();
    fazerGol();
    fazerGol();

    console.log(`O jogador ${nomeJogador}, fez ${fazerGol()} gols e seu valor é de $${precoEmDolares}.`);


    /*4) Criar a função hatTrick (expressão usada para dizer que um jogador fez 3 gols em uma mesma partida) que em seu interior execute três vezes a função fazerGol e, em seguida, aumente o valor do jogador em 10% a mais por ano em comparação com o valor atual.*/

    function hatTrick(){
        fazerGol();
        fazerGol();
        fazerGol();
        return(fazerGol())
    }

    valorAnualJogador = ((precoEmDolares * (10/100)) + precoEmDolares)

    console.log(`4)`)
    console.log(`${hatTrick()} gols, estamos atualizado o valor anual do Jogador ${nomeJogador} é de......... $${valorAnualJogador}! É ELE! É O ${nomeJogador}oooooo!!!`)
}