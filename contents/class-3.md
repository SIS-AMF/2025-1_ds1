## Interface

Interfaces em TypeScript são utilizadas para definir a estrutura de um objeto, especificando quais propriedades e métodos devem estar presentes em um objeto que implementa essa interface. Elas são úteis para garantir que um objeto possua determinadas propriedades e métodos, proporcionando um tipo de contrato para o código.

### **Definição de Interface**

```tsx
interface Pessoa {
  nome: string;
  idade: number;
}

function saudar(pessoa: Pessoa) {
  console.log(`Olá, ${pessoa.nome}! Você tem ${pessoa.idade} anos.`);
}

const usuario: Pessoa = { nome: "Maria", idade: 30 };
saudar(usuario);
```

Neste exemplo, definimos uma interface **`Pessoa`** com duas propriedades: **`nome`** do tipo **`string`** e **`idade`** do tipo **`number`**. A função **`saudar`** recebe um parâmetro do tipo **`Pessoa`** e imprime uma saudação usando as propriedades **`nome`** e **`idade`** do objeto passado como argumento.

### **Implementação de Interface em uma classe**

```tsx
interface Animal {
  nome: string;
  emitirSom(): void;
}

class Cachorro implements Animal {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  emitirSom(): void {
    console.log(`${this.nome} faz au au!`);
  }
}

const meuCachorro = new Cachorro("Rex");
meuCachorro.emitirSom();
```

Neste exemplo, definimos uma interface **`Animal`** com uma propriedade **`nome`** do tipo **`string`** e um método **`emitirSom`** que não retorna nenhum valor (**`void`**). Em seguida, criamos uma classe **`Cachorro`** que implementa essa interface. A classe **`Cachorro`** deve possuir uma propriedade **`nome`** e uma implementação do método **`emitirSom`**. Por fim, instanciamos um objeto da classe **`Cachorro`** e chamamos o método **`emitirSom`**.

Interfaces em TypeScript são uma maneira poderosa de definir contratos para os tipos de objetos em seu código, permitindo uma maior segurança e clareza no desenvolvimento. Elas são amplamente utilizadas em aplicações TypeScript para garantir a consistência e a integridade dos dados.

Vamos explorar mais exemplos de uso de interfaces em TypeScript, incluindo extensão de interfaces e outros conceitos.

### **Interface Básica**

```tsx
interface Pessoa {
  nome: string;
  idade: number;
}

function saudar(pessoa: Pessoa) {
  console.log(`Olá, ${pessoa.nome}! Você tem ${pessoa.idade} anos.`);
}

let usuario: Pessoa = { nome: "Maria", idade: 30 };

saudar(usuario);
```

### **Extensão de Interface**

```tsx
interface Pessoa {
  nome: string;
}

interface PessoaComIdade extends Pessoa {
  idade: number;
}

function saudarComIdade(pessoa: PessoaComIdade) {
  console.log(`Olá, ${pessoa.nome}! Você tem ${pessoa.idade} anos.`);
}

let usuarioComIdade: PessoaComIdade = { nome: "João", idade: 25 };
saudarComIdade(usuarioComIdade);
```

### **Interface para Funções**

```tsx
interface OperacaoMatematica {
  (a: number, b: number): number;
}

const soma: OperacaoMatematica = (a, b) => a + b;
const subtracao: OperacaoMatematica = (a, b) => a - b;

console.log(soma(5, 3)); // Saída: 8
console.log(subtracao(5, 3)); // Saída: 2
```

### **Propriedades Opcionais em Interfaces**

```tsx
interface Configuracao {
  host: string;
  porta: number;
  usuario?: string; // Propriedade opcional
  senha?: string; // Propriedade opcional
}

function conectar(config: Configuracao) {
  // Lógica para conectar usando as configurações fornecidas
  console.log(`Conectado a ${config.host}:${config.porta}`);
}

// Exemplo de uso com propriedades opcionais
conectar({ host: "localhost", porta: 3000 });
conectar({ host: "localhost", porta: 3000, usuario: "admin", senha: "12345" });
```

### **Interface como Array**

```tsx
interface ListaNumeros {
  [indice: number]: number;
}

let numeros: ListaNumeros = [1, 2, 3, 4, 5];
console.log(numeros[0]); // Saída: 1
```

### **Interface com Métodos**

```tsx
interface Animal {
  nome: string;
  fazerBarulho(): void;
}

class Cachorro implements Animal {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  fazerBarulho() {
    console.log(`${this.nome} faz au au!`);
  }
}

let rex = new Cachorro("Rex");
rex.fazerBarulho(); // Saída: Rex faz au au!
```

Esses exemplos demonstram diferentes usos e conceitos relacionados às interfaces em TypeScript, incluindo extensão de interfaces, interfaces para funções, propriedades opcionais, interfaces como arrays e interfaces com métodos.

### **Trabalhando com Funções Assíncronas**

Quando trabalhamos com operações assíncronas em JavaScript/TypeScript, é comum usar Promises ou async/await para lidar com elas de forma eficaz. Aqui está um exemplo básico de uma função assíncrona que retorna uma Promise:

```tsx
function esperarPor(tempo: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, tempo);
  });
}

async function main() {
  console.log("Início da execução");
  await esperarPor(2000); // Espera por 2 segundos
  console.log("Após a espera de 2 segundos");
}

main();
```

### **Operações Assíncronas**

O armazenamento assíncrono de dados, como o acesso ao banco de dados ou APIs externas, é uma prática comum em desenvolvimento web. Aqui está um exemplo básico de como você pode usar uma função assíncrona para buscar dados de uma API:

```tsx
async function buscarDadosDaAPI(): Promise<any> {
  const resposta = await fetch("https://api.example.com/data");
  const dados = await resposta.json();
  return dados;
}

async function main() {
  try {
    const dados = await buscarDadosDaAPI();
    console.log("Dados recebidos:", dados);
  } catch (erro) {
    console.error("Erro ao buscar dados da API:", erro);
  }
}

main();
```

### **Uso de async/await para Tratamento de Promises**

O uso de async/await torna o código mais legível e fácil de entender em comparação com o encadeamento de Promises. Aqui está um exemplo de como você pode usar async/await para lidar com várias operações assíncronas:

```tsx
async function operacaoCombinada(): Promise<void> {
  try {
    const resultado1 = await operacaoAssincrona1();
    const resultado2 = await operacaoAssincrona2(resultado1);
    console.log("Resultado combinado:", resultado1, resultado2);
  } catch (erro) {
    console.error("Erro na operação combinada:", erro);
  }
}

async function operacaoAssincrona1(): Promise<number> {
  // Simula uma operação assíncrona
  await esperarPor(1000); // Espera por 1 segundo
  return 10;
}

async function operacaoAssincrona2(valor: number): Promise<number> {
  // Simula outra operação assíncrona
  await esperarPor(1500); // Espera por 1.5 segundos
  return valor * 2;
}

operacaoCombinada();
```

## Try/Catch

