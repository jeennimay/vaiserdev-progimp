/*02/06/21 - aula04
ex02.js
condicionais (IF-SE/ELSE-SE NÃO)*/

let cumpriuTarfefas = true
let arrumouCama = true;

if(cumpriuTarfefas == true && arrumouCama == true){       //&& (e) → comparação de dois valores
    console.log("Muito bem!");
}else{
    console.log("volte e complete as tarefas")
}

if(cumpriuTarfefas == false || arrumouCama == true){       //|| (ou) → comparação de dois valores sendo obrigatório 1 só
    console.log("Muito bem!");
}else{
    console.log("volte e complete as tarefas")
}