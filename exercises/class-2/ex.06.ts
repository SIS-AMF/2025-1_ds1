/**
6. **Função com Parâmetro Padrão:** Crie uma função chamada discountPrice que recebe um preço e um desconto opcional (valor padrão de 10%). A função deve retornar o valor final com o desconto aplicado.
*/
console.log("\nEX 06:");

function discountPrice(price: number, discountPrice: number = 10): number { return price * (1 - discountPrice / 10) }

console.log(discountPrice(10, 10));
