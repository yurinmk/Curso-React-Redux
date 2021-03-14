import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

function IndiretaPai(props) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  }

  return (
    <div>
      <div>Filho: {nome} </div>
      <div>Idade: {idade} </div>
      <div>Nerd: {nerd ? "Verdadeiro" : "False"}</div>
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
}

export default IndiretaPai;
