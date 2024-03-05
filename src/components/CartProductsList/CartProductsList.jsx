import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../redux/productsSlice';
import { CartList } from './CartProductsList.styled';
import { CartProductsListItem } from '../CartProductListItem/CartProductsListItem';
import { useEffect } from 'react';
import { deleteShop } from '../../redux/shopSlice';

export const CartProductsList = () => {
    const products = useSelector(selectProducts);
    console.log('products:', products);
    const dispatch = useDispatch();

    useEffect(() => {
        if (products.length === 0) {
            dispatch(deleteShop());
        }
    }, [dispatch, products.length]);

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
