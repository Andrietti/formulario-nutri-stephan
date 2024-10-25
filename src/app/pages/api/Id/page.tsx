'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { FaArrowLeft } from 'react-icons/fa'; // Importando o ícone de voltar
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";

// Definindo a interface para os dados do formulário
interface FormData {
  cep: string;
  address: string;
  addressNumber: string;
  neighborhood: string;
  city: string;
  uf: string;
}

export default function FormularioInicio() {
  const [mostrarPrimeiraDiv, setMostrarPrimeiraDiv] = useState(true);
  const [animacaoKey, setAnimacaoKey] = useState(0);

  const { register, handleSubmit, setValue, setFocus } = useForm<FormData>();

  // Função para tratar o envio do formulário
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  }

  // Função para verificar o CEP
  const checkCEP = (e: React.FocusEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length === 8) { // Apenas busca se o CEP tiver 8 dígitos
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
          if (!data.erro) {
            setValue('address', data.logradouro);
            setValue('neighborhood', data.bairro);
            setValue('city', data.localidade);
            setValue('uf', data.uf);
            setFocus('addressNumber');
          } else {
            alert('CEP não encontrado');
          }
        })
        .catch(err => console.error('Erro ao buscar o CEP', err));
    }
  }

  // Função para alternar entre as divs
  const trocarDivs = (mostrar: boolean) => {
    setMostrarPrimeiraDiv(mostrar);
    setAnimacaoKey(prevKey => prevKey + 1); // Atualiza a key
  };

  // Função para lidar com o clique do botão voltar
  const handleBackClick = () => {
    // Lógica para voltar (pode ser um estado ou navegação)
    console.log("Voltar clicado"); // Placeholder para a lógica de voltar
  };

  return (
    <div className="flex min-h-screen w-screen bg-black overflow-x-hidden">
      <main className="flex min-h-screen w-full items-center justify-center flex-col">

        {/* Ícone de voltar no canto superior esquerdo */}
        <button onClick={handleBackClick} className="absolute top-4 left-4 text-gray-300 hover:text-white transition duration-200">
          <FaArrowLeft size={24} />
        </button>
        <h1 key={`terceiraDiv-${animacaoKey}`} className="mt-16 font-bold text-sm text-center text-gray-300">
                                <span className="typewriter line1">Informações pessoais:</span>
                            </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {/* CEP */}
          <div className="flex items-center justify-center w-full mt-2">
            <div className="w-11/12">
              <InputMask
                mask="99999-999"
                maskChar=""
                placeholder="CEP"
                {...register("cep")}
                onBlur={checkCEP}
                className="text-gray-300 outline-none text-sm w-full p-2 rounded-lg placeholder-gray-500 shadow-lg"
                style={{ backgroundColor: '#0b1014' }}
              />
            </div>
          </div>
          {/* Rua */}
          <div className="flex items-center justify-center w-full mt-2">
            <div className="w-11/12">
              <input
                type="text"
                {...register("address")}
                placeholder="Rua"
                className="text-gray-300 outline-none text-sm w-full p-2 rounded-lg placeholder-gray-500 shadow-lg"
                style={{ backgroundColor: '#0b1014' }}
              />
            </div>
          </div>
          <div className="flex items-center ml-3 justify-center w-11/12 mt-2 space-x-2">
            {/* Número */}
            <input
              type="text"
              {...register("addressNumber")}
              placeholder="Número"
              className="text-gray-300 outline-none text-sm w-full p-2 rounded-lg placeholder-gray-500 shadow-lg"
              style={{ backgroundColor: '#0b1014' }}
            />
            {/* Cidade */}
            <input
              type="text"
              {...register("city")}
              placeholder="Cidade"
              className="text-gray-300 outline-none text-sm w-full p-2 rounded-lg placeholder-gray-500 shadow-lg"
              style={{ backgroundColor: '#0b1014' }}
            />
          </div>
          {/* Bairro */}
          <div className="flex items-center ml-3 justify-center w-11/12 mt-2 space-x-2">
            <input
              type="text"
              {...register("neighborhood")}
              placeholder="Bairro"
              className="text-gray-300 outline-none text-sm w-full p-2 rounded-lg placeholder-gray-500 shadow-lg"
              style={{ backgroundColor: '#0b1014' }}
            />
            {/* Estado */}
            <input
              type="text"
              {...register("uf")}
              placeholder="Estado"
              className="text-gray-300 outline-none text-sm w-full p-2 rounded-lg placeholder-gray-500 shadow-lg"
              style={{ backgroundColor: '#0b1014' }}
            />
          </div>
          {/* Complemento */}
          <div className="flex items-center justify-center w-full mt-2">
            <div className="w-11/12">
              <input
                type="text"
                placeholder="Complemento"
                className="text-gray-300 outline-none text-sm w-full p-2 rounded-lg placeholder-gray-500 shadow-lg"
                style={{ backgroundColor: '#0b1014' }}
              />
            </div>
          </div>

          {/* Traço abaixo do campo "Complemento" */}
          <div className="flex items-center justify-center mb-4 w-full mt-4">
            <div className="w-11/12 h-2 rounded-full" style={{ backgroundColor: '#0b1014' }}></div>
          </div>

          <div className="flex items-center justify-center w-full mt-2">
            <div className="relative flex items-center justify-center w-11/12">
              <MdOutlineWorkOutline className=" absolute left-3 text-gray-500" />
              <input
                type="text"
                name="Ocupação"
                placeholder="Qual sua ocupação/emprego atual?"
                className="text-gray-300 outline-none text-sm w-full p-2 pl-10 rounded-lg placeholder-gray-500 shadow-lg"
                style={{ backgroundColor: '#0b1014' }}
              />
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-2">
            <div className="relative flex items-center justify-center w-11/12">
              <FaRegHeart className=" absolute left-3 text-gray-500" />
              <input
                type="text"
                name="Ocupação"
                placeholder="casado(a), solteiro(a), namoro etc.)?"
                className="text-gray-300 outline-none text-sm w-full p-2 pl-10 rounded-lg placeholder-gray-500 shadow-lg"
                style={{ backgroundColor: '#0b1014' }}
              />
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-2">
            <div className="relative flex items-center justify-center w-11/12">
              <FaRegQuestionCircle  className=" absolute left-3 text-gray-500" />
              <input
                type="text"
                name="Como conheceu meu trabalho?"
                placeholder="Como conheceu meu trabalho?"
                className="text-gray-300 outline-none text-sm w-full p-2 pl-10 rounded-lg placeholder-gray-500 shadow-lg"
                style={{ backgroundColor: '#0b1014' }}
              />
            </div>
          </div>


        </form>

        <div className="div-botoes mt-6 mb-6 space-x-4">
          <button className="bg-gradient-to-r from-gray-900 to-gray-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            Continuar
          </button>
        </div>
      </main>
    </div>
  );
}