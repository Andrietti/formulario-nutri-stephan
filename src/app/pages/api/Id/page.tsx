'use client'

import React, { useState } from 'react'
import InputMask from 'react-input-mask';
import 'animate.css'; // Importando Animate.css

export default function FormularioInicio() {

    const [mostrarPrimeiraDiv, setMostrarPrimeraDiv] = useState(true);
    const [animacaoKey, setAnimacaoiKey] = useState(0)

    const trocarDivs = (mostrar: boolean) => {
        setMostrarPrimeraDiv(mostrar);
        setAnimacaoiKey(prevKey => prevKey + 1);
    };

    return (
        <div className="flex min-h-screen w-screen">
            <main className="animate__animated animate__fadeIn flex min-h-screen w-screen items-center justify-center flex-col bg-gradient-to-b from-green-100 to-white">
                <div className="div-textos">
                    <h1 key={animacaoKey} className="font-bold text-xl text-center mt-8 mb-4 text-green-600">
                        <span className="typewriter">Um pouquinho</span><br />
                        <span className="typewriter">sobre você:</span><br />
                    </h1>
                </div>
                
                <div className="flex h-3/4 w-11/12 items-center justify-center rounded-2xl shadow-2xl flex-col bg-gradient-to-b from-green-200 to-green-300 shadow-black">
                    <div className="mb-2 text-gray-700 font-bold"> <h1>Informações pessoais.</h1></div>

                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome completo"
                        className="text-gray-700 outline-none text-sm w-11/12 p-2 mt-2 rounded-lg placeholder-gray-500 shadow-lg"
                        style={{ backgroundColor: '#FFFFFF' }}
                    />
                    <input
                        type="text"
                        name="e-mail"
                        placeholder="E-mail"
                        className="text-gray-700 outline-none text-sm w-11/12 p-2 mt-2 rounded-lg placeholder-gray-500 shadow-lg"
                        style={{ backgroundColor: '#FFFFFF' }}
                    />
                    <InputMask
                        mask="999.999.999-99"
                        maskChar=""
                        placeholder="CPF"
                        className="text-gray-700 outline-none text-sm w-11/12 p-2 mt-2 rounded-lg placeholder-gray-500 shadow-lg"
                        style={{ backgroundColor: '#FFFFFF' }}
                    />
                    <InputMask
                        mask="99-999999999"
                        maskChar=""
                        placeholder="Número de telefone"
                        className="text-gray-700 outline-none text-sm w-11/12 p-2 mt-2 rounded-lg placeholder-gray-500 shadow-lg"
                        style={{ backgroundColor: '#FFFFFF' }}
                    />
                    <InputMask
                        mask="9,99"
                        maskChar=""
                        placeholder="Altura"
                        className="text-gray-700 outline-none text-sm w-11/12 p-2 mt-2 rounded-lg placeholder-gray-500 shadow-lg"
                        style={{ backgroundColor: '#FFFFFF' }}
                    />
                    <InputMask
                        mask="99/99/9999"
                        maskChar=""
                        placeholder="Data de nascimento"
                        className="text-gray-700 outline-none text-sm w-11/12 p-2 mt-2 rounded-lg placeholder-gray-500 shadow-lg"
                        style={{ backgroundColor: '#FFFFFF' }}
                    />
                    <InputMask
                        mask="99999-999"
                        maskChar=""
                        placeholder="CEP"
                        className="text-gray-700 outline-none text-sm w-11/12 p-2 mt-2 rounded-lg placeholder-gray-500 shadow-lg"
                        style={{ backgroundColor: '#FFFFFF' }}
                    />
                    <input
                        type="text"
                        name="Ocupação"
                        placeholder="Qual sua ocupação/emprego atual?"
                        className="text-gray-700 outline-none text-sm w-11/12 p-2 mt-2 rounded-lg placeholder-gray-500 shadow-lg"
                        style={{ backgroundColor: '#FFFFFF' }}
                    />
                    <input
                        type="text"
                        name="Estado civil"
                        placeholder="Relacionamento afetivo (casado, namoro, solteiro)"
                        className="text-gray-700 outline-none text-sm w-11/12 p-2 mb-4 mt-2 rounded-lg placeholder-gray-500 shadow-lg"
                        style={{ backgroundColor: '#FFFFFF' }}
                    />
                </div>
                
                <div className="div-botoes mt-4 mb-6">
                    <button className="bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                        Continuar!
                    </button>
                </div>
            </main>
        </div>
    )
}