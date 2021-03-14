import React from "react";

// import { Container } from './styles';

function Aleatorio({ min, max }) {
  const valorAleatório = parseInt(Math.random() * max - min + min);

  return (
    <>
      <div>
        <strong>Valor Mínimo: {min}</strong>
      </div>
      <div>
        <strong>Valor Máximo: {max}</strong>
      </div>
      <div>
        <strong>Valor Sorteado: {valorAleatório}</strong>
      </div>
    </>
  );
}

export default Aleatorio;
