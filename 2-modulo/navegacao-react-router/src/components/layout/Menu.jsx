import "./Menu.css";
import React from "react";

import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <aside className="Menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/param/123">Param #1</Link>
          </li>
          <li>
            <Link to="/param/ola">Param #2</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;
