const API_URL = "http://localhost:3000/requerimentos";

async function listarRequerimentos() {
  const resposta = await fetch(API_URL);

  if (!resposta.ok) {
    throw new Error("Não foi possível listar os requerimentos.");
  }

  return resposta.json();
}

async function cadastrarRequerimento(dados) {
  const resposta = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

  if (!resposta.ok) {
    throw new Error("Não foi possível cadastrar o requerimento.");
  }

  return resposta.json();
}

export { listarRequerimentos, cadastrarRequerimento };
