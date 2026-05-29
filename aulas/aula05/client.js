const url = 'http://localhost:3000/produtos';

async function criar(produto) {
  try{

    const resposta = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(produto),
      headers: {
        'Content-Type': 'application/json'
      }
  
    });

    const dados = await resposta.json();

    return dados;

  }catch(error){
    console.log("Deu erro: " + error.message);
  }
}

async function obter(produto) {
  try{

    const resposta = await fetch(`${url}/${produto.id}`);

    const dados = await resposta.json();

    return dados;

  }catch(error){
      console.log("Deu erro: " + error.message);
  }
}

async function listar() {
  try{

    const resposta = await fetch(url);

    const dados = await resposta.json();

    return dados;

  }catch(error){
    console.log("Deu erro: " + error.message);
  }
}

async function atualizar(produto) {
  try{

    const resposta = await fetch(`${url}/${produto.id}`, {
      method: 'PUT',
      body: JSON.stringify(produto),
      headers: {
        'Content-Type': 'application/json'
      }
  
    });

    const dados = await resposta.json();

    return dados;

  }catch(error){
    console.log("Deu erro: " + error.message);
  }
}

async function excluir(produto) {
  try{

    const resposta = await fetch(`${url}/${produto.id}`, {
      method: 'DELETE'
    });

    const dados = await resposta.json();

    return dados;

  }catch(error){
    console.log("Deu erro: " + error.message);
  }
}

export {criar, obter, listar, atualizar, excluir};