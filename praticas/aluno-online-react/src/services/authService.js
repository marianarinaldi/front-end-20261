const API_URL = "http://localhost:3000/usuarios";

function gerarToken() {
  const base = `${Date.now()}-${Math.random()}-${crypto.randomUUID()}`;
  return btoa(base);
}

async function entrar(credenciais) {
  const email = (credenciais?.email ?? "").trim().toLowerCase();
  const senha = (credenciais?.senha ?? "").trim();
  const resposta = await fetch(`${API_URL}?email=${encodeURIComponent(email)}`);

  if (!resposta.ok) {
    throw new Error("Não foi possível validar o login.");
  }

  const usuarios = await resposta.json();
  const usuario = usuarios[0];

  if (!usuario || usuario.senha !== senha) {
    throw new Error("Credenciais inválidas.");
  }

  const token = gerarToken();

  return {
    usuario: {
      id: usuario.id,
      nome: usuario.nome ?? "Aluno(a)",
      email: usuario.email,
    },
    token,
  };
}

export { entrar };