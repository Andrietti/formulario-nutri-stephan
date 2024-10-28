'use client';

import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { FaArrowLeft } from 'react-icons/fa'; // Importando o ícone de voltar
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import ButtonContinue from '../genericComponents/button_continue';
import ButtonVoltar from '../genericComponents/button_back';
import Usuario from '../../../entities/user'


// Definindo a interface para os dados do formulário
interface FormData {
  nome: string;
  email: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
  altura: string;
  cep: string;
  address: string;
  addressNumber: string;
  neighborhood: string;
  city: string;
  uf: string;
  cirurgies: string;
  sickness: string;
  transplants: string[];
  transplantsDetails: string;
  sintoms: string[];
  sintomsDetails: string;
  energy: string;
}

interface Props {
  proximaPagina: (user: Usuario) => void;
  voltarPagina: (user: Usuario) => void;
  user?: Usuario;
}

export default function FormularioId({ proximaPagina, voltarPagina, user }: Props) {
  const [mostrarPrimeiraDiv, setMostrarPrimeiraDiv] = useState(true);
  const [animacaoKey, setAnimacaoKey] = useState(0);

  const { register, handleSubmit, setValue, setFocus } = useForm<FormData>();

  // Função para tratar o envio do formulário
  const onSubmit: SubmitHandler<FormData> = (data) => {
    const usuario = new Usuario(
      data.nome,
      data.email,
      data.cpf,
      data.dataNascimento,
      data.telefone,
      data.altura,
      data.cep,
      data.address,
      data.addressNumber,
      data.neighborhood,
      data.city,
      data.uf,
      data.cirurgies,
      data.transplants,
      data.transplantsDetails,
      data.sintoms,
      data.sintomsDetails,
      data.energy,
      data.sickness,
    );
    proximaPagina(usuario);
  }

  useEffect(() => {
    if (user) {
      setValue('nome', user.getNome());
      setValue('email', user.getEmail());
      setValue('cpf', user.getCpf());
      setValue('dataNascimento', user.getDataNascimento());
      setValue('telefone', user.getTelefone());
      setValue('altura', user.getAltura());
      setValue('cep', user.getCep());
      setValue('address', user.getAddress());
      setValue('addressNumber', user.getAddressNumber());
      setValue('neighborhood', user.getNeighborhood());
      setValue('city', user.getCity());
      setValue('uf', user.getUf());
      setValue('cirurgies', user.getCirurgies());
      setValue('transplants', user.getTransplants());
      setValue('transplantsDetails', user.getTransplantsDetails());
      setValue('sintoms', user.getSintoms());
      setValue('sintomsDetails', user.getSintomsDetails());
      setValue('energy', user.getEnergy());
      setValue('sickness', user.getSickness());

    }
  }, [user]);


  function handleBackPage() {
    let data: any = '';

    data = user;
    if (!user) {
      data = new Usuario(
        nome,
        email,
        cpf,
        dataNascimento,
        telefone,
        altura,
        cep,
        address,
        addressNumber,
        neighborhood,
        city,
        uf,
        cirurgies,
        transplants,
        transplantsDetails,
        sintoms,
        sintomsDetails,
        energy,
        sickness
      )
    }
    voltarPagina(data)
  }

  const [nome, setNome] = useState(user?.getNome() || "");
  const [email, setEmail] = useState(user?.getEmail() || "");
  const [cpf, setCpf] = useState(user?.getCpf() || "");
  const [dataNascimento, setDataNascimento] = useState(user?.getDataNascimento() || "");
  const [telefone, setTelefone] = useState(user?.getTelefone() || "");
  const [altura, setAltura] = useState(user?.getAltura() || "");
  const [cep, setCep] = useState(user?.getCep() || "");
  const [address, setAddress] = useState(user?.getAddress() || "");
  const [addressNumber, setAddressNumber] = useState(user?.getAddressNumber() || "");
  const [neighborhood, setNeighborhood] = useState(user?.getNeighborhood() || "");
  const [city, setCity] = useState(user?.getCity() || "");
  const [uf, setUf] = useState(user?.getUf() || "");
  const [cirurgies, setCirurgies] = useState(user?.getCirurgies() || "")
  const [transplants, setTransplants] = useState(user?.getTransplants() || [])
  const [transplantsDetails, setTransplantsDetails] = useState(user?.getTransplantsDetails() || "")
  const [sickness, setSickness] = useState(user?.getSickness() || "");
  const [sintoms, setSintoms] = useState(user?.getSintoms() || []);
  const [sintomsDetails, setSintomsDetails] = useState(user?.getSintomsDetails() || "");
  const [energy, setEnergy] = useState(user?.getEnergy() || "");

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

  useEffect(() => {
    if (user) {
      setValue('nome', user.getNome());
      setValue('email', user.getEmail());
      setValue('cpf', user.getCpf());
      setValue('dataNascimento', user.getDataNascimento());
      setValue('telefone', user.getTelefone());
      setValue('altura', user.getAltura());
      setValue('cep', user.getCep());
      setValue('address', user.getAddress());
      setValue('addressNumber', user.getAddressNumber());
      setValue('neighborhood', user.getNeighborhood());
      setValue('city', user.getCity());
      setValue('uf', user.getUf());
      setValue('cirurgies', user.getCirurgies());
      setValue('transplants', user.getTransplants());
      setValue('transplantsDetails', user.getTransplantsDetails());
      setValue('sintoms', user.getSintoms());
      setValue('sintomsDetails', user.getSintomsDetails());
      setValue('energy', user.getEnergy());
      setValue('sickness', user.getSickness());
    }
  }, [user]);


  return (
    <div className="flex min-h-screen w-screen bg-gray-800 overflow-x-hidden">
      <main className="flex min-h-screen w-full items-center justify-center flex-col">

        <ButtonVoltar voltarPagina={handleBackPage} />
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
              <FaRegQuestionCircle className=" absolute left-3 text-gray-500" />
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

        <ButtonContinue button_event={handleSubmit(onSubmit)} />

      </main>
    </div>
  );
}