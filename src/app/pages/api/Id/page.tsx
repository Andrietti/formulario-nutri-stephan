'use client'

import { Main } from "next/document";
import React, { useState } from 'react'
import InputMask from 'react-input-mask';

export default function formularioInicio() {

    const [mostrarPrimeiraDiv, setMostrarPrimeraDiv] = useState(true);
    const [animacaoKey, setAnimacaoiKey] = useState(0)

    const trocarDivs = (mostrar: boolean) => {
        // console.log("trocando divs")
        setMostrarPrimeraDiv(mostrar);
        setAnimacaoiKey(prevKey => prevKey + 1);
    };

    return (
        <div className="flex min-h-screen w-screen">
            <main className="flex min-h-screen w-screen items-center justify-center flex-col bg-gray-200">
                <div className="div-textos ">
                    <h1 key={animacaoKey} className="texto-h1 font-bold text-lg text-center mt-8 mb-4 text-green-500">
                        <span className="typewriter line1">Um pouquinho </span><br />
                        <span className="typewriter line2">sobre você:</span><br />
                    </h1>
                </div>
                <div className="flex bg-green-500 h-3/4 w-11/12 items-center justify-center rounded-2xl shadow-2xl flex-col">
                    <div className="mb-2 text-gray-200 font-bold"> <h1>Informações pessoais</h1></div>                    
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome completo"
                        className="text-black outline-none text-sm w-11/12 p-2 mt-2 rounded-lg placeholder-gray-400"
                        style={{ backgroundColor: 'white', color: 'black' }}
                    />
                    <input
                        type="text"
                        name="e-mail"
                        placeholder="E-mail"
                        className="text-black outline-none text-sm w-11/12 p-2 mt-2 rounded-lg placeholder-gray-400"
                        style={{ backgroundColor: 'white', color: 'black' }}
                    />
                    <InputMask
                        mask="999.999.999-99"
                        maskChar=""
                        placeholder="CPF"
                        className="text-black outline-none text-sm w-11/12 p-2 mt-2 rounded-lg placeholder-gray-400"
                        style={{ backgroundColor: 'white', color: 'black' }}
                    />     
                    <InputMask
                        mask="99-999999999"
                        maskChar=""
                        placeholder="Número de telefone"
                        className="text-black outline-none text-sm w-11/12 p-2 mt-2 rounded-lg placeholder-gray-400"
                        style={{ backgroundColor: 'white', color: 'black' }}
                    />  
                    <input
                        type="text"
                        name="Altura"
                        placeholder="Altura atual"
                        className="text-black outline-none text-sm w-11/12 p-2 mt-2 rounded-lg placeholder-gray-400"
                        style={{ backgroundColor: 'white', color: 'black' }}
                    />
                     <InputMask
                        mask="99/99/9999"
                        maskChar=""
                        placeholder="Data de nascimento"
                        className="text-black outline-none text-sm w-11/12 p-2 mt-2 rounded-lg placeholder-gray-400"
                        style={{ backgroundColor: 'white', color: 'black' }}
                    />  
                     <input
                        type="text"
                        name="CEP"
                        placeholder="CEP"
                        className="text-black outline-none text-sm w-11/12 p-2 mt-2 rounded-lg placeholder-gray-400"
                        style={{ backgroundColor: 'white', color: 'black' }}
                    />
                     <input
                        type="text"
                        name="Ocupação"
                        placeholder="Qual sua ocupação/emprego atual?"
                        className="text-black outline-none text-sm w-11/12 p-2 mt-2 rounded-lg placeholder-gray-400"
                        style={{ backgroundColor: 'white', color: 'black' }}
                    />
                     <input
                        type="text"
                        name="Estado civíl"
                        placeholder="Relacionamento afetivo (casado, namoro, solteiro)"
                        className="text-black outline-none text-sm w-11/12 p-2 mb-4 mt-2 rounded-lg placeholder-gray-400"
                        style={{ backgroundColor: 'white', color: 'black' }}
                    />
                              
                </div>
                <div className="div-botoes mt-3 mb-4">
                        <button onClick={() => mostrarPrimeiraDiv ? trocarDivs(false) : trocarDivs(true)} className="bg-gradient-to-r from-green-400 to-blue-400 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                            {mostrarPrimeiraDiv ? "Continuar!" : "Continuar!"}
                        </button>
                    </div>
            </main >
        </div >
    )
}