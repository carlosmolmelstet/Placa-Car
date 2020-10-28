import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { Btn, Container } from './styles';

// import { Link } from 'react-router-dom';

interface ContainerProps {
  color: string;
}

interface Placa {
  name: string;
}

const Search: React.FC<ContainerProps> = ({color}) => {
  const [placa, setPlaca] = useState<Placa>({} as Placa);
    
        
  const handleChange = useCallback(
      (e: React.FormEvent<HTMLInputElement>) => {
          setPlaca({
              ...placa,
              [e.currentTarget.name]: e.currentTarget.value,
          });
      },
      [placa]
  );

  const placaNumero = placa.name;


  return (
    <Container color={color}>
      <h1 >PESQUISE A PLACA DE UM VEICULO</h1>
     <Btn>
       <input onChange={handleChange}  name="name"  placeholder="EX: ATJ8617" type="text"/>
       <Link style={{ textDecoration: 'none' }}  to={`/veiculo/${placaNumero}`}>
         <button>pesquisar</button>
       </ Link>
     </Btn>
    </Container>
  );
}

export default Search;