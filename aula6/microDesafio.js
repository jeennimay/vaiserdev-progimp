//Micro Desafio - Aula 06
//Praticando com Loops (FOR)

// 1 - Repetir como um papagaio (Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.)
console.log("1 - Repetir como um papagaio");

for(i=1; i<=5; i++){
    console.log("Olá Mundo");
}

/* 2 - Contando números ímpares (Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.) */
console.log("2 - Contando números ímpares");

for(i=1; i<=10; i++){
    if((i % 2) !=0){
        console.log( i );
    }
}

/* 3 - Criando tabuada (Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).)*/
console.log("3 - Criando Tabuada");

for(x=1; x<=10; x++){
    for(y=1; y<=10; y++){
        console.log(x*y);
    }
}