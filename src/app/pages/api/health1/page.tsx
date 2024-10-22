'use client';

import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import 'animate.css'; // Importando Animate.css

export default function FormularioInicio() {
    const [mostrarPrimeiraDiv, setMostrarPrimeraDiv] = useState(true);
    const [animacaoKey, setAnimacaoiKey] = useState(0);

    const trocarDivs = (mostrar) => {
        setMostrarPrimeraDiv(mostrar);
        setAnimacaoiKey(prevKey => prevKey + 1);
    };

    return (
        <div className="flex min-h-screen w-screen">
            <main className="animate__animated animate__fadeIn flex min-h-screen w-screen items-center justify-center flex-col bg-gradient-to-b from-green-100 to-white"
                style={{ '--animate-duration': '1s' }} // Ajuste de duração
            >
                <div className="div-textos ">
                    <h1 key={animacaoKey} className="font-bold text-xl text-center mt-8 mb-4 text-green-700">
                        <span className="typewriter">Sobre sua saúde:</span><br />
                    </h1>
                </div>
                
                <img src="/img/Cirurgia.png" alt="Imagem de Cirurgia" className="w-40 h-40 object-contain mt-4" />

                <div className="flex flex-col items-center mt-4">
                    <h1 className="text-center typewrite text-green-700 text-lg font-bold">Já passou por cirurgias ou internações? Quais foram?</h1>
                </div>

                <textarea
                    name="detalhes"
                    placeholder="Escreva aqui..."
                    className="text-gray-800 outline-none text-sm w-11/12 p-3 mt-6 rounded-lg placeholder-gray-400 shadow-lg"
                    style={{
                        backgroundColor: '#D1FAE5',
                        color: '#374151',
                        minHeight: '120px',
                        resize: 'vertical',
                        textAlign: 'left',
                    }}
                />

                <div className="div-botoes mt-6 mb-6 space-x-10">
                    <button className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                        Voltar
                    </button>

                    <button className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                        Continuar
                    </button>
                </div>
            </main>
        </div>
    );
}