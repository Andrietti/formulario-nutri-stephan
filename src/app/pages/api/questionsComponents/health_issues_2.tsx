'use client';

import React, { useEffect, useState } from 'react';
import 'animate.css'; // Importando Animate.css
import Switch from "react-switch"; // Importe o componente Switch
import { FaArrowLeft } from 'react-icons/fa'; // Importando o ícone de voltar
import ButtonContinue from '../genericComponents/button_continue';
import ButtonVoltar from '../genericComponents/button_back';
import Usuario from '@/app/entities/user';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
    proximaPagina: (user: Usuario) => void;
    voltarPagina: (user: Usuario) => void;
    user?: Usuario;
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

export default function FormularioInicioQuatro({ proximaPagina, voltarPagina,user }: Props) {
    const [mostrarPrimeiraDiv, setMostrarPrimeraDiv] = useState(true);
    const [animacaoKey, setAnimacaoiKey] = useState(0);

    const [checkboxtrue1, setCheckbox1] = useState(false);
    const [checkboxtrue2, setCheckbox2] = useState(false);
    const [checkboxtrue3, setCheckbox3] = useState(false);
    const [checkboxtrue4, setCheckbox4] = useState(false);
    const [checkboxtrue5, setCheckbox5] = useState(false);
    const { register, handleSubmit, setValue, getValues} = useForm<FormData>();
    const valorcheckbox = [checkboxtrue1, checkboxtrue2, checkboxtrue3, checkboxtrue4, checkboxtrue5];
    const setvalorcheckbox = [setCheckbox1, setCheckbox2, setCheckbox3, setCheckbox4, setCheckbox5];
    const doencas = ["Dor de cabeça", "Tontura", "Visão Embaçada", "Perda de equilíbrio", "Sensação de desmaio"];

    const trocarDivs = (mostrar: any) => {
        setMostrarPrimeraDiv(mostrar);
        setAnimacaoiKey(prevKey => prevKey + 1);
    };

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data,"<---data no onSubmit")
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

      function onValueChange(checkbox: boolean, index: number) {
        console.log("entrou onValueChangue")
        // Atualiza o estado do checkbox
        setvalorcheckbox[index](!checkbox);
        
        // Recupera o array atual de sintomas
        const currentSintoms = getValues("sintoms") || [];
        
        // Adiciona ou remove o sintoma com base no novo estado do checkbox
        if (!checkbox) { // Se o checkbox estava desligado, então é ligado agora
            if (!currentSintoms.includes(doencas[index])) {
                setValue("sintoms", [...currentSintoms, doencas[index]]);
            }
        } else { // Se o checkbox estava ligado, então é desligado agora
            setValue("sintoms", currentSintoms.filter((item) => item !== doencas[index]));
        }
    
        console.log(getValues("sintoms"), "<----getValue de sintoms no onValueChange");
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
        <div className="flex min-h-screen w-full overflow-hidden"> {/* Ajustado para w-full e overflow-hidden */}
            <main className="animate__animated animate__fadeIn flex min-h-screen w-full items-center justify-center flex-col bg-black"
                style={{ '--animate-duration': '0.5s' }} // Ajuste de duração
            >
                {/* Ícone de voltar no canto superior esquerdo */}
                <ButtonVoltar voltarPagina={handleBackPage}/>

                <img src="/img/banana2.png" alt="Imagem de tireoide" className="w-full h-2/4 object-contain" />

                <div className='flex flex-col items-center mt-2'>
                    <h1 className="text-center text-gray-300 text-lg font-semibold">Sente ou já sentiu algum desses sintomas?</h1>
                </div>

                {/* Container para os checkboxes */}
                <div className="flex flex-col ml-4 mt-4 space-y-1 w-full mb-2 ">
                    {valorcheckbox.map((checkbox, index) => (
                        <div className="flex items-center" key={index}>
                            <Switch
                                onChange={() => { // Atualiza o valor no formulário
                                    onValueChange(checkbox, index)}}
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
                        {...register("sintomsDetails")}
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

                <ButtonContinue button_event={handleSubmit(onSubmit)} />

            </main>
        </div>
    );
}