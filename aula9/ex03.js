/*Aula 9 - 21/06/21
Objetos Literais - concatenação*/

let carro = {
    placa: 'ADF1234',
    cor: 'prata',
    ano: 2021,
    flex: true,
    mostrar: function () {
        return 'Características do seu carro novo: \nPlaca = ' 
                    + carro.placa + '\nCor = ' + this.cor +
                    '\nAno = ' + this.ano +
                    '\nTOTAL FLEX = ' + this.flex;        
    }
}
console.log(carro.mostrar());