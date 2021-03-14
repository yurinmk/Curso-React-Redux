import alunos from "../../data/alunos";
import React from "react";

function ListaAlunos() {
  const lis = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.nome} -{">"} {aluno.nota}
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyle: "none" }}>{lis}</ul>
    </div>
  );
}

export default ListaAlunos;