O **`try`** e **`catch`** são blocos usados em conjunto em JavaScript e TypeScript para lidar com exceções (erros). O bloco **`try`** permite que você defina um bloco de código no qual as exceções podem ocorrer e o bloco **`catch`** permite que você defina o que fazer se uma exceção ocorrer dentro do bloco **`try`**. Aqui está uma explicação dos conceitos e exemplos de código em TypeScript:

### **Conceitos**

- **try**: O bloco **`try`** é usado para envolver o código que pode gerar uma exceção. Se uma exceção ocorrer dentro do bloco **`try`**, o controle do programa será transferido para o bloco **`catch`**.
- **catch**: O bloco **`catch`** é usado para lidar com exceções que ocorrem dentro do bloco **`try`**. Ele captura a exceção e executa o código definido dentro dele para lidar com a exceção.

### **Exemplo de Código**

```tsx
try {
  // Código que pode gerar uma exceção
  const resultado = 10 / 0; // Isso irá gerar uma exceção de divisão por zero
  console.log("Resultado da divisão:", resultado);
} catch (erro) {
  // Código para lidar com a exceção
  console.error("Ocorreu um erro:", erro);
}
```

Neste exemplo, o código dentro do bloco **`try`** tenta dividir o número 10 por zero, o que gera uma exceção. Como essa operação é inválida em JavaScript/TypeScript, uma exceção é lançada. O controle do programa é transferido para o bloco **`catch`**, onde o erro é capturado e tratado. O erro é então impresso no console usando **`console.error`**.

### **Exemplo de Uso com Funções Assíncronas**

```tsx
async function buscarDados() {
  try {
    // Código que pode gerar uma exceção
    const resposta = await fetch("https://api.example.com/data");
    const dados = await resposta.json();
    console.log("Dados recebidos:", dados);
  } catch (erro: unknown) {
    // Verificação de tipo antes de acessar propriedades
    if (erro instanceof Error) {
      console.error("Erro ao buscar dados:", erro.message);
    } else {
      console.error("Erro desconhecido:", erro);
    }
  }
}

buscarDados();
```

Neste exemplo, a função **`buscarDados`** realiza uma requisição HTTP para buscar dados de uma API. Se ocorrer algum erro durante a requisição, como problemas de conexão ou respostas com erro, o bloco **`catch`** lidará com a exceção e imprimirá o erro no console.

## Exercícios Intermediários

1. **Trabalhando com diferentes tipos de dados:** Crie uma função que receba um objeto contendo um id (número ou string), nome (string) e ativo (boolean). A função deve retornar uma string formatada com os valores desse objeto.

2. **Criando e manipulando um array de objetos:** Crie um array de objetos representando produtos, cada um com nome, preco e categoria. Depois, filtre apenas os produtos da categoria "Eletrônicos" e retorne um novo array com os preços com 20% de desconto.

3. **Composição de funções: Crie duas funções:** uma que recebe um número e retorna o dobro dele, e outra que recebe um número e soma 10. Depois, crie uma terceira função que aplique ambas as transformações de forma encadeada.

4. **Manipulação de arrays e ordenação:** Crie um array de números e ordene-os do maior para o menor sem alterar o array original.

5. **Função de agregação usando um acumulador:** Dado um array de transações contendo { tipo: "entrada" | "saida", valor: number }, crie uma função que calcule o saldo final (soma das entradas menos as saídas).

6. **Implementação de um sistema de autenticação:** Crie uma interface Usuario contendo nome, email e senha. Depois, crie uma função que receba uma lista de usuários e um email e senha, retornando se as credenciais são válidas.

7. **Função assíncrona simulando uma requisição:** Crie uma função que simule uma chamada de API que retorna uma lista de usuários após 2 segundos. Use async/await para aguardar a resposta e exibir os dados.

8. **Controle de estoque com classe:** Crie uma classe Estoque que armazena um array de produtos. A classe deve ter métodos para adicionar um novo produto, remover um produto pelo nome e obter a quantidade total de produtos.

9. **Implementação de um CRUD em memória:** Crie uma classe RepositorioUsuarios que tenha métodos para adicionar, atualizar, excluir e buscar usuários por ID.

10. **Criando uma função que retorna outra função:** Crie uma função que recebe um multiplicador e retorna outra função que multiplica um número pelo multiplicador fornecido.

11. **Tipos dinâmicos e validação:** Crie uma função que receba um objeto e retorne um novo objeto apenas com as propriedades cujos valores sejam strings.

12. **Manipulação avançada de objetos:** Dado um objeto representando uma configuração (config), remova a propriedade senha caso ela esteja presente antes de retornar o objeto.

13. **Gerenciamento de erros em operações assíncronas:** Crie uma função que simule uma chamada de API e pode lançar um erro aleatório. Use try/catch para tratar a possível falha.

14. **Uso de Generics em funções utilitárias:** Crie uma função genérica que receba um array de qualquer tipo e retorne um novo array sem elementos duplicados.

15. **Trabalhando com múltiplas Promises:** Crie três funções assíncronas que retornam promessas resolvendo em tempos diferentes. Use Promise.all para aguardar todas finalizarem e exibir os tempos de conclusão.

## Gabarito

