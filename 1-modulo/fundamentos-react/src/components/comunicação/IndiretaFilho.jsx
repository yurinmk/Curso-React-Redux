import React from "react";

function IndiretaFilho(props) {
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={() => {
          props.quandoClicar("Yuri", 27, true);
        }}
      >
        Enviar
      </button>
    </div>
  );
}

export default IndiretaFilho;
