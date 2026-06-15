import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

function Perfil() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const salvar = (data) => console.log("Dados do perfil:", data);

  const regras = {
    nome: {
      required: "Nome é obrigatório",
      minLength: { value: 3, message: "Nome tem no mínimo 3 caracteres" },
      maxLength: { value: 100, message: "Nome tem no máximo 100 caracteres" },
    },
    email: {
      required: "Email é obrigatório",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Email inválido",
      },
    },
    telefone: {
      pattern: {
        value: /^(\(?\d{2}\)?[\s.-]?)?(\d{4,5})[\s.-]?(\d{4})$/,
        message: "Telefone inválido",
      },
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Perfil do Usuário {id}</h1>
      <form onSubmit={handleSubmit(salvar)} style={{ maxWidth: "400px" }}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            placeholder="Digite seu nome"
            {...register("nome", regras.nome)}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
          {errors?.nome && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.nome.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            {...register("email", regras.email)}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
          {errors?.email && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            placeholder="Digite seu telefone"
            {...register("telefone", regras.telefone)}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
          {errors?.telefone && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.telefone.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "var(--accent)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Salvar
        </button>
      </form>
    </div>
  );
}

export default Perfil;