```ts
// Exercício 1 - Trabalhando com diferentes tipos de dados
function formatarDados(dados: { id: number | string; nome: string; ativo: boolean }): string {
  return `ID: ${dados.id}, Nome: ${dados.nome}, Ativo: ${dados.ativo ? 'Sim' : 'Não'}`;
}
console.log(formatarDados({ id: 101, nome: 'Ana', ativo: true }));

// Exercício 2 - Criando e manipulando um array de objetos
const produtos = [
  { nome: 'Notebook', preco: 3000, categoria: 'Eletrônicos' },
  { nome: 'Geladeira', preco: 2000, categoria: 'Eletrodomésticos' },
  { nome: 'Smartphone', preco: 2500, categoria: 'Eletrônicos' },
];

const eletronicosComDesconto = produtos
  .filter(produto => produto.categoria === 'Eletrônicos')
  .map(produto => ({ ...produto, preco: produto.preco * 0.8 }));
console.log(eletronicosComDesconto);

// Exercício 3 - Composição de funções
const dobrar = (x: number) => x * 2;
const somar10 = (x: number) => x + 10;
const transformar = (x: number) => somar10(dobrar(x));
console.log(transformar(5)); // Saída: 20

// Exercício 4 - Manipulação de arrays e ordenação
const numeros = [3, 8, 1, 5, 10];
const ordenado = [...numeros].sort((a, b) => b - a);
console.log(ordenado);

// Exercício 5 - Função de agregação usando um acumulador
const transacoes = [
  { tipo: 'entrada', valor: 100 },
  { tipo: 'saida', valor: 30 },
  { tipo: 'entrada', valor: 50 },
];

const saldo = transacoes.reduce((total, transacao) => {
  return transacao.tipo === 'entrada' ? total + transacao.valor : total - transacao.valor;
}, 0);
console.log(saldo); // Saída: 120

// Exercício 6 - Implementação de um sistema de autenticação
interface Usuario {
  nome: string;
  email: string;
  senha: string;
}
const usuarios: Usuario[] = [
  { nome: 'Alice', email: 'alice@example.com', senha: '1234' },
  { nome: 'Bob', email: 'bob@example.com', senha: '5678' },
];

function autenticar(email: string, senha: string): boolean {
  return usuarios.some(usuario => usuario.email === email && usuario.senha === senha);
}
console.log(autenticar('alice@example.com', '1234')); // Saída: true

// Exercício 7 - Função assíncrona simulando uma requisição
async function buscarUsuarios() {
  return new Promise(resolve => setTimeout(() => resolve(['Ana', 'Carlos', 'Mariana']), 2000));
}
buscarUsuarios().then(console.log);

// Exercício 8 - Controle de estoque com classe
class Estoque {
  private produtos: string[] = [];

  adicionar(produto: string) {
    this.produtos.push(produto);
  }

  remover(produto: string) {
    this.produtos = this.produtos.filter(p => p !== produto);
  }

  obterQuantidade(): number {
    return this.produtos.length;
  }
}
const estoque = new Estoque();
estoque.adicionar('Notebook');
console.log(estoque.obterQuantidade());

// Exercício 9 - Implementação de um CRUD em memória
class RepositorioUsuarios {
  private usuarios: Usuario[] = [];

  adicionar(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  atualizar(email: string, novosDados: Partial<Usuario>) {
    this.usuarios = this.usuarios.map(usuario => (usuario.email === email ? { ...usuario, ...novosDados } : usuario));
  }
}
const repo = new RepositorioUsuarios();
repo.adicionar({ nome: 'Lucas', email: 'lucas@email.com', senha: 'abc' });

// Exercício 10 - Criando uma função que retorna outra função
const multiplicador = (fator: number) => (num: number) => num * fator;
const triplicar = multiplicador(3);
console.log(triplicar(5));

// Exercício 11 - Tipos dinâmicos e validação
function filtrarStrings(obj: Record<string, any>) {
  return Object.fromEntries(Object.entries(obj).filter(([_, valor]) => typeof valor === 'string'));
}
console.log(filtrarStrings({ nome: 'João', idade: 30, cidade: 'São Paulo' }));

// Exercício 12 - Manipulação avançada de objetos
function removerSenha(config: Record<string, any>) {
  const { senha, ...resto } = config;
  return resto;
}
console.log(removerSenha({ usuario: 'admin', senha: '1234' }));

// Exercício 13 - Gerenciamento de erros em operações assíncronas
async function chamadaAPI() {
  try {
    throw new Error('Erro na API');
  } catch (erro) {
    console.error(erro.message);
  }
}
chamadaAPI();

// Exercício 14 - Uso de Generics em funções utilitárias
function removerDuplicatas<T>(array: T[]): T[] {
  return [...new Set(array)];
}
console.log(removerDuplicatas([1, 2, 2, 3]));

// Exercício 15 - Trabalhando com múltiplas Promises
Promise.all([fetch('https://jsonplaceholder.typicode.com/posts'), fetch('https://jsonplaceholder.typicode.com/users')])
  .then(respostas => respostas.map(res => res.json()))
  .then(console.log);
```

## Exercícios Avançados

1. **Sistema de Controle de Tarefas com Classes e Interfaces:** Implemente um sistema de controle de tarefas usando classes e interfaces. A interface Tarefa deve ter id, titulo, descricao, status (pendente, em progresso ou concluída). A classe GerenciadorTarefas deve permitir adicionar, atualizar status, remover e listar todas as tarefas.

2. **Transformação e Filtragem de Dados com Generics e High Order Functions:** Dado um array de objetos representando transações bancárias, implemente uma função genérica que possa filtrar transações por um critério passado como argumento. Depois, transforme os valores para exibir apenas as transações maiores que um valor mínimo fornecido.

```ts
const transacoes = [
  { id: 1, tipo: 'entrada', valor: 200 },
  { id: 2, tipo: 'saida', valor: 50 },
  { id: 3, tipo: 'entrada', valor: 500 },
  { id: 4, tipo: 'saida', valor: 100 },
];
```

A função deve permitir buscar por tipo e depois retornar apenas os valores maiores que um mínimo determinado.

3. **Sistema de Requisição de API com Controle de Erros:** Crie uma função assíncrona que realize uma chamada HTTP para buscar dados de usuários em uma API externa. A função deve tratar erros adequadamente usando try/catch, retornar um array de usuários formatados ({ nome, email }), e permitir a simulação de falhas aleatórias na requisição.

4. **Middleware para Validação de Dados:** Implemente um middleware de validação que recebe um objeto qualquer e um esquema de tipos esperado. O middleware deve verificar se todas as propriedades obrigatórias estão presentes e se os tipos estão corretos. Caso contrário, deve lançar um erro detalhado.

Exemplo de uso:

```ts
const schema = {
  nome: 'string',
  idade: 'number',
  email: 'string',
};

const dados = {
  nome: 'Carlos',
  idade: 'trinta',
  email: 'carlos@email.com',
};

// Deve lançar um erro pois "idade" não é um número
validarDados(dados, schema);
```

5. **Pipeline de Processamento de Dados:** Crie um sistema de pipeline de processamento que recebe um array de números e aplica várias transformações sequenciais usando funções de alta ordem. O pipeline deve ser flexível para adicionar novas transformações, como:

- Filtrar apenas números pares.
- Dobrar os valores.
- Somar um número a todos os elementos.
- Retornar a média dos números resultantes.
- A função deve permitir adicionar novos passos dinamicamente ao pipeline.

## Gabarito

