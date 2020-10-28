import styled from 'styled-components';

export const Nav = styled.div`
    position: absolute;

    height: 100px;
    max-width: 100vw;
    width: 100%;

    padding: 15px;

    img {
        width: 80px;
    }

    @media(max-width: 900px) {
        display: flex;
        justify-content: center;
    }
`;

