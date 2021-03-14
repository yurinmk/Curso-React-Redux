import React from "react";
import If, { Else } from "./if";

function UsuarioInfo(props) {
  const usuario = props.usuario || {};

  return (
    <div>
      <If valor={usuario && usuario.name}>
        Seja Bem vindo <strong>{usuario.name}</strong>!
        <Else valor={usuario && usuario.name}>
          Seja Bem vindo <strong>Amigão</strong>!
        </Else>
      </If>
    </div>
  );
}

export default UsuarioInfo;
