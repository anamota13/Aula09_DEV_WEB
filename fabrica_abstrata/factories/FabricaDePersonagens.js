class FabricaDePersonagens {
    criarPersonagem(nome) {
        throw new Error("Este método deve ser implementado pelas subclasses.");
    }
}

module.exports = FabricaDePersonagens;
