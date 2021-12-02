import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../Services/api";

interface IDisciplinas {
  id: string;
  disciplina: string;
  cargahoraria: string;
  professor: string;
}

export function Table() {
  const [disciplinas, setDisciplinas] = useState<IDisciplinas[]>([]);

  async function loadData() {
    const dados = await api.get('/faculdade').then((response) => response.data);
    setDisciplinas(dados);
  }

  useEffect(() => {loadData();},[]);

  function deleteDisciplina(id: string) {
    api.delete("/faculdade/"+id);
    loadData()
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Disciplina</th>
            <th>Carga Horaria</th>
            <th>Professor</th>
          </tr>
        </thead>

        <tbody>
          {disciplinas.map((event) => {
            return (
              <tr key={event.id} className="event">
                <td>{event.disciplina}</td>
                <td>{event.cargahoraria}</td>
                <td>{event.professor}</td>

                <button onClick={() => { deleteDisciplina(event.id)}}>
                  Excluir
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
