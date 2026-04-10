import Tabela from "../components/Tabela";
import Layout from "./Layout";

function Notas () {
    return <Layout 
        titulo="Minhas notas" 
        subtitulo="Historico de notas por semestre">
        <Tabela/>
        <Tabela/>
        <Tabela/>
    </Layout>
}

export default Notas;