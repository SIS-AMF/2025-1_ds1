/**
7. **Uso de Never:** Crie uma função chamada errorMessage que sempre lança um erro com a mensagem "Erro crítico!".
*/
console.log("\nEX 07:");

function errorMessage(): never { throw "Erro crítico!" }

errorMessage();

