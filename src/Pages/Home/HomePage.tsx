import { useEffect, useState } from "react";
import { Cart, Container, Logo, NavBar, SubTitleLogo, TitleLogo } from "./css/HomePage";
import { CartSideBar } from "../../Components/Cart/Cart.Sidebar";
import { DescriptionItem, ItemLi, PriceProduct, ProductContainer, TitleItem } from "../../Components/Product/css/Product";
import { ProductApi } from "../../domain/Product/ProductApi";
import { ProductTypes } from "../../domain/Product/ProductTypes";
import { ContainerButton, TileButton } from "../../Components/ButtonBuy/css/ButtonBuy";

export const HomePage = () => {
    const [quantityCart, setQuantityCart] = useState<number>(0);
    const [openCart, setOpenCart] = useState<boolean>(false);
    const [product, setProduct] = useState<ProductTypes[]>([]);
    const [productInCart, setProductInCart] = useState<ProductTypes[]>([]);

    const toggleCart = () => {
        setOpenCart(prev => !prev);
    }

    const addToCart = (e) => {
        setQuantityCart(prev => prev + 1);
        const productId = e.currentTarget.getAttribute('data-product-id');
        const productToAdd = product.find((item) => item.id === Number(productId));
        if (productToAdd) {
            setProductInCart(prevCart => [...prevCart, productToAdd]);
        }
        console.log(productInCart);
    }

    const { isLoading, error, data } = ProductApi.useGetListProducts();

    useEffect(() => {
        if (data) {
            setProduct(data.products);
        }
    }, [data]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: </div>;

    const priceProduct = product.map((item) => Math.floor(Number(item.price)));

    return (
        <Container>
            <NavBar>
                <Logo>
                    <TitleLogo>MKS</TitleLogo>
                    <SubTitleLogo>Sistemas</SubTitleLogo>
                </Logo>

                <Cart onClick={toggleCart}>
                    <img
                        width={19}
                        height={18}
                        src="https://raw.githubusercontent.com/Gui089/ChalengerMKS/main/src/assets/img/Vector%20(1).png"
                    />
                    <h1
                        style={{
                            fontWeight: 700,
                            fontSize: 18,
                            fontFamily: 'sans-serif'
                        }}
                    >{quantityCart}</h1>
                </Cart>
            </NavBar>

            {openCart && <CartSideBar data={productInCart} toggleCart={toggleCart} />}

            <ProductContainer>
                {product.map((item, index) =>
                    <ItemLi key={item.id}>
                        <img
                            width={111}
                            height={111}
                            src={item.photo}
                            alt={item.description}
                        />
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <TitleItem>{item.name}</TitleItem>
                            <PriceProduct><p>R${priceProduct[index]}</p></PriceProduct>
                        </div>

                        <DescriptionItem>{item.description}</DescriptionItem>

                        <ContainerButton data-product-id={item.id} onClick={addToCart}>
                            <img
                                width={12}
                                height={13.5}
                                src="https://raw.githubusercontent.com/Gui089/ChalengerMKS/main/src/assets/img/shopping-bag.png"
                            />
                            <TileButton>COMPRAR</TileButton>
                        </ContainerButton>
                    </ItemLi>
                )}
            </ProductContainer>
        </Container>
    );
}

