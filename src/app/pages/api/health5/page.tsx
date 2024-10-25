'use client';

import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import 'animate.css'; // Importando Animate.css
import { FaArrowLeft } from 'react-icons/fa'; // Importando o ícone de voltar

export default function FormularioInicio() {
    const [mostrarPrimeiraDiv, setMostrarPrimeraDiv] = useState(true);
    const [animacaoKey, setAnimacaoiKey] = useState(0);

    const trocarDivs = (mostrar) => {
        setMostrarPrimeraDiv(mostrar);
        setAnimacaoiKey(prevKey => prevKey + 1);
    };

    const handleBackClick = () => {
        // Lógica para voltar (pode ser um estado ou navegação)
        console.log("Voltar clicado"); // Placeholder para a lógica de voltar
    };

    return (
        <div className="flex min-h-screen w-full overflow-hidden">
            <main className="animate__animated animate__fadeIn flex min-h-screen w-full items-center justify-center flex-col bg-black"
                style={{ '--animate-duration; ': '1s' }} // Ajuste de duração
            >         
                {/* Ícone de voltar no canto superior esquerdo */}
                <button onClick={handleBackClick} className="absolute top-4 left-4 text-gray-300 hover:text-white transition duration-200">
                    <FaArrowLeft size={24} />
                </button>

                <img src="/img/laranja.png" alt="Imagem de tireoide" className="w-full h-2/4 object-contain" />

                <div className="flex flex-col items-center mt-4">
                    <h2 className="text-center text-gray-300 text-lg font-semibold">Ao longo do dia, você tem energia e sente disposição para realizar suas atividades?</h2>
                </div>

                <textarea
                    name="detalhes"
                    placeholder="Escreva aqui..."
                    className="text-gray-300 outline-none text-sm w-11/12 p-3 mt-6 rounded-md placeholder-gray-500 shadow-md"
                    style={{
                        backgroundColor: '#0b1014', // Fundo preto-prata
                        color: '#D1D1D1', // Texto em tom prata
                        minHeight: '120px',
                        resize: 'vertical',
                        textAlign: 'left',
                    }}
                />

                <div className="div-botoes mt-6 mb-6 space-x-4">
                    
                    <button className="bg-gradient-to-r from-gray-900 to-gray-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                        Continuar
                    </button>
                </div>
            </main>
        </div>
    );
}