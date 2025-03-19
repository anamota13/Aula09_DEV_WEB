const FabricaDeHumanos = require("./factories/FabricaDeHumanos");
const FabricaDeElfos = require("./factories/FabricaDeElfos");
const FabricaDeOrcs = require("./factories/FabricaDeOrcs");

const fabricaHumano = new FabricaDeHumanos();
const fabricaElfo = new FabricaDeElfos();
const fabricaOrc = new FabricaDeOrcs();

const humano = fabricaHumano.criarPersonagem("Aragorn");
const elfo = fabricaElfo.criarPersonagem("Legolas");
const orc = fabricaOrc.criarPersonagem("Azog");

console.log(humano.descrever());
console.log(elfo.descrever());
console.log(orc.descrever());
