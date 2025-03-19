const FabricaDePersonagens = require("./FabricaDePersonagens");
const Personagem = require("../models/Personagem");

class FabricaDeElfos extends FabricaDePersonagens {
    criarPersonagem(nome) {
        return new Personagem(nome, 8, 14, 12);
    }
}

module.exports = FabricaDeElfos;
