import React from 'react';
import {
    ProductContainer,
    ProductWrapper,
    ProductHeader,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductElement';

function Products({heading, data}) {
    return (
        <ProductContainer>
            <ProductHeader>{heading}</ProductHeader>
            <ProductWrapper>
                {data.map((product, index)=> {
                    return(
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>            
        </ProductContainer>
    )
}

export default Products;
