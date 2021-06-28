function MicroondasMenu(prato, tempo) {
    this.prato = prato;
    this.tempo = tempo;
    this.microondas = function (prato, tempo) {
        if (prato == this.prato && tempo >= 2 * this.tempo) {
            console.log("A comida quiemou!");
        } else if (prato == this.prato && tempo >= 3 * this.tempo) {
            console.log("KABUMMM");
        } else if (prato == this.prato && tempo <= this.tempo) {
            console.log("Tempo insuficiente");
        } else if (prato != this.prato) {
            console.log("Prato inexistente");
        } else {
            console.log("Prato ponto, bom apetite!!!");
        }
    }
}


let pipoca = new MicroondasMenu("pipoca", 10);
let macarrao = new MicroondasMenu("macarrao", 8);
let carne = new MicroondasMenu("carne", 15);
let feijao = new MicroondasMenu("feijao", 12);
let brigadeiro = new MicroondasMenu("brigadeiro", 8);

pipoca.microondas("pipoca", 5);
macarrao.microondas("microondas", 10);
carne.microondas("care", 20);
feijao.microondas("feijao", 40);
brigadeiro.microondas("brigadeiro", 8);