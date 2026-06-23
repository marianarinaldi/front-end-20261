const API_URL = "http://localhost:3000/requerimentos";
const CHAVE_TOKEN = "aluno-online-token";

function criarErro401() {
  const erro = new Error("Unauthorized");
  erro.status = 401;
  return erro;
}

function obterToken() {
  const token = localStorage.getItem(CHAVE_TOKEN);

  if (!token) {
    window.dispatchEvent(new Event("auth:unauthorized"));
    throw criarErro401();
  }

  return token;
}

async function listarRequerimentos() {
  const token = obterToken();
  const resposta = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (resposta.status === 401) {
    window.dispatchEvent(new Event("auth:unauthorized"));
    throw criarErro401();
  }

  if (!resposta.ok) {
    throw new Error("Não foi possível listar os requerimentos.");
  }

  return resposta.json();
}

async function cadastrarRequerimento(dados) {
  const token = obterToken();
  const resposta = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

  if (resposta.status === 401) {
    window.dispatchEvent(new Event("auth:unauthorized"));
    throw criarErro401();
  }

  if (!resposta.ok) {
    throw new Error("Não foi possível cadastrar o requerimento.");
  }

  return resposta.json();
}

export { listarRequerimentos, cadastrarRequerimento };
