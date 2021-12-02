import { api } from "../../Services/api";
import { Container, SubmitButton } from "./styles";
import { useState } from "react";
import { Table } from "../Table";

export function Dashboard() {
  const [disciplina, setDisciplina ] = useState("");
  const [cargaHoraria, setCargaHoraria] = useState("");
  const [professor, setProfessor] = useState("");

  async function Submitdata() {
    
    const dados = {
      disciplina: disciplina,
      cargahoraria: cargaHoraria,
      professor: professor,
    };

    console.log({ dados });
    await api.post("/faculdade", dados);
  }

  return (
    <Container>
      <form >
        <h1>Cadastrar disciplina</h1>

        <input
          type="text"
          name="disciplinas"
          value={disciplina}
          placeholder="Digite a disciplina"
          onChange={(e) => setDisciplina(e.target.value)}
        />

        <input
          type="text"
          name="cargahoraria"
          value={cargaHoraria}
          placeholder="Digite a carga horaria"
          onChange={(e) => setCargaHoraria(e.target.value)}
        />

        <input
          type="text"
          name="professor"
          value={professor}
          placeholder="Digite o nome do professor"
          onChange={(e) => setProfessor(e.target.value)}
        />
        <SubmitButton  >
        <button onClick={Submitdata}type="submit">
          Enviar
        </button>
        </SubmitButton>
      </form>
      <Table />
    </Container>
  );
}
