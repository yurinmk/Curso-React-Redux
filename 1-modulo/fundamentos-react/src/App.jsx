import "./App.css";
import React from "react";

import Card from "./components/layout/Card";

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicação/IndiretaPai";
import DiretaPai from "./components/comunicação/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMenbro from "./components/basicos/FamiliaMenbro";
import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="#12 - Desafio MegaSena" color="#b9006e">
          <Mega qnt={7} />
        </Card>

        <Card titulo="#11 - Contador" color="#424242">
          <Contador numeroInicial={10} />
        </Card>

        <Card titulo="#10 - Componente Controlado (Input)" color="#e45f56">
          <Input />
        </Card>

        <Card titulo="#9 - Comunicação Indireta" color="#8bad39">
          <IndiretaPai />
        </Card>

        <Card titulo="#8 - Comunicação Direta" color="#59323c">
          <DiretaPai />
        </Card>

        <Card titulo="#7 - Rederização Condicional" color="#982395">
          <ParOuImpar numero={20} />
          <UsuarioInfo usuario={{ name: "Yuri Christian" }} />
          <UsuarioInfo />
        </Card>

        <Card titulo="#6 - Tabela Produtos" color="#3a9a">
          <TabelaProdutos />
        </Card>

        <Card titulo="#5 - Repetição Alunos" color="#ff4c65">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#4 - Componente com Filhos" color="#00c8f8">
          <Familia sobrenome="Ferreira">
            <FamiliaMenbro nome="Pedro" />
            <FamiliaMenbro nome="Ana" />
            <FamiliaMenbro nome="Gustavo" />
          </Familia>
        </Card>

        <Card titulo="#3 - Valor Aleatório" color="#FA6900">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#2 - Com Parâmetro" color="#E94C6F">
          <ComParametro
            titulo="Situação do Aluno"
            nome="Yuri Christian"
            nota={9.3}
          />
        </Card>

        <Card titulo="#1 - Desafio Aleatório" color="#E8B71A">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
}

export default App;
