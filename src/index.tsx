import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import Inicio from "pages/Inicio";
import Cardapio from "pages/Cardapio";

const componenteAtual= window.location.pathname === '/' ? <Inicio/> : <Cardapio/>;

ReactDOM.render(
  <React.StrictMode>
    {componenteAtual}
  </React.StrictMode>,
  document.getElementById('root')
);
