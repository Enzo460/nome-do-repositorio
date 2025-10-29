https://onecompiler.com/javascript/443493v9t

// 🛠️ Sistema de cadastro de clientes usando Array, Set e Map

// Aviso inicial
alert("Bem-vindo ao sistema de cadastro de clientes!\nVocê fará 10 cadastros para cada tipo de dado.");

// ---------- LISTA DE NOMES (Array) ----------
let listaNomes = [];

for (let i = 0; i < 10; i++) {
  let nome = prompt(`Digite o nome do cliente ${i + 1}:`);
  listaNomes.push(nome);
}

// ---------- CONJUNTO DE E-MAILS (Set) ----------
let conjuntoEmails = new Set();

for (let i = 0; i < 10; i++) {
  let email = prompt(`Digite o e-mail do cliente ${i + 1}:`);
  conjuntoEmails.add(email); // Set ignora duplicatas automaticamente
}

// ---------- MAPA DE TELEFONES POR ID (Map) ----------
let mapaTelefones = new Map();

for (let i = 0; i < 10; i++) {
  let id = prompt(`Digite o ID do cliente ${i + 1}:`);
  let telefone = prompt(`Digite o telefone do cliente ${i + 1}:`);
  mapaTelefones.set(id, telefone);
}

// ---------- EXIBIÇÃO DOS DADOS ----------
console.log("📋 Lista de Nomes Cadastrados:");
listaNomes.forEach((nome, index) => {
  console.log(`${index + 1}. ${nome}`);
});

console.log("\n📧 Conjunto de E-mails Únicos:");
let contadorEmail = 1;
conjuntoEmails.forEach(email => {
  console.log(`${contadorEmail++}. ${email}`);
});

console.log("\n📞 Mapa de Telefones por ID:");
mapaTelefones.forEach((telefone, id) => {
  console.log(`ID: ${id} → Telefone: ${telefone}`);
});

console.log("\n✅ Cadastro finalizado com sucesso!");
