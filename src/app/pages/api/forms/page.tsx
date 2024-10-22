'use client'

import React, { useState } from 'react'

export default function FormularioInicio() {

    const [mostrarPrimeiraDiv, setMostrarPrimeraDiv] = useState(true);
    const [animacaoKey, setAnimacaoiKey] = useState(0);

    const trocarDivs = (mostrar: boolean) => {
        setMostrarPrimeiraDiv(mostrar);
        setAnimacaoiKey(prevKey => prevKey + 1);
    };

    return (
        <div className="flex min-h-screen w-screen bg-gradient-to-b from-green-100 to-gray-300">
            <main className="flex min-h-screen w-screen items-center justify-center flex-col">
                {mostrarPrimeiraDiv ? (
                    <div className="div-textos pb-5">
                        <h1 key={animacaoKey} className="font-bold text-xl text-center text-green-600">
                            <span className="typewriter line1">Olá, seja bem-vindo!</span><br />
                            <span className="typewriter line2">Esse formulário pode</span><br />
                            <span className="typewriter line3">levar até 15 minutos</span><br />
                            <span className="typewriter line4">para ser preenchido!</span>
                        </h1>
                    </div>
                ) : (
                    <div className="div-textos">
                        <h1 key={animacaoKey + 1} className="font-bold text-xl text-center text-green-600">
                            <span className="typewriter line1">Mas não desanime!</span><br />
                            <span className="typewriter line2">Isso serve para</span><br />
                            <span className="typewriter line3">te conhecer melhor</span><br />
                            <span className="typewriter line4">e melhorar sua saúde</span>
                        </h1>
                    </div>
                )}
                
                <div className="div-botoes mt-8">
                    <button
                        onClick={() => mostrarPrimeiraDiv ? trocarDivs(false) : trocarDivs(true)}
                        className="bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
                    >
                        {mostrarPrimeiraDiv ? "Continuar!" : "Vamos lá!"}
                    </button>
                </div>
            </main>
        </div>
    );
}