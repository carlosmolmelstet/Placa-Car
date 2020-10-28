import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import Search from '../../components/Search';
import {Container, Wrapper, Header, Infos } from './styles';

import carroDesk from '../../images/carro_desk.svg';
import { useParams } from 'react-router-dom';
import api from '../../api';

interface Veiculo {
  modelo: string;
  ano: string;
  cor: string;
  marca: string;
  placa: string;
  dataAtualizacaoRouboFurto: string;

  
}

interface Placa {
  id: string;
  name: string
}



const Placas: React.FC = () => {
  const params = useParams<Placa>();
  const [veiculo, setVeiculo] = useState<Veiculo>();
  
  useEffect(() => {
    api.get(`${params.name}/json`).then(response => {
      setVeiculo(response.data);
    });
  }, [params.name]);
  


  
  if (!veiculo) {

    return (
      <h1>carregando.. </h1>
    );

  } 

  return (
      <Container>
        <NavBar />
        <Wrapper>
          <Header>
              <Search color="#FFF" />
              <Infos>
                <h2>{veiculo.modelo}</h2>
                <ul>
                  <li>PLACA: {veiculo.placa}</li>
                  <li>MARCA: {veiculo.marca}</li>
                  <li>ANO: {veiculo.ano}</li>
                  <li>COR: {veiculo.cor}</li>
                  <li>REGISTRO DE FURTO: {veiculo.dataAtualizacaoRouboFurto}</li>
                </ul>
              </Infos>
          </Header>
        </Wrapper>
          <img className="carroDesk" src={carroDesk} alt=""/>
      </Container>
  );
}

export default Placas;