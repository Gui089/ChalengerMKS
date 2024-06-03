import styled from 'styled-components';

export const UlProduct = styled.ul`
    list-style: none;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`;

export const LiProduct = styled.li`
    display: flex;
    background-color: white;
    width: 100%;
    max-width: 385px;
    height: 101px;
    border-radius: 8px;
    margin: 20px;
    justify-content: space-around;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        width: 85%;
        margin-left: 75px;
    }
`;

export const ButtonClose = styled.button`
    position: absolute;
    border: none;
    border-radius: 50%;
    padding: 10px;
    background-color: black;
    color: white;
    cursor: pointer;
    right: 22px;
    top: 10px;
    margin-top: 36px;

    @media (max-width: 768px) {
        right:15px
    }
`;

export const TitleCart = styled.h1`
    width: 180px;
    font-family: sans-serif;
    color: white;
    font-weight: 700;
    line-height: 33px;
    margin-top: 36px;
    margin-left: 47px;

    @media (max-width: 768px) {
        width: auto;
        margin-left: 20px;
        text-align: center;
    }
`;

export const Paragraph = styled.p`
    font-family: sans-serif;
    font-weight: 400;
    color: #2C2C2C;
    width: 113px;
    margin-right: 15px;

    @media (max-width: 768px) {
        width: auto;
        margin-right: 10px;
    }
`;

export const ParagraphPrice = styled.p`
    font-family: sans-serif;
    font-weight: bold;
    margin-right: 15px;

    @media (max-width: 768px) {
        margin-right: 10px;
    }
`;

export const ButtonDelete = styled.button`
    background-color: black;
    color: white;
    border: none;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    position: absolute;
    right: 30px;
    margin-bottom: 100px;
    cursor: pointer;

    @media (max-width: 768px) {
        right: 5px;

    }
`;

export const ButtonBuyItem = styled.button`
    width: 100%;
    max-width: 468px;
    height: 97px;
    font-size: 40px;
    color: white;
    background-color: black;
    border: none;
    position: absolute;
    bottom: 0px;

    @media (max-width: 768px) {
        width: 90%;
        font-size: 30px;
        height: 70px;
        left: 50px;
    }
`;
