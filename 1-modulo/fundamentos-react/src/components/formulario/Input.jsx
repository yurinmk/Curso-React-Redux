import "./Input.css";
import React, { useState } from "react";

function Input(props) {
  const [valor, setValor] = useState("");

  return (
    <div className="Input">
      <input
        value={valor}
        onChangeCapture={(text) => {
          setValor(text.target.value);
        }}
      />
    </div>
  );
}

export default Input;
