https://onlinegdb.com/uJ-yBmWclZ

// Validação de Compra (Simples)

let saldo_disponivel = 100;
let valor_compra = 75;

if (saldo_disponivel >= valor_compra) {
    let saldo_restante = saldo_disponivel - valor_compra;
    console.log("Compra aprovada! Seu novo saldo é: " + saldo_restante);
} else {
    console.log("Saldo insuficiente. A compra não pode ser realizada.");
}
