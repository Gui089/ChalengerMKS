import { Container, TileButton } from "./css/ButtonBuy"


export const ButtonBuy = () => {
    return (
        <Container>
            <img 
                width={12} 
                height={13.5} 
                src="https://raw.githubusercontent.com/Gui089/ChalengerMKS/main/src/assets/img/shopping-bag.png"/>
            <TileButton>COMPRAR</TileButton>
        </Container>
    )
}