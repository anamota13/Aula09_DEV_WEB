const FabricaDePersonagens = require("./FabricaDePersonagens");
const Personagem = require("../models/Personagem");

class FabricaDeHumanos extends FabricaDePersonagens {
    criarPersonagem(nome) {
        return new Personagem(nome, 10, 10, 10);
    }
}

module.exports = FabricaDeHumanos;
