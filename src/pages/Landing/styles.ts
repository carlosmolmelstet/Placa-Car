import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    width: 100%;

    @media(max-width: 900px) {
        height: 100%;
        background: linear-gradient(180deg, #0096C7 0%, rgba(255, 255, 255, 0) 100%), #48CAE4;
    }
`;

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;

    display: flex;

    @media(max-width: 900px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Aside = styled.div`
    min-height: 100vh;
    max-width: 50vw;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(180deg, #0096C7 0%, rgba(255, 255, 255, 0) 100%), #48CAE4;


    img {
        width: 75%;
    }

    @media(max-width: 900px) {
        order: 2;
        max-width: 100vw;
        width: 100%;
        max-height: 50vh;
        min-height: 50vh;
        background: none;

        img {
            margin-top: -150px;
        }
    }

    @media(max-width: 450px) {
    margin-top: -150px;
    }

    
`;

export const Main = styled.div`
    min-height: 100vh;
    max-width: 50vw;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;


    @media(max-width: 900px) {
        max-width: 100vw;
        max-height: 50vh;
        min-height: 50vh;


        width: 100%;
        order: 1;
        align-items: initial;
        margin-top: 100px;

    }
`;