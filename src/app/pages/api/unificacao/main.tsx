'use client'

import Image from "next/image";
import React,{useState} from 'react'
import FormularioCadastro from "../questionsComponents/personal_infos";
import FormularioInicioCinco from "../questionsComponents/energy";
import FormularioInicioQuatro from "../questionsComponents/health_issues_2";
import FormularioInicioTres from "../questionsComponents/health_issues";
import FormularioInicioDois from "../questionsComponents/transplants";
import FormularioInicioUm from "../questionsComponents/cirurgies";
import FormularioId from "../questionsComponents/adress_infos";
export default function CompleteForm() {

  const [paginaExibida, setPaginaExibida] = useState(1)

  const proximaPagina = () => {
    setPaginaExibida(paginaExibida + 1);
  }

  const voltarPagina = () => {
    setPaginaExibida(paginaExibida -1);
  }

  return (
    <div>

      {paginaExibida === 1 && <FormularioCadastro proximaPagina={proximaPagina}/>}
      {paginaExibida === 2 && <FormularioId proximaPagina={proximaPagina} voltarPagina={voltarPagina}/>}
      {paginaExibida === 3 && <FormularioInicioUm proximaPagina={proximaPagina} voltarPagina={voltarPagina}/>}
      {paginaExibida === 4 && <FormularioInicioDois proximaPagina={proximaPagina} voltarPagina={voltarPagina}/>}
      {paginaExibida === 5 && <FormularioInicioTres proximaPagina={proximaPagina} voltarPagina={voltarPagina}/>}
      {paginaExibida === 6 && <FormularioInicioQuatro proximaPagina={proximaPagina} voltarPagina={voltarPagina}/>}
      {paginaExibida === 7 && <FormularioInicioCinco proximaPagina={proximaPagina} voltarPagina={voltarPagina}/>}
    </div>
  );
}
