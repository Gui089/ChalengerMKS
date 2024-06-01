import { useEffect, useState } from 'react';
import { ProductTypes } from '../../domain/Product/ProductTypes';
import { ProductApi } from '../../domain/Product/ProductApi';
import { DescriptionItem, ItemLi, PriceProduct, ProductContainer, TitleItem } from './css/Product';

export const Product = () => {
    const { isLoading, error, data } = ProductApi.useGetListProducts();
    const [product, setProduct] = useState<ProductTypes[]>([]);

    useEffect(() => {
        if (data) {
            setProduct(data.products);
        }
    }, [data]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: </div>;

    const priceProduct = product.map((item) => Math.floor(Number(item.price)));
    
    /* console.log(priceProduct); */
    
    return (
        <>
            <ProductContainer >
                {product.map((item, index) => 
                    <ItemLi key={item.id}>
                        <img 
                            width={111} 
                            height={111} 
                            src={item.photo} 
                            alt={item.description} 
                        />
                        <div style={{
                            display:'flex',
                            justifyContent:'space-between',
                            alignItems:'center'
                        }}>
                            <TitleItem>{item.name}</TitleItem>
                            <PriceProduct><p>R${priceProduct[index]}</p></PriceProduct>
                        </div>

                        <DescriptionItem>{item.description}</DescriptionItem>
                    </ItemLi>
                )}
            </ProductContainer>
        </>
    );
};
