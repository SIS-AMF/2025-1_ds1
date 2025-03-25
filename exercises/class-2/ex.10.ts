/**
10. **Função com Parâmetro Opcionais:** Crie uma função chamada orderPizza que recebe dois parâmetros: size (tamanho obrigatório) e flavor (opcional). Se flavor não for informado, assuma "Mussarela" como padrão. Exiba a mensagem "Pedido: Pizza [flavor], tamanho [size].".
*/
console.log("\nEX 10:");

function orderPizza(size: number, flavor: string = "Mussarela"): void { console.log(`Pedido: Pizza ${flavor}, tamanho ${size}.`) }
orderPizza(10);