```ts
// Exercício 1 - Sistema de Controle de Tarefas com Classes e Interfaces
interface Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  status: 'pendente' | 'em progresso' | 'concluída';
}

class GerenciadorTarefas {
  private tarefas: Tarefa[] = [];

  adicionarTarefa(titulo: string, descricao: string) {
    const novaTarefa: Tarefa = {
      id: this.tarefas.length + 1,
      titulo,
      descricao,
      status: 'pendente',
    };
    this.tarefas.push(novaTarefa);
  }

  atualizarStatus(id: number, status: Tarefa['status']) {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.status = status;
    }
  }

  removerTarefa(id: number) {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
  }

  listarTarefas() {
    return this.tarefas;
  }
}

const gerenciador = new GerenciadorTarefas();
gerenciador.adicionarTarefa('Estudar TypeScript', 'Revisar interfaces e classes');
gerenciador.atualizarStatus(1, 'concluída');
console.log(gerenciador.listarTarefas());

// Exercício 2 - Transformação e Filtragem de Dados
function filtrarTransacoes<T>(lista: T[], criterio: (item: T) => boolean): T[] {
  return lista.filter(criterio);
}

const transacoesFiltradas = filtrarTransacoes(transacoes, t => t.tipo === 'entrada')
  .filter(t => t.valor > 100)
  .map(t => t.valor);

console.log(transacoesFiltradas); // Saída: [200, 500]

// Exercício 3 - Sistema de Requisição de API com Controle de Erros
async function buscarUsuarios(): Promise<{ nome: string; email: string }[]> {
  try {
    if (Math.random() < 0.3) throw new Error('Falha na requisição');

    const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
    const dados = await resposta.json();

    return dados.map((user: any) => ({
      nome: user.name,
      email: user.email,
    }));
  } catch (erro) {
    console.error('Erro ao buscar usuários:', erro);
    return [];
  }
}

buscarUsuarios().then(console.log);

// Exercício 4 - Middleware para Validação de Dados
function validarDados(obj: Record<string, any>, esquema: Record<string, string>) {
  for (let chave in esquema) {
    if (!(chave in obj)) throw new Error(`Propriedade ${chave} está ausente`);
    if (typeof obj[chave] !== esquema[chave]) throw new Error(`Propriedade ${chave} deveria ser do tipo ${esquema[chave]}`);
  }
}

const schema = { nome: 'string', idade: 'number', email: 'string' };
const dadosValidos = { nome: 'Carlos', idade: 30, email: 'carlos@email.com' };
const dadosInvalidos = { nome: 'Carlos', idade: 'trinta', email: 'carlos@email.com' };

try {
  validarDados(dadosValidos, schema);
  console.log('Dados válidos!');
} catch (erro) {
  console.error(erro.message);
}

try {
  validarDados(dadosInvalidos, schema);
} catch (erro) {
  console.error(erro.message);
}

// Exercício 5 - Pipeline de Processamento de Dados
function pipeline<T>(valor: T, ...funcoes: ((input: T) => T)[]): T {
  return funcoes.reduce((acc, fn) => fn(acc), valor);
}

const numeros = [10, 15, 20, 25, 30];

const pipelineProcessado = pipeline(
  numeros,
  arr => arr.filter(num => num % 2 === 0), // Filtrar pares
  arr => arr.map(num => num * 2), // Dobrar valores
  arr => arr.map(num => num + 10), // Somar 10
  arr => arr.reduce((soma, num) => soma + num, 0) / arr.length, // Média
);

console.log(pipelineProcessado); // Saída: Média final após transformações
```

## Manipulação de Dados no TypeScript

Manipulação de tipos em TypeScript envolve diversas técnicas para trabalhar de forma eficiente com os tipos do sistema de tipos estático da linguagem. Antes de explorar como manipular tipos, é fundamental entender alguns conceitos-chave.

### Type Narrowing (Atenuação de Tipo)

Type Narrowing é a técnica usada pelo TypeScript para reduzir um tipo mais amplo para um tipo mais específico dentro de um determinado escopo. Isso permite que o compilador entenda melhor as operações que podem ser realizadas em um valor.

TypeScript realiza narrowing automaticamente com operadores condicionais como typeof, instanceof, verificações booleanas e comparações.

**Exemplo: Narrowing com typeof**

```ts
function processar(valor: string | number) {
  if (typeof valor === "string") {
    return valor.toUpperCase(); // TypeScript sabe que é string aqui
  } else {
    return valor * 2; // TypeScript sabe que é number aqui
  }
}

console.log(processar("hello")); // "HELLO"
console.log(processar(10)); // 20
```

O TypeScript reconhece automaticamente que, dentro de cada ramo do if, valor é um tipo específico.

### Type Guards (Guardas de Tipo)

Type Guards são funções ou expressões utilizadas para refinar tipos de maneira segura, ajudando o TypeScript a entender o tipo exato de um valor dentro de um escopo.

Um Type Guard é geralmente uma função que retorna um booleano e usa um predicado de tipo.

**Exemplo: Type Guard com instanceof**

```ts
class Gato {
  miar() {
    console.log("Miau!");
  }
}

class Cachorro {
  latir() {
    console.log("Au Au!");
  }
}

function fazerSom(animal: Gato | Cachorro) {
  if (animal instanceof Gato) {
    animal.miar(); // TypeScript sabe que é um Gato
  } else {
    animal.latir(); // TypeScript sabe que é um Cachorro
  }
}

const gato = new Gato();
const cachorro = new Cachorro();

fazerSom(gato); // "Miau!"
fazerSom(cachorro); // "Au Au!"
```

**Exemplo: Type Guard com predicado de tipo**

```ts
interface Peixe {
  nadar: () => void;
}

interface Passaro {
  voar: () => void;
}

// animal is Peixe → Isso informa ao TypeScript que, se a função retornar true, animal é com certeza um Peixe.
function ehPeixe(animal: Peixe | Passaro): animal is Peixe {
  //Faz um type assertion (animal as Peixe), tratando animal como um Peixe.
  //Verifica se animal.nadar existe. Se nadar for diferente de undefined, sabemos que animal é um Peixe.
  return (animal as Peixe).nadar !== undefined;
}

function mover(animal: Peixe | Passaro) {
  if (ehPeixe(animal)) {
    animal.nadar(); // TypeScript sabe que é um Peixe
  } else {
    animal.voar(); // TypeScript sabe que é um Passaro
  }
}

const peixe: Peixe = {
  nadar: () => console.log("O peixe está nadando!"),
};

const passaro: Passaro = {
  voar: () => console.log("O pássaro está voando!"),
};

mover(peixe); // Saída: "O peixe está nadando!"
mover(passaro); // Saída: "O pássaro está voando!"
```

O uso de predicados de tipo (valor is Tipo) faz com que o TypeScript entenda com precisão o tipo dentro do escopo.

### Utility Types (Tipos Utilitários)

Os Utility Types são tipos embutidos no TypeScript que ajudam na manipulação de tipos existentes, facilitando a criação de novos tipos derivados.

**Exemplo dos principais Utility Types**

- **Partial<T>** → Torna todas as propriedades opcionais.

```ts
interface Usuario {
  nome: string;
  idade: number;
}

const usuarioParcial: Partial<Usuario> = { nome: "Carlos" }; // Ok!
```

**Required<T>** → Torna todas as propriedades obrigatórias.

```ts
interface Config {
  modo?: string;
  debug?: boolean;
}

const config: Required<Config> = { modo: "dark", debug: true }; // Todas as propriedades agora são obrigatórias
```

**Pick<T, K>** → Cria um tipo apenas com algumas propriedades.

```ts
interface Pessoa {
  nome: string;
  idade: number;
  endereco: string;
}

type PessoaBasica = Pick<Pessoa, "nome" | "idade">; // Novo tipo com apenas nome e idade
```

**Omit<T, K>** → Remove certas propriedades do tipo original.

```ts
type PessoaSemEndereco = Omit<Pessoa, "endereco">; // Nome e idade permanecem, endereço é removido
```

Readonly<T> → Torna todas as propriedades imutáveis.

```ts
const pessoa: Readonly<Pessoa> = { nome: "Ana", idade: 25, endereco: "x" };
//pessoa.nome = 'João'; // Erro! Nome não pode ser alterado
```

Utility Types são muito úteis para criar tipos flexíveis e reutilizáveis!

### Literal Types, Conditional Types e Mapped Types

**Literal Types**

São tipos que aceitam valores específicos em vez de qualquer valor de um tipo mais genérico.

```ts
type Direcao = "esquerda" | "direita" | "cima" | "baixo";

function mover(direcao: Direcao) {
  console.log(`Movendo para ${direcao}`);
}

mover("esquerda"); // Ok
// mover("frente"); // Erro! "frente" não é um valor permitido
```

