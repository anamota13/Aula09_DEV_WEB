class Pedido {
    constructor(tamanho, tipoMassa, ingredientes) {
        this.tamanho = tamanho;
        this.tipoMassa = tipoMassa;
        this.ingredientes = ingredientes;
    }

    descrever() {
        return `Pedido: ${this.tamanho} com ${this.tipoMassa} e ingredientes: ${this.ingredientes.join(", ")}`;
    }
}

module.exports = Pedido;
