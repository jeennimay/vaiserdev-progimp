/*13/06/21 - microDesafio 
Terceirizando funções - CALLBACKS*/

/*Crie uma função acaoCarro(), que receberá uma callback como parâmetro. Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo que o carro está andando – e parar() – deve exibir uma mensagem dizendo que o carro parou.

Execute ambas as ações utilizando a função acaoCarro(), passando suas ações como callbacks.*/

/*
let andar(mensagem) => console.log("O carro está andando")
let parar(mensagem) => console.log("O carro parou")

function acaoCarro(){
    andar();
    parar();
}
*/
console.log('\n' + + '-------------------------------------------')

/* //EXEMPLO DADO EM AULA (JUIZ E VAR)
function funcao1(){
    console.log("falta!")
    funcao2(); //callback - chamando a segunda função
}
function funcao2(){
    console.log("segue o lance!");
}
funcao1()
*/