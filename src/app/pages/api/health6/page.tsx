'use client';

import React, { useState } from 'react';
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
                style={{ '--animate-duration': '1s' }} // Ajuste de duração
            >         
                {/* Ícone de voltar no canto superior esquerdo */}
                <button onClick={handleBackClick} className="absolute top-4 left-4 text-gray-300 hover:text-white transition duration-200">
                    <FaArrowLeft size={24} />
                </button>

                <img src="/img/melancia.png" alt="Imagem de tireoide" className="w-full h-2/4 object-contain" />

                <div className="flex flex-col items-center mt-4">
                    <h2 className="text-center text-gray-300 text-lg font-semibold">
                        Quantas vezes por mês consome bebida alcoólica? Se sim, que tipo e quantidade?
                    </h2>
                </div>

                {/* Campo select com estilo padronizado */}
                <div className="flex flex-col items-center mt-4 w-full">
                    <select 
                        name="consumo" 
                        id="consumo" 
                        className="text-gray-300 outline-none text-sm w-11/12 p-3 rounded-lg placeholder-gray-500 shadow-md bg-[#0b1014]"
                    >
                        <option value="nao-bebo-nao-fumo">Não bebo e não fumo</option>
                        <option value="bebo-2x-na-semana-nao-fumo">Bebo até 2x na semana e não fumo</option>
                        <option value="bebo-5x-na-semana-nao-fumo">Bebo até 5x na semana e não fumo</option>
                        <option value="bebo-todos-os-dias-nao-fumo">Bebo todos os dias e não fumo</option>
                        <option value="nao-bebo-fumo-2x-na-semana">Não bebo e fumo até 2x na semana</option>
                        <option value="nao-bebo-fumo-todos-os-dias">Não bebo e fumo até 5x na semana</option>
                        <option value="nao-bebo-fumo-todos-os-dias">Não bebo e fumo todos os dias</option>
                        <option value="bebo-fumo-2x-na-semana">Bebo e fumo até 2x na semana</option>
                        <option value="bebo-fumo-5x-na-semana">Bebo e fumo até 5x na semana</option>
                        <option value="bebo-fumo-todos-os-dias">Bebo e fumo todos os dias</option>
                    </select>
                </div>

                {/* Campo de texto */}
                <textarea
                    name="detalhes"
                    placeholder="Escreva aqui..."
                    className="text-gray-300 outline-none text-sm w-11/12 p-3 mt-6 rounded-md placeholder-gray-500 shadow-md"
                    style={{
                        backgroundColor: '#0b1014', // Fundo preto-prata
                        color: '#D1D1D1', // Texto em tom prata
                        minHeight: '50px',
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