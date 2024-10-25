'use client';

import React, { useState } from 'react';
import 'animate.css'; // Importando Animate.css
import { FaArrowLeft } from 'react-icons/fa'; // Importando o ícone de voltar
import ButtonContinue from '../genericComponents/button_continue';
import ButtonVoltar from '../genericComponents/button_back';

interface Props {
    proximaPagina: () => void;
    voltarPagina: () => void;
}

export default function FormularioInicioSeis({ proximaPagina, voltarPagina }: Props) {
    const [mostrarPrimeiraDiv, setMostrarPrimeraDiv] = useState(true);
    const [animacaoKey, setAnimacaoiKey] = useState(0);

    const trocarDivs = (mostrar: any) => {
        setMostrarPrimeraDiv(mostrar);
        setAnimacaoiKey(prevKey => prevKey + 1);
    };

    return (
        <div className="flex min-h-screen w-full overflow-hidden">
            <main className="animate__animated animate__fadeIn flex min-h-screen w-full items-center justify-center flex-col bg-black"
                style={{ '--animate-duration': '1s' }} // Ajuste de duração
            >
                {/* Ícone de voltar no canto superior esquerdo */}
                <ButtonVoltar voltarPagina={voltarPagina}/>

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

                <ButtonContinue button_event={proximaPagina} />

            </main>
        </div>
    );
}