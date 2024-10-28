'use client';

import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import 'animate.css'; // Importando Animate.css
import { FaArrowLeft } from 'react-icons/fa'; // Importando o ícone de voltar
import ButtonContinue from '../genericComponents/button_continue';
import ButtonVoltar from '../genericComponents/button_back';
import Usuario from '@/app/entities/user';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
    proximaPagina: (user: Usuario) => void;
    voltarPagina: (user: Usuario) => void;
    user: Usuario;
}

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

export default function FormularioInicioUm({ proximaPagina , voltarPagina, user}: Props) {
    const [mostrarPrimeiraDiv, setMostrarPrimeraDiv] = useState(true);
    const { register, handleSubmit, setValue } = useForm<FormData>();
    const [animacaoKey, setAnimacaoiKey] = useState(0);

    const trocarDivs = (mostrar: any) => {
        setMostrarPrimeraDiv(mostrar);
        setAnimacaoiKey(prevKey => prevKey + 1);
    };

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

    return (
        <div className="flex min-h-screen w-full overflow-hidden">
            <main className="animate__animated animate__fadeIn flex min-h-screen w-full items-center justify-center flex-col bg-black"
                style={{ '--animate-duration; ': '1s' }} // Ajuste de duração
            >
                {/* Ícone de voltar no canto superior esquerdo */}
                <ButtonVoltar voltarPagina={handleBackPage}/>

                <img src="/img/maca2.png" alt="Imagem de tireoide" className="w-full h-2/4 object-contain" />

                <div className="flex flex-col items-center mt-4">
                    <h2 className="text-center text-gray-300 text-lg font-semibold">Já passou por cirurgias ou internações? Quais foram?</h2>
                </div>

                <textarea
                    {...register("cirurgies")}
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

                <ButtonContinue button_event={handleSubmit(onSubmit)} />

            </main>
        </div>
    );
}