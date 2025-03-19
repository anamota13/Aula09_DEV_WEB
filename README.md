# Projetos de Padrões de Projeto em Node.js

## Exercício 1: Fábrica Abstrata - Criação de Personagens para um Jogo 🎮

Este projeto implementa o padrão Fábrica Abstrata para criar personagens de diferentes raças (humano, elfo, orc), garantindo que cada um tenha seus atributos básicos definidos de forma consistente.

### Exemplo de Uso

```
const humano = fabricaHumano.criarPersonagem("Aragorn");
console.log(humano.descrever());
```

Sáida Esperada: 

```
Aragorn: Força 10, Agilidade 10, Inteligência 10
```

# Exercício 2: Construtor - Sistema de Pedidos de Comida Online

Este projeto implementa o padrão de projeto Construtor para a criação de pedidos de comida personalizados. Os clientes podem escolher o tamanho do pedido, o tipo de massa e adicionar ingredientes de forma flexível e incremental.

## Exemplo de Uso

```
const pedido = new PedidoBuilder()
    .setTamanho("Grande")
    .setTipoMassa("Pan")
    .adicionarIngrediente("Queijo extra")
    .adicionarIngrediente("Pepperoni")
    .construir();

console.log(pedido.descrever());
```

Saída esperada:
```
Pedido: Grande com Pan e ingredientes: Queijo extra, Pepperoni
```
