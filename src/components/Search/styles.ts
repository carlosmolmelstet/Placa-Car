import styled from 'styled-components';


interface ContainerProps {
    color: string;
  }

export const Container = styled.div<ContainerProps>`
    text-align: center;
    max-width: 900px;
    width: 100%;

    h1 {
        width: 80%;
        margin-left: 10%;

        font-size: 60px;
        color: ${(props) => props.color};

        @media(max-width: 900px) {
            color: #FFF;
        }

        @media(max-width: 450px) {
            font-size: 26px;

        }
    }

`;

export const Btn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    margin-top: 15px;

    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.15));

    input {
        height: 65px;
        width: 70%;
        max-width: 600px;

        background: #FFFFFF;
        border: 2px solid #DEDEDE;
        box-sizing: border-box;
        border-radius: 30px;

        padding: 0 30px;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 300;

        &::placeholder {
        color: #D8D8D8;

        }

        @media(max-width: 400px) {
            font-size: 16px;
            height: 50px;
            border-radius: 22px;

        }

    }

    button {
        height: 65px;

        margin-left: -100px;
        padding: 0 50px;

        background: #00B4D8;
        border: 2px solid #DEDEDE;
        box-sizing: border-box;
        border-radius: 30px;

        color: #FFF;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        text-transform: uppercase;
        border: none;



        @media(max-width: 400px) {
            font-size: 16px;
            padding: 0 10px;

            height: 50px;
            border-radius: 22px;
        }
    }
`;

