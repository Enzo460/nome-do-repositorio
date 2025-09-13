function buscarProduto(listaDeProdutos, nomeBuscado) {
  for (let i = 0; i < listaDeProdutos.length; i++) {
    if (listaDeProdutos[i].nome === nomeBuscado) {
      return listaDeProdutos[i];
    }
  }
  return null;
}
