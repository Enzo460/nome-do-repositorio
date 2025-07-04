https://onlinegdb.com/motjsZA_K


// 19. Complete o código em JavaScript onde há (?), que simula o processo
// de envio de mensagens a partir da pontuação de avaliação do candidato.

let avaliacao = 9.5; // Ex: A pontuação de avaliação do candidato (pode ter casa decimal, use ponto ao invés de vírgula).
                    // Usei 9.5 como exemplo, mas pode ser qualquer valor numérico.

if (avaliacao >= 8) { // Incluir a nota de aprovação. Assumindo 8 como a nota mínima para aprovação.
                      // O sinal '>' significa 'maior que'. Para incluir o 8, usamos '>=' (maior ou igual).
    console.log("Você está aprovado. Parabéns!");
} else {
    console.log("Infelizmente você não será contratado."); // Incluir msg da última condição (reprovação).
}
