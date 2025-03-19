class Personagem {
    constructor(nome, forca, agilidade, inteligencia) {
        this.nome = nome;
        this.forca = forca;
        this.agilidade = agilidade;
        this.inteligencia = inteligencia;
    }

    descrever() {
        return `${this.nome}: Força ${this.forca}, Agilidade ${this.agilidade}, Inteligência ${this.inteligencia}`;
    }
}

module.exports = Personagem;
