import styled from 'styled-components';

export const ProductContainer = styled.ul`
    display: grid;
    list-style: none;
    grid-template-columns: repeat(4, 200px);
    gap: 20px 40px;
    margin-left: 30%;
    margin-top: 110px;

    @media (max-width: 1200px) {
        margin-left: 10%;
        grid-template-columns: repeat(3, 200px);
    }

    @media (max-width: 992px) {
        margin-left: 5%;
        grid-template-columns: repeat(2, 200px);
    }

    @media (max-width: 768px) {
        margin-left: 2%;
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
        margin-left: 0;
        grid-template-columns: 1fr;
    }
`;

export const ItemLi = styled.li`
    width: 218px;
    height: 270px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    box-shadow: -5px -1px 13px -7px rgba(74,74,74,0.75);
    -webkit-box-shadow: -5px -1px 13px -7px rgba(74,74,74,0.75);
    -moz-box-shadow: -5px -1px 13px -7px rgba(74,74,74,0.75);

    @media (max-width: 768px) {
        margin-left: 20%;
        margin-top: -44px;
        margin-bottom: 50px;
    }
`;

export const TitleItem = styled.p`
    font-family: sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin-left: 14px;
    display: flex;
    align-self: center;
    justify-self: center;
    width: 120px;
    margin-right: 10px;
`;

export const PriceProduct = styled.div`
    background-color: #373737;
    width: 64px;
    height: 26px;
    border-radius: 5px;
    color: white;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 11px;
`;

export const DescriptionItem = styled.p`
    font-size: 10px;
    font-weight: 300;
    font-family: sans-serif;
    width: 190px;
    color: #2C2C2C;
    margin-top: 8px;
    margin-bottom: 0;
`;
