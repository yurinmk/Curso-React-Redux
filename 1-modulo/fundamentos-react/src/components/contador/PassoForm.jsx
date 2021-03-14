import React from "react";

function PassoForm(props) {
  const { passo, setPasso } = props;

  return (
    <div>
      <label htmlFor="passoInput">Passo: </label>
      <input
        id="passoInput"
        type="number"
        value={passo}
        onChange={(valor) => setPasso(parseInt(valor.target.value))}
      />
    </div>
  );
}

export default PassoForm;
