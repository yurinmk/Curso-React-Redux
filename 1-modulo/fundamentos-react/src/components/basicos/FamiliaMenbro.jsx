import React from "react";

// import { Container } from './styles';

function FamiliaMenbro(props) {
  return (
    <div>
      {props.nome} <strong>{props.sobrenome}</strong>
    </div>
  );
}

export default FamiliaMenbro;
