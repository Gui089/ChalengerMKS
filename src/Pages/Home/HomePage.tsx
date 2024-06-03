import {  useState } from "react";
import { Cart, Container, Logo, NavBar, SubTitleLogo, TitleLogo } from "./css/HomePage"
import { Product } from "../../Components/Product/Product";
import { CartSideBar } from "../../Components/Cart/Cart.Sidebar";


export const HomePage = () => {
    
    const [quantityCart, setQuantityCart] = useState<number>(0);
    const [openCart, setOpenCat] = useState<boolean>(false);

    const showCart = () => {
        setOpenCat(prev => !prev);
    }
    
    const addToCart = () => {
        setQuantityCart(prev => prev + 1);
    }


    return (
        <Container >
            <NavBar>
                <Logo>
                    <TitleLogo>MKS</TitleLogo>
                    <SubTitleLogo>Sistemas</SubTitleLogo>
                </Logo>

                <Cart onClick={showCart}>
                    <img
                        width={19} 
                        height={18} 
                        src="https://raw.githubusercontent.com/Gui089/ChalengerMKS/main/src/assets/img/Vector%20(1).png"/>
                    <h1
                        style={{
                            fontWeight:700,
                            fontSize:18,
                            fontFamily:'sans-serif'
                        }}
                        >{quantityCart}</h1>
                </Cart>
            </NavBar>

            {openCart && <CartSideBar open={openCart} />}

            <Product />
        </Container>
    );
}