const FabricaDePersonagens = require("./FabricaDePersonagens");
const Personagem = require("../models/Personagem");

class FabricaDeOrcs extends FabricaDePersonagens {
    criarPersonagem(nome) {
        return new Personagem(nome, 14, 8, 6);
    }
}

module.exports = FabricaDeOrcs;
