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
import  Usuario  from '../../../entities/user'
export default function CompleteForm() {

  const [paginaExibida, setPaginaExibida] = useState(1)
  const [usuario, setUsuario] = useState(new Usuario());
  /*
  {
    nome: "Cafézinho",
    email: "",
    cpf: "",...
  }
  */
  function proximaPagina(user: Usuario){
    setUsuario(user)
    setPaginaExibida(paginaExibida + 1);
  }

  function voltarPagina(user: Usuario){
    setUsuario(user)
    setPaginaExibida(paginaExibida -1 );
  }

  return (
    <div>

      {paginaExibida === 1 && <FormularioCadastro proximaPagina={proximaPagina} user={usuario}/>}
      {paginaExibida === 2 && <FormularioId proximaPagina={proximaPagina} voltarPagina={voltarPagina} user={usuario}/>}
      {paginaExibida === 3 && <FormularioInicioUm proximaPagina={proximaPagina} voltarPagina={voltarPagina} user={usuario}/>}
      {/* {paginaExibida === 4 && <FormularioInicioDois proximaPagina={proximaPagina} voltarPagina={voltarPagina}/>}
      {paginaExibida === 5 && <FormularioInicioTres proximaPagina={proximaPagina} voltarPagina={voltarPagina}/>}
      {paginaExibida === 6 && <FormularioInicioQuatro proximaPagina={proximaPagina} voltarPagina={voltarPagina}/>}
      {paginaExibida === 7 && <FormularioInicioCinco proximaPagina={proximaPagina} voltarPagina={voltarPagina}/>}  */}
    </div>
  );
}
