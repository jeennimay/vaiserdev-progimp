//Aula 08 - 16/06/2021 - Revisão do conteúdo


// SSD R$280.00 → R$300.00
// Teclado mecânico → R$330.00
// Monitor → R$1500.00
// Placa de vídeo → R$3300.00
// Headset → R$150.00

// Margem de Lucro: 50%

// Lista de valores de custo dos produtos
// Lista de valores de venda ao consumidor 

// preços de custo dos produtos salvos em uma array
let precoCusto = [280, 330, 1500, 3300, 150]

// (margemLucro) 100% (do custo) + 50% (em cima do preço do custo)
let margemLucro = 1.50


// função (bloco de código reutilizável) para para listar o preço de custo, como solicitado.
function precoInicial(precoCusto) {
    console.log("\n************* Relatório Preço de Custo ************* \n\ ")
    
    //for - looping
    for (let i = 0; i < precoCusto.length; i++) {
        console.log("Posição no Array: " + i + " - Preço de Custo: R$" + precoCusto[i]);

    }

}
precoInicial(precoCusto);  //chamando a função


console.log(" \n\ ");       //pular linha


// função para calcular o preço final de cada produto.
function precoFinal(precoCusto, margemLucro) {
    
    console.log("\n************* Relatório Preço final *************\n\ ")
    
    for (let i = 0; i < precoCusto.length; i++) {
        let resultado = precoCusto[i] * margemLucro;       //calculo do preço final para venda, o preço de custo * margem de Lucro
        console.log(`Posição no Array ${i} - Preço final é: R$ ${resultado}`)

    }

}
precoFinal(precoCusto, margemLucro);

console.log(" \n\ ");       //pular linha








/*     // Objeto
let produto = {
    nome = nome,
    custo = valorCusto,
    margemLucro = margem,
    venda = valorVenda,
};
 */
