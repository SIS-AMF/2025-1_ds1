/**
2. **Trabalhando com Enums:** Crie um enum chamado DaysOfWeek representando os dias da semana. Em seguida, declare uma variável do tipo DaysOfWeek e atribua a ela o valor correspondente a "quarta-feira". Exiba o valor no console.
*/
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
