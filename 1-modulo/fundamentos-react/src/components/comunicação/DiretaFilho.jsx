import React from "react";

function DiretaFilho(props) {
  return (
    <div>
      <span>{props.nome} </span>
      <span>
        <strong>{props.idade} </strong>
      </span>
      <span>{props.nerd ? "Vedadeiro" : "Falso"}!</span>
    </div>
  );
}

export default DiretaFilho;
