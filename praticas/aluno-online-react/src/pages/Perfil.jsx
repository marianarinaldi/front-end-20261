import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Perfil.css";

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
    <>
      <header className="perfil-header">
        <div>
          <h1>Perfil do Usuário {id}</h1>
          <p className="perfil-subtitle">Atualize suas informações pessoais</p>
        </div>
      </header>

      <section className="perfil-container">
        <article className="perfil-card">
          <h2>Dados Cadastrais</h2>
          <form onSubmit={handleSubmit(salvar)}>
            <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            placeholder="Digite seu nome"
            {...register("nome", regras.nome)}
          />
          {errors?.nome && (
              <p className="field-error">{errors.nome.message}</p>
          )}
            </div>

            <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            {...register("email", regras.email)}
          />
          {errors?.email && (
              <p className="field-error">{errors.email.message}</p>
          )}
            </div>

            <div className="form-group">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            placeholder="Digite seu telefone"
            {...register("telefone", regras.telefone)}
          />
          {errors?.telefone && (
              <p className="field-error">{errors.telefone.message}</p>
          )}
            </div>

            <div className="perfil-actions">
              <button type="submit" className="btn btn-primary">
                Salvar
              </button>
            </div>
          </form>
        </article>
      </section>
    </>
  );
}

export default Perfil;
