/**
8. **Desestruturação de Objetos:** Crie um objeto person com propriedades name e age. Em seguida, use a desestruturação para extrair esses valores e exibi-los no console.
*/
console.log("\nEX 08:");

type person = {
    name: string;
    age: number;
}

const lucas: person = { name: "Lucas", age: 20 }

const { name, age } = lucas;

console.log(`${name} tem ${age} anos.`);