**Conditional Types**

Permitem definir tipos dinamicamente com base em uma condição.

```ts
// Definição do tipo condicional
type TipoCondicional<T> = T extends string
  ? "É uma string"
  : "Não é uma string";

// Testando com diferentes tipos
type Resultado1 = TipoCondicional<string>; // "É uma string"
type Resultado2 = TipoCondicional<number>; // "Não é uma string"
type Resultado3 = TipoCondicional<boolean>; // "Não é uma string"
type Resultado4 = TipoCondicional<"Hello">; // "É uma string"
type Resultado5 = TipoCondicional<42>; // "Não é uma string"

// Exemplo prático com funções
function verificarTipo<T>(valor: T): TipoCondicional<T> {
  return (
    typeof valor === "string" ? "É uma string" : "Não é uma string"
  ) as TipoCondicional<T>;
}

console.log(verificarTipo("Olá")); // Saída: "É uma string"
console.log(verificarTipo(123)); // Saída: "Não é uma string"
console.log(verificarTipo(true)); // Saída: "Não é uma string"
```

**Mapped Types**

São usados para criar novos tipos baseados em um tipo existente, aplicando transformações.

```ts
type Usuario = {
  nome: string;
  idade: number;
};

// Criando um tipo onde todas as propriedades são opcionais
type UsuarioOpcional = { [K in keyof Usuario]?: Usuario[K] };
```

Ou podemos combinar com readonly

```ts
type UsuarioSomenteLeitura = { readonly [K in keyof Usuario]: Usuario[K] };
```

Ou podemos transformar tudo em boolean

```ts
type UsuarioBooleano = { [K in keyof Usuario]: boolean };
```

Mapped Types são muito úteis para criar tipos dinâmicos com base em objetos existentes.

## Programação Orientada a Objetos

Na Programação Orientada a Objetos temos os 4 pilares principais, que são: Abstração, Encapsulamento, Polimorfismo e Herança.

### Classes e Objetos

No TypeScript, podemos definir classes e criar objetos a partir delas.

```ts
class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

// Criando um objeto
const pessoa1 = new Pessoa("João", 30);
console.log(pessoa1.apresentar()); // Saída: Olá, meu nome é João e tenho 30 anos.
```

### Modificadores de Acesso

Os modificadores public, private e protected controlam o acesso aos atributos e métodos da classe.

```ts
class ContaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): boolean {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  getSaldo(): number {
    return this.saldo;
  }
}

// Criando conta
const conta = new ContaBancaria(1000);
conta.depositar(500);
console.log(conta.getSaldo()); // Saída: 1500
conta.sacar(200);
console.log(conta.getSaldo()); // Saída: 1300
```

### Herança

Herança permite que uma classe herde atributos e métodos de outra classe.

```ts
class Animal {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  emitirSom(): string {
    return "Som genérico";
  }
}

class Cachorro extends Animal {
  constructor(nome: string) {
    super(nome);
  }

  emitirSom(): string {
    return "Au Au!";
  }
}

// Criando objetos
const animal = new Animal("Caramelo");
console.log(animal.emitirSom()); // Saída: Som genérico

console.log(animal.nome);

const dog = new Cachorro("Rex");
console.log(dog.emitirSom()); // Saída: Au Au!

console.log(dog.nome);
```

### Interfaces

Interfaces definem um contrato que uma classe deve seguir.

```ts
interface Forma {
  calcularArea(): number;
}

class Retangulo implements Forma {
  constructor(private largura: number, private altura: number) {}

  calcularArea(): number {
    return this.largura * this.altura;
  }
}

const retangulo = new Retangulo(5, 10);
console.log(retangulo.calcularArea()); // Saída: 50
```

### Classes Abstratas

Classes abstratas servem como base para outras classes e não podem ser instanciadas diretamente.

Uma classe abstrata pode conter:

- Métodos abstratos (que devem ser implementados nas subclasses).
- Métodos concretos (que já possuem implementação e podem ser usados diretamente pelas subclasses).

```ts
abstract class Veiculo {
  constructor(protected modelo: string) {}

  abstract acelerar(): void;

  getModelo(): string {
    return this.modelo;
  }
}

class Carro extends Veiculo {
  acelerar(): void {
    console.log(`${this.modelo} está acelerando!`);
  }
}

// Criando um objeto da classe Carro
const meuCarro = new Carro("Ferrari");
meuCarro.acelerar(); // Saída: Ferrari está acelerando!
console.log(meuCarro.getModelo());
```

### Polimorfismo

O polimorfismo permite que métodos sejam reimplementados em subclasses.

```ts
class Funcionario {
  constructor(protected nome: string, protected salario: number) {}

  calcularBonus(): number {
    return this.salario * 0.1;
  }
}

class Gerente extends Funcionario {
  calcularBonus(): number {
    return this.salario * 0.2;
  }
}

const funcionario = new Funcionario("Carlos", 5000);
console.log(funcionario.calcularBonus()); // Saída: 500

const gerente = new Gerente("Ana", 7000);
console.log(gerente.calcularBonus()); // Saída: 1400
```

### Método Virtual (virtual)

Em TypeScript, todos os métodos de instância são virtual por padrão.

Métodos virtuais são aqueles que podem ser sobrescritos (override) por subclasses.

```ts
class Animal {
  falar(): void {
    console.log("O animal faz um som");
  }
}

class Cachorro extends Animal {
  falar(): void {
    console.log("O cachorro late: Au Au!");
  }
}

class Gato extends Animal {
  falar(): void {
    console.log("O gato mia: Miau!");
  }
}

// Criando instâncias e chamando métodos virtuais
const animais: Animal[] = [new Cachorro(), new Gato(), new Animal()];

animais.forEach((animal) => animal.falar());
```

O método falar é virtual, pois pode ser sobrescrito (override) nas subclasses Cachorro e Gato.

Polimorfismo: Quando chamamos falar() em um Animal, TypeScript chama a implementação correta com base na instância real.

### Método Estático (static)

Pertence à classe, e não a uma instância da classe.

É chamado diretamente na classe, sem precisar criar um objeto.

Não pode acessar atributos ou métodos de instância, pois não está vinculado a nenhum objeto específico.

```ts
class Util {
  static saudacao(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao TypeScript!`;
  }
}

// Chamando o método estático sem instanciar a classe
console.log(Util.saudacao("Carlos")); // Saída: Olá, Carlos! Bem-vindo ao TypeScript!
```

O método saudacao pertence à classe Util e pode ser chamado diretamente sem precisar criar um objeto.

### Composição

A composição é uma técnica de modelagem que define a relação "tem um" entre classes.

Em vez de herdar, uma classe contém instâncias de outras classes como atributos.

Promove o reuso de código sem acoplamento excessivo.

A composição é implementada através de atributos privados que armazenam objetos de outras classes.

```ts
class Motor {
  ligar(): void {
    console.log("Motor ligado!");
  }
}

class Carro {
  private motor: Motor;

  constructor() {
    this.motor = new Motor(); // Um Carro tem um Motor.
  }

  ligarCarro(): void {
    this.motor.ligar();
  }
}

