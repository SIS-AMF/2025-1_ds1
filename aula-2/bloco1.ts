

/**
1. **Definição de Tipos Primitivos:** Crie três variáveis com os seguintes tipos: string, number, e boolean. Atribua valores a elas e exiba-os no console.
*/
function exercicio01(): void {
    console.log("\nEX 01:");

    let nome: string;
    let idade: number;
    let masculino: boolean;

    nome = "Lucas";
    idade = 20;
    masculino = true;

    console.log(`Seu nome é ${nome} tem ${idade} anos e é do sexo ${masculino ? "masculino" : "feminino"}`);
}


/**
2. **Trabalhando com Enums:** Crie um enum chamado DaysOfWeek representando os dias da semana. Em seguida, declare uma variável do tipo DaysOfWeek e atribua a ela o valor correspondente a "quarta-feira". Exiba o valor no console.
*/
function exercicio02(): void {
    console.log("\nEX 02:");

    const enum DaysOfWeek {
        DOMINGO = "domingo",
        SEGUNDA = "segunda-feira",
        TERCA = "terça-feira",
        QUARTA = "quarta-feira",
        QUINTA = "quinta-feira",
        SEXTA = "sexta-feira",
        SABADO = "sábado"
    }

    let feriado: DaysOfWeek;

    feriado = DaysOfWeek.QUARTA;

    console.log(feriado);
}


/**
3. **Uso de Arrays e Tuplas:** Crie uma tupla chamada car que contenha o nome do carro (string) e o ano de fabricação (number). Depois, acesse e exiba esses valores no console.
*/
function exercicio03(): void {
    console.log("\nEX 03:");

    let car: [nome: string, fabricacao: number];
    car = ["Palio", 2015];
    const [nome, fabricacao] = car;
    console.log(`Carro: ${nome} - ${fabricacao}`);
}


/**
4. **Função com Retorno:** Crie uma função chamada multiply que recebe dois números como parâmetros e retorna o produto deles. Chame essa função e exiba o resultado.
*/
function exercicio04(): void {
    console.log("\nEX 04:");

    function multiply(a: number, b: number) { return a + b };

    console.log(multiply(1, 2));
}


/**
5. **Arrow Function e Template Literals:** Crie uma arrow function chamada greet que receba um nome e retorne uma saudação no formato Olá, [nome]!. Utilize template literals para formatar a mensagem.
*/
function exercicio05(): void {
    console.log("\nEX 05:");

    const greet = (nome: string): void => console.log(`Olá, ${nome}!`);

    greet("Lucas");
}


/**
6. **Função com Parâmetro Padrão:** Crie uma função chamada discountPrice que recebe um preço e um desconto opcional (valor padrão de 10%). A função deve retornar o valor final com o desconto aplicado.
*/
function exercicio06(): void {
    console.log("\nEX 06:");

    function discountPrice(price: number, discountPrice: number = 10): number { return price * (1 - discountPrice / 10) }

    console.log(discountPrice(10, 10));
}


/**
7. **Uso de Never:** Crie uma função chamada errorMessage que sempre lança um erro com a mensagem "Erro crítico!".
*/
function exercicio07(): void {
    console.log("\nEX 07:");

    function errorMessage(): never { throw "Erro crítico!" }

    errorMessage();
}


/**
8. **Desestruturação de Objetos:** Crie um objeto person com propriedades name e age. Em seguida, use a desestruturação para extrair esses valores e exibi-los no console.
*/
function exercicio08(): void {
    console.log("\nEX 08:");

    type person = {
        name: string;
        age: number;
    }

    const lucas: person = { name: "Lucas", age: 20 }

    const { name, age } = lucas;

    console.log(`${name} tem ${age} anos.`);
}


/**
9. **Tipos Literais:** Crie um tipo literal chamado TrafficLight com os valores "red", "yellow" e "green". Em seguida, crie uma variável chamada currentLight e atribua um valor válido.
*/
function exercicio09(): void {
    console.log("\nEX 09:");

    type TrafficLight = "red" | "yellow" | "green";
    let sinaleira: TrafficLight = "yellow";

    console.log(sinaleira);
}


/**
10. **Função com Parâmetro Opcionais:** Crie uma função chamada orderPizza que recebe dois parâmetros: size (tamanho obrigatório) e flavor (opcional). Se flavor não for informado, assuma "Mussarela" como padrão. Exiba a mensagem "Pedido: Pizza [flavor], tamanho [size].".
*/
function exercicio10(): void {
    console.log("\nEX 10:");

    function orderPizza(size: number, flavor: string = "Mussarela"): void { console.log(`Pedido: Pizza ${flavor}, tamanho ${size}.`) }
    orderPizza(10);

}


exercicio01()
exercicio02()
exercicio03()
exercicio04()
exercicio05()
exercicio06()
// exercicio07()
exercicio08()
exercicio09()
exercicio10()
