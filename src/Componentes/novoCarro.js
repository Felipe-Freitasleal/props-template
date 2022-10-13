import React from "react";

export function NovoCarro(props) {

  console.log(props.marca)
  console.log(props.cor)
  console.log(props.ano)
  console.log(props.flex)

  return (
    <div>
      <h2>{props.marca}</h2>
      <ul>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
        <li>Adicionado por: {props.adiconadoPor}</li>
      </ul>
    </div>
  );
}