const meuCarro = new Carro();
meuCarro.ligarCarro(); // Saída: Motor ligado!
```

Carro não herda Motor, mas contém um motor como atributo (motor).

O código fica modular, permitindo que Motor possa ser substituído sem alterar Carro.

Características:

- Relacionamento de posse (tem um). Uma classe contém instâncias de outra classe como atributos.
- Baixo acoplamento (a classe pode ser usada independentemente).
- Alta flexibilidade (pode mudar componentes internos sem afetar a classe principal).
- Usa delegação para reutilizar código.
- Mais modular e fácil de manter.

### Delegação

Técnica onde um objeto delega a execução de uma ação a outro objeto.

```ts
class Impressora {
  imprimir(texto: string): void {
    console.log(`Imprimindo: ${texto}`);
  }
}

class Documento {
  private impressora = new Impressora();

  imprimirDocumento(): void {
    this.impressora.imprimir("Documento importante");
  }
}

const doc = new Documento();
doc.imprimirDocumento(); // Saída: Imprimindo: Documento importante
```

### Associação

Representa um relacionamento entre classes, sem indicar uma relação de posse.

Pode ser unidirecional (um objeto sabe do outro) ou bidirecional (ambos sabem da existência um do outro).

Possui baixo acoplamento – pode existir independentemente.

Usa referências a objetos externos.

Flexível, pois permite relações dinâmicas.

```ts
class Pessoa {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

class Empresa {
  nome: string;
  empregados: Pessoa[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  adicionarEmpregado(empregado: Pessoa): void {
    this.empregados.push(empregado);
  }
}

const empresa = new Empresa("Tech Corp");
const pessoa1 = new Pessoa("Carlos");
const pessoa2 = new Pessoa("Ana");

empresa.adicionarEmpregado(pessoa1);
empresa.adicionarEmpregado(pessoa2);

console.log(empresa.empregados); // Lista de empregados da empresa
```

A Empresa conhece os empregados (Pessoa[]), mas Pessoa não sabe que pertence à Empresa.

**Exemplo de Associação Bidirecional**

```ts
class Pessoa {
  nome: string;
  empresa?: Empresa; // Agora Pessoa também conhece a Empresa

  constructor(nome: string) {
    this.nome = nome;
  }

  setEmpresa(empresa: Empresa) {
    this.empresa = empresa;
  }
}

class Empresa {
  nome: string;
  empregados: Pessoa[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  adicionarEmpregado(empregado: Pessoa): void {
    this.empregados.push(empregado);
    empregado.setEmpresa(this); // Agora Pessoa também conhece sua Empresa
  }
}

const empresa = new Empresa("Tech Corp");
const pessoa1 = new Pessoa("Carlos");
const pessoa2 = new Pessoa("Ana");

empresa.adicionarEmpregado(pessoa1);
empresa.adicionarEmpregado(pessoa2);

console.log(pessoa1.empresa?.nome); // Saída: Tech Corp
console.log(pessoa2.empresa?.nome); // Saída: Tech Corp
```

Vantagens da Associação:

- Flexibilidade: A associação permite que objetos existam independentemente e sejam vinculados dinamicamente.
- Baixo Acoplamento: Como uma classe não depende diretamente da outra, podemos mudar as relações sem afetar a estrutura do código.
- Uso de Listas para Representar Múltiplos Relacionamentos: Podemos facilmente gerenciar múltiplas conexões entre objetos.

### Agregação

Tipo especial de associação onde um objeto pertence a outro, mas pode existir sem ele.

Se o objeto principal for destruído, o associado continua existindo.

```ts
class Jogador {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

class Time {
  nome: string;
  jogadores: Jogador[]; // Agregação: Time contém jogadores, mas não os "possui"

  constructor(nome: string, jogadores: Jogador[]) {
    this.nome = nome;
    this.jogadores = jogadores;
  }
}

const jogador1 = new Jogador("Messi");
const jogador2 = new Jogador("Ronaldo");

const time = new Time("Seleção", [jogador1, jogador2]);

console.log(time.jogadores.map((j) => j.nome)); // ["Messi", "Ronaldo"]
```

**Resumo**

- **Associação:** Objetos conhecem uns aos outros sem dependência forte.
- **Agregação:** Objetos são contidos, mas podem existir separadamente.
- **Composição:** Objetos são fortemente acoplados, um depende do outro.
- **Herança:** Cria uma relação “é um”, compartilhando atributos e métodos.

### Coesão

A coesão é um conceito fundamental em design de software que mede o grau de foco e propósito de uma classe.

- Uma classe é altamente coesa quando todos os seus métodos e atributos estão diretamente relacionados ao seu objetivo principal.
- Uma classe com baixa coesão mistura responsabilidades diferentes, tornando o código difícil de entender, testar e manter.

```ts
class Relatorio {
  gerar(): void {
    console.log("Gerando relatório...");
  }

  /* ❌ salvarEmDisco(): void {
    console.log("Salvando relatório no disco...");
  }*/
}

class EnviarEmail {
  enviar(destinatario: string): void {
    console.log(`Enviando email para ${destinatario}`);
  }
}
```

A classe Relatorio só gera relatórios e a classe EnviarEmail só envia emails.

Ambas seguem o princípio da responsabilidade única (SRP - Single Responsibility Principle).

**Importância da Coesão**

- **Código mais fácil de entender:** Cada classe faz apenas uma coisa.
- **Facilidade de manutenção:** Mudanças são mais localizadas, evitando impactos inesperados.
- **Menos dependências desnecessárias:** Evita que uma classe dependa de muitas outras.
- **Facilidade para reutilizar código:** Componentes bem definidos podem ser usados em diferentes

### Acoplamento

O acoplamento mede o nível de dependência entre módulos, classes ou componentes de um sistema.

- Alto acoplamento: As classes dependem fortemente umas das outras, tornando mudanças mais difíceis.
- Baixo acoplamento: As classes são independentes, facilitando manutenção e reutilização.

O objetivo do design de software é sempre reduzir o acoplamento, tornando o código mais flexível e reutilizável.

**Acoplamento Forte (Alto Acoplamento) ❌**

Uma classe conhece detalhes internos de outra classe.

Mudanças em uma classe exigem mudanças em outra.

Dificulta testes unitários, pois as classes dependem fortemente entre si.

**Exemplo de Acoplamento Forte (❌ Ruim)**

```ts
class MySQLDatabase {
  conectar(): void {
    console.log("Conectando ao MySQL...");
  }
}

class UsuarioService {
  private db = new MySQLDatabase(); // DEPENDÊNCIA DIRETA! ❌

