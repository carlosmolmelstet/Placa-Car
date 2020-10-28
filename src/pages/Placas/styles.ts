import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    width: 100%;

    background: #FAFAFA;

    .carroDesk {
        margin-left: 50%;
        transform: translateX(-50%);
    }

    @media(max-width: 1050px) {
        .carroDesk {
            display: none;
        }
    }

`;

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;

    display: flex;

`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;



    padding: 150px 5%;
    height: 50vh;
    width: 100%;


    background: linear-gradient(180deg, #0096C7 0%, rgba(255, 255, 255, 0) 100%), #48CAE4;

    @media(max-width: 1050px) {
        min-height: 100vh;
        height: 100%;

        display: flex;
        flex-direction: column;
    }
`;

export const Infos = styled.div`
    width: 800px;
    height: 400px;

    margin-top: 150px;


    padding: 30px;
    border-radius: 25px;

    background: #FFF;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.25);

    h2 {
        font-size: 40px;
        color: #00B4D8;
        text-align: center
    }
    

    ul {
        margin-top: 20px;
    } 
    li {
        list-style: none;
        padding: 10px 0;

        font-size: 20px;
        color: #63C6DA;
        font-weight: bold;
        text-transform: uppercase;
    }

    @media(max-width: 1050px) {
        width: 100%;
        margin-top: 80px;
      
    }

    @media(max-width: 650px) {
        
        h2 {
        font-size: 30px;
        }
        
        li {
            font-size: 20px;
        }
    
    }

    @media(max-width: 350px) {

        h2 {
        font-size: 25px;
        }
        
        li {
            font-size: 15px;
        }
    
    }

`;

