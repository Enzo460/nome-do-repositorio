function calcularProduto(a, b) {
  let resultado = a * b;
  
  // A execução será PAUSADA aqui,
  // permitindo inspecionar 'a', 'b' e 'resultado'
  debugger; 
  
  return resultado;
}

// Para ver o debugger em ação:
// 1. Abra o console do navegador (Geralmente F12 ou Ctrl+Shift+I).
// 2. Cole e execute este código.
// 3. A execução irá parar na linha do 'debugger', e o valor de 'resultado' (que será 50) 
//    estará visível no painel "Scope" (Escopo).
let produto = calcularProduto(5, 10);

console.log(`O produto é: ${produto}`);

let contador = 5; // 1. Inicializa uma variável contadora com o valor inicial (5)

while (contador >= 1) { // 2. Condição do loop: continua enquanto o contador for maior ou igual a 1
  console.log(contador); // 3. Executa a ação: imprime o valor atual do contador

  contador = contador - 1; // 4. Atualiza a variável: decrementa o contador em 1 (equivalente a contador--)
}

console.log("Fim da contagem!");

console.log(Olá, mundo!)

// 1. Declaração e inicialização das três variáveis numéricas
let n1 = 8;
let n2 = 12;
let n3 = 10;

// 2. Cálculo da soma total
let soma = n1 + n2 + n3;

// 3. Cálculo da média
// A média é a soma dividida pelo número de elementos (3)
let media = soma / 3;

// 4. Imprime o resultado no console de forma clara
console.log(`O primeiro número é: ${n1}`);
console.log(`O segundo número é: ${n2}`);
console.log(`O terceiro número é: ${n3}`);
console.log("------------------------");
console.log(`A soma dos números é: ${soma}`);
console.log(`A média dos números é: ${media.toFixed(2)}`); // Usando toFixed(2) para formatar com 2 casas decimais

// 1. Declaração e inicialização das três variáveis numéricas
let n1 = 8;
let n2 = 12;
let n3 = 10;

// 2. Cálculo da soma total
let soma = n1 + n2 + n3;

// 3. Cálculo da média
// A média é a soma dividida pelo número de elementos (3)
let media = soma / 3;

// 4. Imprime o resultado no console de forma clara
console.log(`O primeiro número é: ${n1}`);
console.log(`O segundo número é: ${n2}`);
console.log(`O terceiro número é: ${n3}`);
console.log("------------------------");
console.log(`A soma dos números é: ${soma}`);
console.log(`A média dos números é: ${media.toFixed(2)}`); // Usando toFixed(2) para formatar com 2 casas decimais

// O loop for irá iterar de 65 (código de 'A') até 90 (código de 'Z').
for (let codigo = 65; codigo <= 90; codigo++) {
  // Converte o código numérico para o caractere correspondente.
  let letra = String.fromCharCode(codigo);

  // Imprime a letra no console.
  console.log(letra);
}

// 1. Declara a variável 'num' e a inicializa com um valor (pode ser alterado para teste).
let num = 15;

// 2. Inicia a estrutura condicional if-else.
// A condição (num % 2 === 0) verifica se o resto da divisão de 'num' por 2 é zero.
if (num % 2 === 0) {
  // Se a condição for VERDADEIRA (resto é zero), o número é par.
  console.log(`O número ${num} é par.`);
} else {
  // Se a condição for FALSA (resto não é zero), o número é ímpar.
  console.log(`O número ${num} é ímpar.`);
}

// Para testar o número 15 (ímpar), a saída será:
// O número 15 é ímpar.

// Se você mudar 'let num = 15;' para 'let num = 24;', a saída será:
// O número 24 é par.

/**
 * Função que aceita dois números e retorna a soma deles.
 * @param {number} a O primeiro número.
 * @param {number} b O segundo número.
 * @returns {number} A soma de a e b.
 */
function soma(a, b) {
  return a + b;
}

// Exemplos de uso da função:

// 1. Chamando a função com valores fixos
let resultado1 = soma(5, 10);
console.log("A soma de 5 e 10 é: " + resultado1); // Saída: 15

// 2. Chamando a função com outros valores
let resultado2 = soma(25, 7);
console.log("A soma de 25 e 7 é: " + resultado2); // Saída: 32

// 1. Declara a variável 'idade' usando 'let' e a inicializa com o valor 30.
let idade = 30;

// 2. Imprime o valor da variável no console.
console.log(idade);

