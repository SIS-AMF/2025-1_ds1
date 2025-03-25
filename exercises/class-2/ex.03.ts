/**
3. **Uso de Arrays e Tuplas:** Crie uma tupla chamada car que contenha o nome do carro (string) e o ano de fabricação (number). Depois, acesse e exiba esses valores no console.
*/
console.log("\nEX 03:");

let car: [nome: string, fabricacao: number];
car = ["Palio", 2015];
const [nome, fabricacao] = car;
console.log(`Carro: ${nome} - ${fabricacao}`);
