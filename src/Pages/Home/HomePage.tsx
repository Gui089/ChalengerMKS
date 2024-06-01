import { Cart, Logo, NavBar, SubTitleLogo, TitleLogo } from "./css/HomePage"


export const HomePage = () => {
    return (
        <>
            <NavBar>
                <Logo>
                    <TitleLogo>MKS</TitleLogo>
                    <SubTitleLogo>Sistemas</SubTitleLogo>
                </Logo>

                <Cart>
                    <img src="../assets/img/Vector (1).png"/>
                </Cart>
            </NavBar>
        </>
    );
}