import React from "react";
import { Carro } from "./Carro";

export function Garagem(props) {
  console.log(props.nome)
  console.log(props.apresentarGaragem)
  return (
    <div>
      <h1>Garagem {props.nome}</h1>
      <button onClick={props.apresentarGaragem}>Mensagem</button>
      <Carro 
      marca={"Chevrolet"}
      cor={"vermelho"}
      ano={"2020"}
      flex={"Sim"}
      adiconadoPor={props.nome}
      />
      <Carro 
      marca={"Toyota"}
      cor={"Preto"}
      ano={"1999"}
      flex={"Não"}
      adiconadoPor={props.nome}
      />
      <Carro 
      marca={"Volksvagem"}
      cor={"Azul"}
      ano={"2015"}
      flex={"Sim"}
      adiconadoPor={props.nome}
      />
      <Carro
      marca={"Fiat"}
      cor={"Verde"}
      ano={"2021"}
      flex={"Sim"}
      adiconadoPor={props.nome}
       />
    </div>
  );
}