  obterUsuarios(): void {
    this.db.conectar();
    console.log("Buscando usuários...");
  }
}

const service = new UsuarioService();
service.obterUsuarios();
```

UsuarioService depende diretamente de MySQLDatabase.

Se quisermos trocar MySQL por PostgreSQL, teremos que modificar UsuarioService.

**Acoplamento Fraco (Baixo Acoplamento) ✅**

Uma classe não depende diretamente de outra.

Utiliza interfaces e injeção de dependência para tornar o código mais flexível.

Facilita testes unitários, pois permite usar classes mockadas ou simuladas.

**Exemplo de Acoplamento Fraco (✅ Bom)**

```ts
// Interface para abstrair o banco de dados
interface Database {
  conectar(): void;
}

class MySQLDatabase implements Database {
  conectar(): void {
    console.log("Conectando ao MySQL...");
  }
}

class PostgreSQLDatabase implements Database {
  conectar(): void {
    console.log("Conectando ao PostgreSQL...");
  }
}

class UsuarioService {
  constructor(private db: Database) {} // INJEÇÃO DE DEPENDÊNCIA ✅

  obterUsuarios(): void {
    this.db.conectar();
    console.log("Buscando usuários...");
  }
}

// Agora podemos trocar o banco sem alterar UsuarioService!
const mysqlService = new UsuarioService(new MySQLDatabase());
mysqlService.obterUsuarios(); // Saída: Conectando ao MySQL... Buscando usuários...

const pgService = new UsuarioService(new PostgreSQLDatabase());
pgService.obterUsuarios(); // Saída: Conectando ao PostgreSQL... Buscando usuários...
```

Agora UsuarioService não depende de um banco de dados específico.

Podemos trocar o banco sem modificar a classe principal!

### Inversão de Dependência (DIP - SOLID)

Os módulos de alto nível não devem depender dos módulos de baixo nível diretamente.

Ambos devem depender de uma abstração.

```ts
interface Notificador {
  enviarMensagem(mensagem: string): void;
}

class EmailNotificador implements Notificador {
  enviarMensagem(mensagem: string): void {
    console.log(`Enviando email: ${mensagem}`);
  }
}

class Sistema {
  private notificador: Notificador;

  constructor(notificador: Notificador) {
    this.notificador = notificador;
  }

  executar(): void {
    this.notificador.enviarMensagem("Sistema executado!");
  }
}

const emailNotificador = new EmailNotificador();
const sistema = new Sistema(emailNotificador);
sistema.executar();
```

✅ Vantagem: O Sistema não depende diretamente da implementação, permitindo troca fácil do serviço de notificação.


# **Exercícios de Programação Orientada a Objetos (POO) em TypeScript**

## **Exercícios Básicos**
### 1. **Criação de Classe e Objeto**
- Crie uma classe `Carro` com os atributos `marca` e `modelo`.  
- Adicione um método `detalhes()` que retorna uma string com as informações do carro.  
- Instancie um objeto dessa classe e exiba os detalhes no console.

### 2. **Uso de Modificadores de Acesso (`public`, `private`)**
- Crie uma classe `ContaBancaria` com um atributo `saldo` privado.  
- Adicione métodos `depositar(valor: number)` e `getSaldo()`.  
- Teste depositando valores e exibindo o saldo.

### 3. **Herança**
- Crie uma classe `Animal` com um método `emitirSom()`.  
- Crie uma subclasse `Gato` que sobrescreve o método para retornar `"Miau!"`.  
- Crie um objeto da classe `Gato` e chame `emitirSom()`.

### 4. **Interface Simples**
- Defina uma interface `Veiculo` com um método `mover()`.  
- Crie uma classe `Bicicleta` que implemente essa interface e retorne `"A bicicleta está se movendo"`.  
- Instancie a classe e chame o método.

### 5. **Métodos Estáticos**
- Crie uma classe `Calculadora` com um método estático `somar(a: number, b: number): number`.  
- Teste chamando `Calculadora.somar(5, 10)`.  

---

## **Exercícios Intermediários**
### 6. **Classe com Construtor e Métodos**
- Crie uma classe `Funcionario` com atributos `nome` e `salario`.  
- Adicione um método `aumentarSalario(percentual: number)`.  
- Teste criando um funcionário e aumentando seu salário.  

### 7. **Encapsulamento com `private` e `getters/setters`**
- Crie uma classe `Pessoa` com um atributo privado `_idade`.  
- Adicione um `getter` e um `setter` para controlar o acesso à idade.  
- Teste definindo e obtendo o valor da idade.  

### 8. **Polimorfismo**
- Crie uma classe `Funcionario` com um método `calcularBonus()`.  
- Crie uma subclasse `Gerente` que sobrescreve esse método para retornar um bônus maior.  
- Teste instanciando `Funcionario` e `Gerente` e chamando `calcularBonus()`.  

### 9. **Classe Abstrata**
- Crie uma classe abstrata `InstrumentoMusical` com um método `tocar()`.  
- Crie subclasses `Violao` e `Piano` que implementam esse método.  
- Teste criando objetos e chamando `tocar()`.  

### 10. **Composição**
- Crie uma classe `Processador` com um método `iniciar()`.  
- Crie uma classe `Computador` que tem um atributo privado do tipo `Processador`.  
- No construtor do `Computador`, instancie `Processador` e crie um método `ligar()` que chama `iniciar()`.  
- Teste instanciando `Computador` e chamando `ligar()`.  

---

## **Exercícios Avançados**
### 11. **Relacionamento entre Classes (Agregação)**
- Crie uma classe `Aluno` com os atributos `nome` e `matricula`.  
- Crie uma classe `Turma` com um array de alunos.  
- Adicione um método `adicionarAluno(aluno: Aluno)` na classe `Turma`.  
- Teste criando uma turma e adicionando alunos.  

### 12. **Relacionamento Bidirecional**
- Modifique o exercício anterior para que `Aluno` tenha um atributo `turma` que recebe um objeto `Turma`.  

### 13. **Interface e Herança Múltipla**
- Crie uma interface `Nadador` com o método `nadar()`.  
- Crie uma interface `Corredor` com o método `correr()`.  
- Crie uma classe `Triatleta` que implemente ambas as interfaces e defina os métodos.  
- Instancie `Triatleta` e chame os métodos `nadar()` e `correr()`.  

### 14. **Classe Genérica**
- Crie uma classe genérica `Repositorio<T>` que armazena itens de um determinado tipo.  
- Adicione métodos `adicionar(item: T)` e `listar(): T[]`.  
- Teste armazenando números e strings.  

### 15. **Singleton (Padrão de Projeto)**
- Crie uma classe `Config` que só pode ter **uma única instância**.  
- Use o padrão **Singleton** para garantir isso.  
- Teste criando múltiplas instâncias e verificando se todas são iguais.  

### 16. **Sobrecarga de Métodos**
- Crie uma classe `Conversor` com um método `converter(valor: number): string` para converter um número em string.  
- Sobrecarga: Crie uma variação `converter(valor: string): number` para converter string em número.  

### 17. **Factory Method (Padrão de Projeto)**
- Crie uma classe `PessoaFactory` com um método `criarPessoa(nome: string, idade: number): Pessoa`.  
- A classe deve retornar uma instância de `Pessoa`.  

### 18. **Delegação**
- Crie uma classe `Impressora` com um método `imprimir(texto: string)`.  
- Crie uma classe `Documento` que possui um objeto de `Impressora` e delega a ela a impressão.  

### 19. **Injeção de Dependência**
- Crie uma interface `BancoDeDados` com um método `conectar()`.  
- Implemente duas classes `MySQL` e `PostgreSQL` que implementam essa interface.  
- Crie uma classe `ServicoUsuario` que recebe um `BancoDeDados` no construtor e usa `conectar()`.  

### 20. **Mixin (Herança Múltipla Simulada)**
- Crie um mixin `Logger` que adiciona um método `log(mensagem: string)`.  
- Crie uma classe `Sistema` e use `Logger` como mixin.  
- Teste registrando mensagens de log.  

### Gabarito

```ts
// ========================
// Exercícios Básicos
// ========================

// 1. Criação de Classe e Objeto
class Carro {
  constructor(public marca: string, public modelo: string) {}

