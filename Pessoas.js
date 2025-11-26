class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// ------------------------------------
// TRECHO DE TESTE ADICIONADO
// ------------------------------------

// 1. Cria uma instância da classe Pessoa
const estudante = new Pessoa("Bruno", 22);

// 2. Chama o método apresentar() dessa instância
console.log("--- Execução do Código ---");
estudante.apresentar();
console.log("--------------------------");
