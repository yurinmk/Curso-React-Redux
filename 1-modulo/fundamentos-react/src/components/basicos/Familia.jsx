import React from "react";

// import { Container } from './styles';

function Familia(props) {
  return (
    <div>
      {props.children.map((children, index) => {
        return React.cloneElement(children, { ...props, key: index });
      })}
    </div>
  );
}

export default Familia;