  detalhes(): string {
    return `Carro: ${this.marca} - ${this.modelo}`;
  }
}

const meuCarro = new Carro("Toyota", "Corolla");
console.log(meuCarro.detalhes());

// 2. Uso de Modificadores de Acesso
class ContaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  getSaldo(): number {
    return this.saldo;
  }
}

const conta = new ContaBancaria(1000);
conta.depositar(500);
console.log(conta.getSaldo());

// 3. Herança
class Animal {
  emitirSom(): string {
    return "Som genérico";
  }
}

class Gato extends Animal {
  emitirSom(): string {
    return "Miau!";
  }
}

const gato = new Gato();
console.log(gato.emitirSom());

// 4. Interface Simples
interface Veiculo {
  mover(): string;
}

class Bicicleta implements Veiculo {
  mover(): string {
    return "A bicicleta está se movendo";
  }
}

const minhaBicicleta = new Bicicleta();
console.log(minhaBicicleta.mover());

// 5. Métodos Estáticos
class Calculadora {
  static somar(a: number, b: number): number {
    return a + b;
  }
}

console.log(Calculadora.somar(5, 10));

// ========================
// Exercícios Intermediários
// ========================

// 6. Classe com Construtor e Métodos
class Funcionario {
  constructor(public nome: string, public salario: number) {}

  aumentarSalario(percentual: number): void {
    this.salario += (this.salario * percentual) / 100;
  }
}

const funcionario = new Funcionario("Carlos", 5000);
funcionario.aumentarSalario(10);
console.log(funcionario.salario);

// 7. Encapsulamento com Getters/Setters
class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    if (valor >= 0) {
      this._idade = valor;
    }
  }
}

const pessoa = new Pessoa();
pessoa.idade = 25;
console.log(pessoa.idade);

// 8. Polimorfismo
class Gerente extends Funcionario {
  calcularBonus(): number {
    return this.salario * 0.2;
  }
}

const gerente = new Gerente("Ana", 7000);
console.log(gerente.calcularBonus());

// 9. Classe Abstrata
abstract class InstrumentoMusical {
  abstract tocar(): void;
}

class Violao extends InstrumentoMusical {
  tocar(): void {
    console.log("Tocando violão...");
  }
}

const meuViolao = new Violao();
meuViolao.tocar();

// 10. Composição
class Processador {
  iniciar(): void {
    console.log("Processador iniciado!");
  }
}

class Computador {
  private processador: Processador = new Processador();

  ligar(): void {
    this.processador.iniciar();
  }
}

const meuComputador = new Computador();
meuComputador.ligar();

// ========================
// Exercícios Avançados
// ========================

// 11. Relacionamento entre Classes (Agregação)
class Aluno {
  constructor(public nome: string, public matricula: number) {}
}

class Turma {
  alunos: Aluno[] = [];

  adicionarAluno(aluno: Aluno): void {
    this.alunos.push(aluno);
  }
}

const turma = new Turma();
turma.adicionarAluno(new Aluno("João", 101));
console.log(turma.alunos);

// 12. Relacionamento Bidirecional
class Empresa {
  nome: string;
  empregados: Pessoa[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  adicionarEmpregado(empregado: Pessoa): void {
    this.empregados.push(empregado);
    empregado.empresa = this; // Relação bidirecional
  }
}

const empresa = new Empresa("Tech Corp");
const empregado1 = new Pessoa();
empresa.adicionarEmpregado(empregado1);

// 13. Interface e Herança Múltipla
interface Nadador {
  nadar(): void;
}

interface Corredor {
  correr(): void;
}

class Triatleta implements Nadador, Corredor {
  nadar(): void {
    console.log("Nadando...");
  }

  correr(): void {
    console.log("Correndo...");
  }
}

const atleta = new Triatleta();
atleta.nadar();
atleta.correr();

// 14. Classe Genérica
class Repositorio<T> {
  private itens: T[] = [];

  adicionar(item: T): void {
    this.itens.push(item);
  }

  listar(): T[] {
    return this.itens;
  }
}

const repo = new Repositorio<number>();
repo.adicionar(42);
console.log(repo.listar());

// 15. Singleton
class Config {
  private static instancia: Config;

  private constructor() {}

  static getInstance(): Config {
    if (!Config.instancia) {
      Config.instancia = new Config();
    }
    return Config.instancia;
  }
}

const config1 = Config.getInstance();
const config2 = Config.getInstance();
console.log(config1 === config2); // true

// 16. Sobrecarga de Métodos
class Conversor {
  converter(valor: number): string;
  converter(valor: string): number;
  converter(valor: any): any {
    return typeof valor === "number" ? valor.toString() : parseInt(valor);
  }
}

const conversor = new Conversor();
console.log(conversor.converter(10)); // "10"
console.log(conversor.converter("20")); // 20

// 17. Factory Method
class PessoaFactory {
  static criarPessoa(nome: string, idade: number): Pessoa {
    return new Pessoa();
  }
}

const novaPessoa = PessoaFactory.criarPessoa("Maria", 30);

// 18. Delegação
class Impressora {
  imprimir(texto: string): void {
    console.log(`Imprimindo: ${texto}`);
  }
}

class Documento {
  private impressora = new Impressora();

  imprimirDocumento(): void {
    this.impressora.imprimir("Documento importante");
  }
}

const doc = new Documento();
doc.imprimirDocumento();

// 19. Injeção de Dependência
interface BancoDeDados {
  conectar(): void;
}

class MySQL implements BancoDeDados {
  conectar(): void {
    console.log("Conectando ao MySQL...");
  }
}

class PostgreSQL implements BancoDeDados {
  conectar(): void {
    console.log("Conectando ao PostgreSQL...");
  }
}

class ServicoUsuario {
  constructor(private db: BancoDeDados) {}

  conectarBanco(): void {
    this.db.conectar();
  }
}

const mysqlService = new ServicoUsuario(new MySQL());
mysqlService.conectarBanco();

const pgService = new ServicoUsuario(new PostgreSQL());
pgService.conectarBanco();

// 20. Mixin (Herança Múltipla Simulada)
type Constructor<T = {}> = new (...args: any[]) => T;

function Logger<T extends Constructor>(Base: T) {
  return class extends Base {
    log(mensagem: string) {
      console.log(`Log: ${mensagem}`);
    }
  };
}

class Sistema {}

const SistemaComLog = Logger(Sistema);
const sistema = new SistemaComLog();
sistema.log("Sistema iniciado");
```
