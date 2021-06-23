/* 15/06/21 - microDesafio
Obejtos literais - Objeto / Função construtora */

// Array - cardapio → default [vazia para evitar erros]
//cardapio = []


// Função construtora
function Restaurante(nome, cardapio) {       //nome da função com letra maiúscula, para diferenciar das funções "normais"

    //Declaração de atributos
    this.nome = nome;
    this.cardapio = cardapio;

    /* this.entrada(nome, cardapio){
        return Restaurante.nome + " agradece a preferência. Aqui está nosso cardápio: " + Restaurante.cardapio;
    } */
}
//console.log(Restaurante.entrada)


//Declarando Array carrdapio do restaurante Sukiya
cardapioSukiya = ["Katsu Don", "Yakitori Don", "Kara-ague Don", "Lamen", "Hayashi", "Curry", "Gyu-Don", "Shogayaki", "Bento"];

let entrada = new Restaurante("Sukiya", cardapioSukiya)
    // Declarando / Instanciando um objeto

//console.log(entrada);



/* // Objeto
let restaurante = {
    entrada: function ( Restaurante.nome, Restaurante.cardapio) { return `${Restaurante.nome}  agradece a preferência. Aqui está nosso  ${Restaurante.cardapio}`}
}

console.log(restaurante.entrada());
*/
