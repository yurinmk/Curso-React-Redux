import React from "react";
import DiretaFilho from "./DiretaFilho";

function DiretaPai(props) {
  return (
    <div>
      <DiretaFilho nome="Namikoka" idade={20} nerd={true} />
      <DiretaFilho nome="Kruba" idade={17} nerd={false} />
    </div>
  );
}

export default DiretaPai;
