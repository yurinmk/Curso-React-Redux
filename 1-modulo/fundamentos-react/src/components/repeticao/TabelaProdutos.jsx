import "./TabelaProdutos.css";
import React from "react";
import produtos from "../../data/produtos";

function ListaProdutos(props) {
  const tds = produtos.map((produto, index) => {
    return (
      <tr key={produto.id} className={index % 2 === 0 ? "Par" : "Impar"}>
        <td>{produto.id}</td>
        <td>{produto.name}</td>
        <td>R$: {produto.price.toFixed(2).replace(".", ",")}</td>
      </tr>
    );
  });

  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{tds}</tbody>
      </table>
    </div>
  );
}

export default ListaProdutos;
