const PedidoBuilder = require("./builders/PedidoBuilder");

const pedido1 = new PedidoBuilder()
    .setTamanho("Grande")
    .setTipoMassa("Pan")
    .adicionarIngrediente("Queijo extra")
    .adicionarIngrediente("Pepperoni")
    .adicionarIngrediente("Azeitonas")
    .construir();

const pedido2 = new PedidoBuilder()
    .setTamanho("Pequeno")
    .setTipoMassa("Fina")
    .adicionarIngrediente("Tomate seco")
    .adicionarIngrediente("Manjericão")
    .construir();

console.log(pedido1.descrever());
console.log(pedido2.descrever());
