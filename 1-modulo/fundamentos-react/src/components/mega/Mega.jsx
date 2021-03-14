import "./Mega.css";
import React, { useState } from "react";

function Mega(props) {
  const [qnt, setQnt] = useState(props.qnt || 6);
  const [numeros, setNumeros] = useState(Array(qnt).fill(0));

  function gerarNumeroAleatorio(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(aleatorio)
      ? gerarNumeroAleatorio(min, max, array)
      : aleatorio;
  }

  function gerarNumeros(qnt) {
    const numeros = Array(qnt)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroAleatorio(1, 60, nums);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2);
    return numeros;
  }

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numeros.join(" ")}</h3>

      <div>
        <label>QNT de Números: </label>
        <input
          type="number"
          value={qnt}
          onChange={(valor) => setQnt(parseInt(valor.target.value))}
        />
      </div>

      <br />
      <button onClick={() => setNumeros(gerarNumeros(qnt))}>
        Gerar Números
      </button>
    </div>
  );
}

export default Mega;
