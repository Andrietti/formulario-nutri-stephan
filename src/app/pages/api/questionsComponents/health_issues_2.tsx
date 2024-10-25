'use client';

import React, { useState } from 'react';
import 'animate.css'; // Importando Animate.css
import Switch from "react-switch"; // Importe o componente Switch
import { FaArrowLeft } from 'react-icons/fa'; // Importando o ícone de voltar
import ButtonContinue from '../genericComponents/button_continue';
import ButtonVoltar from '../genericComponents/button_back';

interface Props {
    proximaPagina: () => void;
    voltarPagina: () => void;
}

export default function FormularioInicioQuatro({ proximaPagina, voltarPagina }: Props) {
    const [mostrarPrimeiraDiv, setMostrarPrimeraDiv] = useState(true);
    const [animacaoKey, setAnimacaoiKey] = useState(0);

    const [checkboxtrue1, setCheckbox1] = useState(false);
    const [checkboxtrue2, setCheckbox2] = useState(false);
    const [checkboxtrue3, setCheckbox3] = useState(false);
    const [checkboxtrue4, setCheckbox4] = useState(false);
    const [checkboxtrue5, setCheckbox5] = useState(false);

    const valorcheckbox = [checkboxtrue1, checkboxtrue2, checkboxtrue3, checkboxtrue4, checkboxtrue5];
    const setvalorcheckbox = [setCheckbox1, setCheckbox2, setCheckbox3, setCheckbox4, setCheckbox5];
    const doencas = ["Dor de cabeça", "Tontura", "Visão Embaçada", "Perda de equilíbrio", "Sensação de desmaio"];

    const trocarDivs = (mostrar: any) => {
        setMostrarPrimeraDiv(mostrar);
        setAnimacaoiKey(prevKey => prevKey + 1);
    };


    return (
        <div className="flex min-h-screen w-full overflow-hidden"> {/* Ajustado para w-full e overflow-hidden */}
            <main className="animate__animated animate__fadeIn flex min-h-screen w-full items-center justify-center flex-col bg-black"
                style={{ '--animate-duration': '0.5s' }} // Ajuste de duração
            >
                {/* Ícone de voltar no canto superior esquerdo */}
                <ButtonVoltar voltarPagina={voltarPagina}/>

                <img src="/img/banana2.png" alt="Imagem de tireoide" className="w-full h-2/4 object-contain" />

                <div className='flex flex-col items-center mt-2'>
                    <h1 className="text-center text-gray-300 text-lg font-semibold">Sente ou já sentiu algum desses sintomas?</h1>
                </div>

                {/* Container para os checkboxes */}
                <div className="flex flex-col ml-4 mt-4 space-y-1 w-full mb-2 ">
                    {valorcheckbox.map((checkbox, index) => (
                        <div className="flex items-center" key={index}>
                            <Switch
                                onChange={() => setvalorcheckbox[index](!checkbox)}
                                checked={checkbox} // Valor inicial do switch
                                className="react-switch"
                                onColor="#8c8c8c" // Cor quando ligado
                                offColor="#0b1014" // Cor quando desligado
                                uncheckedIcon={false} // Remove o ícone padrão quando desligado
                                checkedIcon={false} // Remove o ícone padrão quando ligado
                                height={20} // Altura do switch
                                width={40} // Largura do switch
                                handleDiameter={16} // Diâmetro do círculo
                            />
                            <label htmlFor="termos" className="ml-2 text-gray-300">
                                {doencas[index]}
                            </label>
                        </div>
                    ))}
                </div>

                {/* Contêiner para a textarea com padding */}
                <div className="flex justify-center w-full px-4 pb-2">
                    <textarea
                        name="detalhes"
                        placeholder="Conte-nos como foi e com qual frequência sente esses sintomas."
                        className="text-gray-300 outline-none text-sm w-full p-1 rounded-lg placeholder-gray-500 shadow-2xl shadow-black"
                        style={{
                            backgroundColor: '#0b1014',
                            minHeight: '50px',
                            resize: 'vertical',
                            textAlign: 'left',
                        }}
                    />
                </div>

                <ButtonContinue button_event={proximaPagina} />

            </main>
        </div>
    );
}