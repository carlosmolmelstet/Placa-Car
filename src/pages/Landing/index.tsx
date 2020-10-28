import React from 'react';
import { 
  Container,
  Aside,
  Wrapper,
  Main,
} from './styles';

import landing from '../../images/landing.svg';
import NavBar from '../../components/NavBar';
import Search from '../../components/Search';

const Landing: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Wrapper>
        <Aside>
          <img src={landing} alt=""/>
        </Aside>
        <Main>
          <Search color="#00B4D8" />
        </Main>
      </Wrapper>
    </Container>
  );
}

export default Landing;