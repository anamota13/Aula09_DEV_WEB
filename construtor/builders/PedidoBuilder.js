const Pedido = require("../models/Pedido");

class PedidoBuilder {
    constructor() {
        this.tamanho = "Médio"; 
        this.tipoMassa = "Tradicional"; 
        this.ingredientes = [];
    }

    setTamanho(tamanho) {
        this.tamanho = tamanho;
        return this;
    }

    setTipoMassa(tipoMassa) {
        this.tipoMassa = tipoMassa;
        return this;
    }

    adicionarIngrediente(ingrediente) {
        this.ingredientes.push(ingrediente);
        return this;
    }

    construir() {
        return new Pedido(this.tamanho, this.tipoMassa, this.ingredientes);
    }
}

module.exports = PedidoBuilder;
