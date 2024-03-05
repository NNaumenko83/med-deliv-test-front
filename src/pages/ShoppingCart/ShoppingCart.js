import React from 'react';
import {
  CartContainer,
  CartProducts,
  FormContainer,
  TextPrice,
} from './ShoppingCart.styled';
import { Form } from '../../components/Form/Form';
import { CartProductsList } from '../../components/CartProductsList/CartProductsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts, selectTotalValue } from '../../redux/productsSlice';
import { useEffect } from 'react';
import { deleteShop } from '../../redux/shopSlice';

const ShoppingCart = () => {
  const total = useSelector(selectTotalValue);
  const selectedProducts = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedProducts.length === 0) {
      dispatch(deleteShop());
    }
  }, [dispatch, selectedProducts.length]);

  return (
    <>
      <CartContainer>
        <FormContainer>
          <Form />
        </FormContainer>
        <CartProducts>
          <CartProductsList />
        </CartProducts>
      </CartContainer>
      <TextPrice>Total price: {total} UAH</TextPrice>
    </>
  );
};

export default ShoppingCart;
