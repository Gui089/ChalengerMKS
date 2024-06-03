import { motion } from "framer-motion";
import { useState } from "react";

// interface CartProps extends Pick<ProductTypes, 'name' | 'price' | 'photo' > {
//     quantity: number;
// }

export const CartSideBar = ({ open }: boolean) => {
    const [openCart, setOpenCart] = useState(open);

    return (
        <div>
            {openCart && (
                <motion.div
                    {...framerSidebarBackground}
                    aria-hidden="true"
                    style={{
                        position: 'fixed',
                        bottom: 0,
                        right: 0,
                        top: 0,
                        zIndex: 40,
                        width: 468,
                        backgroundColor: '#0F52BA',
                    }}
                >
                    <h1>Carrinho de compras</h1>
                    <button onClick={() => setOpenCart(prev => !prev)}>x</button>
                </motion.div>
            )}
        </div>
    );
}

const framerSidebarBackground = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.2 } },
    transition: { duration: 0.5 },
};
