import { useForm } from "react-hook-form";
import "./RequerimentoForm.css";

function RequerimentoForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Requerimento enviado com sucesso:", data);
    reset();
  };

  return (
    <section className="requerimento-form-section">
      <h2>Novo requerimento</h2>
      <form className="requerimento-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="requerimento-form-group">
          <label htmlFor="tipoRequerimento">Tipo de Requerimento</label>
          <select
            id="tipoRequerimento"
            defaultValue=""
            {...register("tipoRequerimento", {
              required: "O tipo de requerimento é obrigatório.",
            })}
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            <option value="certificado">Certificado</option>
            <option value="historico-escolar">Histórico Escolar</option>
            <option value="dispensa-disciplina">Dispensa de Disciplina</option>
            <option value="transferencia-creditos">
              Transferência de Créditos
            </option>
            <option value="extensao-prazo">Extensão de Prazo</option>
          </select>
          {errors.tipoRequerimento && (
            <p className="requerimento-form-error">
              {errors.tipoRequerimento.message}
            </p>
          )}
        </div>

        <div className="requerimento-form-group">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            rows={5}
            placeholder="Descreva seu requerimento com detalhes"
            {...register("descricao", {
              required: "A descrição é obrigatória.",
              minLength: {
                value: 10,
                message: "A descrição deve ter no mínimo 10 caracteres.",
              },
            })}
          />
          {errors.descricao && (
            <p className="requerimento-form-error">{errors.descricao.message}</p>
          )}
        </div>

        <button type="submit" className="requerimento-form-submit">
          Enviar requerimento
        </button>
      </form>
    </section>
  );
}

export default RequerimentoForm;