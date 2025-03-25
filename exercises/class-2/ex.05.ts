/**
5. **Arrow Function e Template Literals:** Crie uma arrow function chamada greet que receba um nome e retorne uma saudação no formato Olá, [nome]!. Utilize template literals para formatar a mensagem.
*/
console.log("\nEX 05:");

const greet = (nome: string): void => console.log(`Olá, ${nome}!`);

greet("Lucas");