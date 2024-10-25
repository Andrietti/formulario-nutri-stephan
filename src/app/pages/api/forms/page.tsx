'use client'

import React, { useState } from 'react';
import { GiStrongMan } from "react-icons/gi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import InputMask from 'react-input-mask';
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { GiBodyHeight } from "react-icons/gi";

export default function FormularioInicio() {
    const [mostrarPrimeiraDiv, setMostrarPrimeiraDiv] = useState(true);
    const [animacaoKey, setAnimacaoKey] = useState(0);

    const [imagem, setImagem] = useState<string | null>(null);
    const handleImagemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagem(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const trocarDivs = (mostrar: boolean) => {
        setMostrarPrimeiraDiv(mostrar);
        setAnimacaoKey(prevKey => prevKey + 1); // Atualiza a key
    };

    return (
        <div className="flex min-h-screen w-screen bg-black overflow-x-hidden">
            <main className="flex min-h-screen w-full items-center justify-center flex-col">
                {mostrarPrimeiraDiv ? (
                    <div className="div-textos pb-5">
                        <h1 key={`primeiraDiv-${animacaoKey}`} className="font-bold text-xl text-center text-gray-300">
                            <span className="typewriter line1">Olá, seja bem-vindo!</span><br />
                            <span className="typewriter line2">Esse formulário pode</span><br />
                            <span className="typewriter line3">levar até 15 minutos</span><br />
                        </h1>
                    </div>
                ) : (
                    <div className="div-textos w-full flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <label htmlFor="upload" className="cursor-pointer relative">
                                <div
                                    className="flex items-center justify-center w-32 h-32 rounded-full border-4 border-gray-700 bg-gray-200 shadow-lg overflow-hidden"
                                    style={{
                                        backgroundImage: imagem
                                            ? `url(${imagem})`
                                            : 'url(https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/user-profile-icon.png)',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                </div>
                            </label>
                            <input
                                id="upload"
                                type="file"
                                accept="image/*"
                                onChange={handleImagemChange}
                                className="hidden"
                            />
                        </div>

                        <div className="w-full flex flex-col items-center">
                            <h1 key={`terceiraDiv-${animacaoKey}`} className="mt-16 font-bold text-sm text-center text-gray-300">
                                <span className="typewriter line1">Informações pessoais:</span>
                            </h1>

                            {/* Campo de input com o ícone */}
                            <div className="flex items-center justify-center w-full mt-2">
                                <div className="relative flex items-center justify-center w-11/12">
                                    <GiStrongMan className=" absolute left-3 text-gray-500" />
                                    <input
                                        type="text"
                                        name="nome"
                                        placeholder="Nome completo"
                                        className="text-gray-300 outline-none text-sm w-full p-2 pl-10 rounded-lg placeholder-gray-500 shadow-lg"
                                        style={{ backgroundColor: '#0b1014' }}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full mt-2">
                                <div className="relative flex items-center justify-center w-11/12">
                                    <MdOutlineMailOutline className=" absolute left-3 text-gray-500" />
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="E-mail"
                                        className="text-gray-300 outline-none text-sm w-full p-2 pl-10 rounded-lg placeholder-gray-500 shadow-lg"
                                        style={{ backgroundColor: '#0b1014' }}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full mt-2">
                                <div className="relative flex items-center justify-center w-11/12">
                                    <FaMagnifyingGlass className=" absolute left-3 text-gray-500" />
                                    <InputMask
                                        mask="999.999.999-99"
                                        maskChar=""
                                        placeholder="CPF"
                                        className="text-gray-300 outline-none text-sm w-full p-2 pl-10 rounded-lg placeholder-gray-500 shadow-lg"
                                        style={{ backgroundColor: '#0b1014' }}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full mt-2">
                                <div className="relative flex items-center justify-center w-11/12">
                                    <FaRegCalendarAlt className=" absolute left-3 text-gray-500" />
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar=""
                                        placeholder="Data de nascimento"
                                        className="text-gray-300 outline-none text-sm w-full p-2 pl-10 rounded-lg placeholder-gray-500 shadow-lg"
                                        style={{ backgroundColor: '#0b1014' }}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full mt-2">
                                <div className="relative flex items-center justify-center w-11/12">
                                    <MdPhoneIphone className=" absolute left-3 text-gray-500" />
                                    <InputMask
                                        mask="99-999999999"
                                        maskChar=""
                                        placeholder="Número de telefone"
                                        className="text-gray-300 outline-none text-sm w-full p-2 pl-10 rounded-lg placeholder-gray-500 shadow-lg"
                                        style={{ backgroundColor: '#0b1014' }}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full mt-2">
                                <div className="relative flex items-center justify-center w-11/12">
                                    <GiBodyHeight className=" absolute left-3 text-gray-500" />
                                    <InputMask
                                        mask="9,99"
                                        maskChar=""
                                        placeholder="Altura atual"
                                        className="text-gray-300 outline-none text-sm w-full p-2 pl-10 rounded-lg placeholder-gray-500 shadow-lg"
                                        style={{ backgroundColor: '#0b1014' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="div-botoes mt-8">
                    <button
                        onClick={() => trocarDivs(!mostrarPrimeiraDiv)}
                        className="bg-gradient-to-r from-gray-900 to-gray-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
                    >
                        {mostrarPrimeiraDiv ? "Vamos lá!" : "Continuar"}
                    </button>
                </div>
            </main>
        </div>
    );
}