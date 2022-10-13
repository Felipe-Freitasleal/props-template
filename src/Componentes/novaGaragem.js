import React from "react";
import { NovoCarro } from "./novoCarro";

export function NovaGaragem (props){

    return(
        <>
            <h1>Garagem {props.nome}</h1>
            <button onClick={props.apresentacaoGaragem}>Mensagem</button>       
            <NovoCarro 
            marca={"Chevrolet"}
            cor={"Preto"}
            ano={"2005"}
            flex={"Naõ"}
            adiconadoPor={props.nome}
            />
            <NovoCarro 
            marca={"Toyota"}
            cor={"Prata"}
            ano={"2010"}
            flex={"Não"}
            adiconadoPor={props.nome}
            />
            <NovoCarro 
            marca={"Ford"}
            cor={"Prata"}
            ano={"2012"}
            flex={"Sim"}
            adiconadoPor={props.nome}
            />
            <NovoCarro
            marca={"Fiat"}
            cor={"Branco"}
            ano={"2002"}
            flex={"Não"}
            adiconadoPor={props.nome}
            /> 
        </>
    )
}