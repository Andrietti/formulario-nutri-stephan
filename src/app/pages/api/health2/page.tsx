'use client';

import React, { useState } from 'react';
import 'animate.css'; // Importando Animate.css

export default function formularioInicio() {
    const [mostrarPrimeiraDiv, setMostrarPrimeraDiv] = useState(true);
    const [animacaoKey, setAnimacaoiKey] = useState(0);

    const trocarDivs = (mostrar) => {
        setMostrarPrimeraDiv(mostrar);
        setAnimacaoiKey(prevKey => prevKey + 1);
    };

    return (
        <div className="flex min-h-screen w-full overflow-hidden"> {/* Ajustado para w-full e overflow-hidden */}
            <main className="animate__animated animate__fadeIn flex min-h-screen w-full items-center justify-center flex-col bg-gradient-to-b from-gray-300 to-white"
                style={{ '--animate-duration': '1s' }} // Ajuste de duração
            >
                <div className="div-textos">
                    <h1 key={animacaoKey} className="texto-h1 font-bold text-lg text-center mt-8 mb-4 text-green-500">
                        <span className="typewriter line1">Ainda sobre sua</span><br />
                        <span className="typewriter line2">saúde...</span>
                    </h1>
                </div>
                <div className="flex h-3/4 w-11/12 items-center rounded-2xl shadow-2xl flex-col bg-gradient-to-b from-gray-300 to-gray-400 shadow-black">
                    <img src="/img/Tireoide.png" alt="Imagem de tireoide" className="w-48 h-48 object-contain" />

                    <div className='flex flex-col items-center mt-4'>
                        <h1 className="text-center text-gray-700">Já teve alteração em algum órgão ou sistema?</h1>
                    </div>

                    {/* Container para os checkboxes */}
                    <div className="flex flex-col ml-4 mt-4 space-y-2 w-full">
                        <div className="flex items-center">
                            <input type="checkbox" id="termos" className="h-4 w-4 text-white" />
                            <label htmlFor="termos" className="ml-2 text-gray-700">tireóide</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="aviso" className="h-4 w-4 text-white" />
                            <label htmlFor="aviso" className="ml-2 text-gray-700">alteração na pressão</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="historico" className="h-4 w-4 text-white" />
                            <label htmlFor="historico" className="ml-2 text-gray-700">diabétes</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="outro" className="h-4 w-4 text-white" />
                            <label htmlFor="outro" className="ml-2 text-gray-700">Fígado</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="outro" className="h-4 w-4 text-white" />
                            <label htmlFor="outro" className="ml-2 text-gray-700">Outro</label>
                        </div>
                    </div>

                    {/* Contêiner para a textarea com padding */}
                    <div className="flex justify-center w-full px-4 pb-4">
                        <textarea
                            name="detalhes"
                            placeholder="Escreva aqui..."
                            className="text-black outline-none text-sm w-full p-2 rounded-lg placeholder-gray-300 shadow-2xl shadow-black"
                            style={{
                                backgroundColor: '#9ca3af',
                                color: 'white',
                                minHeight: '30px', // Ajuste a altura mínima
                                resize: 'vertical', // Permitir redimensionar verticalmente
                                textAlign: 'left' // Alinhamento à esquerda
                            }}
                        />
                    </div>
                </div>

                <div className="div-botoes mt-3 mb-4 space-x-14">
                    <button className="bg-gradient-to-r from-green-200 to-green-500 text-white font-bold py-2 px-4 rounded-full shadow-black shadow-lg hover:shadow-gray-500 transform hover:scale-105 transition duration-500 ease-in-out">
                        Voltar
                    </button>

                    <button className="bg-gradient-to-r from-green-200 to-green-500 text-white font-bold py-2 px-4 rounded-full shadow-black shadow-lg hover:shadow-gray-500 transform hover:scale-105 transition duration-500 ease-in-out">
                        Continuar
                    </button>
                </div>
            </main>
        </div>
    );
}