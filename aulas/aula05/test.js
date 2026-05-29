import { criar, obter, listar, atualizar, excluir } from './client.js';

async function main() {
  // Criar
  let resposta = await criar({ 
    nome: "banana", 
    preco: 12.50, 
    unidade: "kg"
  });
  console.log("Produto Criado... ", resposta);

  // Listar
  resposta = await listar();
  console.log("produto listado: ", resposta);

  // Obter
  resposta = await obter(resposta[0]);
  console.log("produto consultado: ", resposta);

  // Atualizar
  resposta = await atualizar({
    id: resposta.id, 
    nome: "banana nanica", 
    preco: 19.99, 
    unidade: "g"
  });
  console.log("produto Atualizado: ", resposta);

  // Excluir
  resposta = await excluir(resposta);
  console.log("produto Excluído: ", resposta);
}

main();