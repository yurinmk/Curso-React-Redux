import React from "react";

function Botoes({ incrementar, decrementar }) {
  return (
    <div>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
    </div>
  );
}

export default Botoes;
