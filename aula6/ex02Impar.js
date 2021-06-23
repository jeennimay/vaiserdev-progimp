// AULA 06 - 09/06/21
// REPETIÇÕES - FOR

exibirTipo(10);

function exibirTipo(limite){
    for(let i=0; i<=limite; i++){
        if(i % 2 != 0){
            console.log( i + " ÍMPAR");
        } else {
            console.log ( i + " PAR");
        }
    }
}