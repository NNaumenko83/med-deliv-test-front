import React from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/productsSlice';
import { CartProductsListItem } from '../CartProductsListItem/CartProductsListItem';
import { CartList } from './CartProductsList.styled';

export const CartProductsList = () => {
  const products = useSelector(selectProducts);

  return products.length > 0 ? (
    <CartList>
      {products.map(product => (
        <CartProductsListItem
          key={product.id}
          image={product.img}
          price={product.price}
          id={product.id}
          name={product.name}
          qty={product.qty}
        />
      ))}
    </CartList>
  ) : (
    <h3>Choose product</h3>
  );
};
