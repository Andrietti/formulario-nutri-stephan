'use client'

import { Main } from "next/document";
import React, {useState} from 'react'

export default function formularioInicio() {

    const[mostrarPrimeiraDiv, setMostrarPrimeraDiv] = useState(true);
    const[animacaoKey, setAnimacaoiKey] = useState(0)

    const trocarDivs = (mostrar: boolean) => {
        // console.log("trocando divs")
        setMostrarPrimeraDiv(mostrar);
        setAnimacaoiKey(prevKey => prevKey +1); 
    };

    return (
        <div className="flex min-h-screen w-screen">
            <main className="flex min-h-screen w-screen items-center justify-center flex-col bg-gray-200">

                <div className="flex bg-green-500 h-2/4 w-11/12 mt-10 items-center justify-center rounded-2xl shadow-2xl flex-col">
                    {mostrarPrimeiraDiv?(
                    <div className="div-textos pb-5 ">
                        <h1 key={animacaoKey} className="texto-h1 font-bold text-lg text-center text-gray-200">
                            <span className="typewriter line1">Olá! Seja bem vindo!</span><br />
                            <span className="typewriter line2">Esse formulário pode</span><br />
                            <span className="typewriter line3">levar até 15 minutos</span><br />
                            <span className="typewriter line4">para ser preenchido!</span>
                        </h1>
                    </div>
                    ):
                    (<div h-80 w-80 className="div-textos">
                        <h1 key={animacaoKey + 1} className="texto-h1 font-bold text-lg text-center text-gray-200">
                            <span className="typewriter line1">Mas não desanime!</span><br />
                            <span className="typewriter line2">Isso serve para</span><br />
                            <span className="typewriter line3">Te conhecer melhor</span><br />
                            <span className="typewriter line4">E melhorar sua saúde</span>
                        </h1>
                    </div> )}
                    <div className="div-botoes">
                        <button onClick={() => mostrarPrimeiraDiv? trocarDivs(false) : trocarDivs(true)} className="bg-gradient-to-r from-green-400 to-blue-400 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                            {mostrarPrimeiraDiv ? "Continuar!" : "Vamos lá!"}
                        </button>
                    </div>
                </div>

            </main>9
        </div>
    )
}