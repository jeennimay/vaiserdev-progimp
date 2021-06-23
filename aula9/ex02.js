/*Aula 9 - 21/06/21
Objetos Literais - função*/

let carro = {
    placa: 'ADF1234',
    cor: 'prata',
    ano: 2021,
    flex: true,
    mostrar: function () {
        return 'Características do seu carro novo';        
    }
}
console.log(carro.mostrar());