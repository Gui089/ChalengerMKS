import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ProductTypes } from "../../domain/Product/ProductTypes";
import { ButtonBuyItem, ButtonClose, ButtonDelete, LiProduct, Paragraph, ParagraphPrice, TitleCart, UlProduct } from "./css/Cart";

interface CartProps {
    open?: boolean;
    data: Pick<ProductTypes, 'name' | 'price' | 'photo'>[];
    toggleCart: () => void;
}

export const CartSideBar = ({ data, toggleCart }: CartProps) => {
    const [productCart, setProductCart] = useState([]);

    useEffect(() => {
        const productQuantities = data.reduce((acc, item) => {
            if (!acc[item.name]) {
                acc[item.name] = { ...item, quantity: 0 };
            }
            acc[item.name].quantity += 1;
            return acc;
        }, {} as { [key: string]: Pick<ProductTypes, 'name' | 'price' | 'photo'> & { quantity: number } });

        const arrayProductCart = Object.values(productQuantities);
        setProductCart(arrayProductCart);
    }, [data]);

    const priceProduct = productCart.map((item) => Math.floor(Number(item.price)));

    const totalPrice = priceProduct.reduce((acc, price) => acc + price, 0);

    const handleDelete = (name: string) => {
        setProductCart(prevCart => prevCart.filter(item => item.name !== name));
    };

    return (
        <div>
            <motion.div
                {...framerSidebarBackground}
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    top: 0,
                    zIndex: 40,
                    width: 468,
                    height: 1000,
                    backgroundColor: '#0F52BA',
                }}
            >
                <TitleCart>Carrinho de compras</TitleCart>
                <ButtonClose onClick={toggleCart}>x</ButtonClose>

                <UlProduct>
                    {productCart.map((item, index) =>
                        <LiProduct key={item.name}>
                            <ButtonDelete onClick={() => handleDelete(item.name)}>x</ButtonDelete>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <img
                                    width={57}
                                    height={57}
                                    src={item.photo}
                                    style={{
                                        marginRight: 22
                                    }}
                                />
                                <Paragraph>{item.name}</Paragraph>
                                <p>{item.quantity}</p>
                            </div>
                            <ParagraphPrice>R${priceProduct[index]}</ParagraphPrice>
                        </LiProduct>)}
                </UlProduct>
                <h1 style={{color:'white', marginLeft:50, fontFamily:'sans-serif'}}>Total: R${totalPrice}</h1>
                <ButtonBuyItem>Finalizar Compra</ButtonBuyItem>
            </motion.div>
        </div>
    );
}

const framerSidebarBackground = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.2 } },
    transition: { duration: 0.5 },
};



