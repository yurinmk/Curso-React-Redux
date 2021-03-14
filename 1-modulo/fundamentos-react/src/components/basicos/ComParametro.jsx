import React from "react";

export default function ComParametro({ titulo, nome, nota }) {
  const notaFormatada = Math.ceil(nota);
  const situacaoAluno = notaFormatada > 7 ? "Aprovado" : "Reprovado";
  return (
    <div>
      <p>
        Aluno: <strong>{nome}</strong>
      </p>
      <p>
        Nota: <strong>{notaFormatada}</strong>
      </p>
      <p>
        {titulo}: <strong>{situacaoAluno}</strong>
      </p>
    </div>
  );
}
