function preparo(comida, tempo) {
    if (comida == "pipoca" || comida == "macarrao" || comida == "carne" || comida == "feijao" || comida == "brigadeiro") {

        switch (comida) {
            case "pipoca":
                if (tempo == 10) {
                    console.lgo("Prato pronto, bom apetite.");
                } else if (tempo < 10) {
                    console.log("Tempo insuficiente.");
                } else if (tempo > 10 && tempo < 30) {
                    console.log("A comida queimou.");
                } else if (tempo > 30) {
                    console.log("KABUMMM!");
                }
                break;
            case "macarrao":
                if (tempo == 8) {
                    console.lgo("Prato pronto, bom apetite.");
                } else if (tempo < 8) {
                    console.log("Tempo insuficiente.");
                } else if (tempo > 8 && tempo < 16) {
                    console.log("A comida queimou.");
                } else if (tempo > 24) {
                    console.log("KABUMMM!");
                }
                break;
            case "carne":
                if (tempo == 15) {
                    console.lgo("Prato pronto, bom apetite.");
                } else if (tempo < 15) {
                    console.log("Tempo insuficiente.");
                } else if (tempo > 15 && tempo < 45) {
                    console.log("A comida queimou.");
                } else if (tempo > 45) {
                    console.log("KABUMMM!");
                }
                break;
            case "feijao":
                if (tempo == 12) {
                    console.lgo("Prato pronto, bom apetite.");
                } else if (tempo < 12) {
                    console.log("Tempo insuficiente.");
                } else if (tempo > 12 && tempo < 36) {
                    console.log("A comida queimou.");
                } else if (tempo > 36) {
                    console.log("KABUMMM!");
                }
                break;
            case "brigadeiro":
                if (tempo == 8) {
                    console.lgo("Prato pronto, bom apetite.");
                } else if (tempo < 8) {
                    console.log("Tempo insuficiente.");
                } else if (tempo > 8 && tempo < 16) {
                    console.log("A comida queimou.");
                } else if (tempo > 24) {
                    console.log("KABUMMM!");
                }
                break;

        }
    }else {
        console.log("prato inexistente");
    }
}

preparo("arroz", 10);
preparo("pipoca", 8);