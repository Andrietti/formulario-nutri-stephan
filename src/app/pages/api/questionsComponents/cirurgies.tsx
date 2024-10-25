'use client';

import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import 'animate.css'; // Importando Animate.css
import { FaArrowLeft } from 'react-icons/fa'; // Importando o ícone de voltar
import ButtonContinue from '../genericComponents/button_continue';
import ButtonVoltar from '../genericComponents/button_back';

interface Props {
    proximaPagina: () => void;
    voltarPagina: () => void;
}

export default function FormularioInicioUm({ proximaPagina , voltarPagina}: Props) {
    const [mostrarPrimeiraDiv, setMostrarPrimeraDiv] = useState(true);
    const [animacaoKey, setAnimacaoiKey] = useState(0);

    const trocarDivs = (mostrar: any) => {
        setMostrarPrimeraDiv(mostrar);
        setAnimacaoiKey(prevKey => prevKey + 1);
    };


    return (
        <div className="flex min-h-screen w-full overflow-hidden">
            <main className="animate__animated animate__fadeIn flex min-h-screen w-full items-center justify-center flex-col bg-black"
                style={{ '--animate-duration; ': '1s' }} // Ajuste de duração
            >
                {/* Ícone de voltar no canto superior esquerdo */}
                <ButtonVoltar voltarPagina={voltarPagina}/>

                <img src="/img/maca2.png" alt="Imagem de tireoide" className="w-full h-2/4 object-contain" />

                <div className="flex flex-col items-center mt-4">
                    <h2 className="text-center text-gray-300 text-lg font-semibold">Já passou por cirurgias ou internações? Quais foram?</h2>
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

                <ButtonContinue button_event={proximaPagina} />

            </main>
        </div>
    );
}