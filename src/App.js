import React from "react";
import { Garagem } from "./Componentes/Garagem";
import { NovaGaragem } from "./Componentes/novaGaragem";
import "./styles.css";

export default function App() {
  const nome1 = "Felipe"
  const nome2 = "Laura"
  
  function apresentarGaragem (){
    alert(`Bem-vindo a garagem ${nome1}!`)
  }

  function apresentacaoGaragem (){
    alert(`Bem-vindo a garagem ${nome2}!`)
  }

  return (
    <div className="App">
      <Garagem nome={nome1} apresentarGaragem={apresentarGaragem}/>
      <NovaGaragem nome={nome2} apresentacaoGaragem={apresentacaoGaragem}/>
    </div>
  );
}
