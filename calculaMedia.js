function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

// Novos valores: 6, 8 e 9.25
const media = calcularMedia(6, 8, 9.25);
console.log(`A média das notas é: ${media.toFixed(2)}`);
