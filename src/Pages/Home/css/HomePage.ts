import styled from 'styled-components';

export const Container = styled.div`
    background-color:#EEEE;
    width: 100%;
    height: 1000px;
`;

export const NavBar = styled.div`
    background-color: #0F52BA;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TitleLogo = styled.h1`
    font-family: sans-serif;
    font-weight: 600;
    font-size: 38px;
    color: white;
    
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    padding-left: 65px;
`;

export const SubTitleLogo = styled.p`
    font-family: sans-serif;
    font-weight: 300;
    color: white;
    font-size: 14px;
`;

export const Cart = styled.div`
    background-color: white;
    width: 90px;
    height: 45px;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 88px;
    cursor: pointer;
`;