import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from '../ProductCard/ProductCard';
import { List } from './ProductsList.styled';
import PropTypes from 'prop-types';
import { selectProducts } from '../../redux/productsSlice';
import { deleteShop } from '../../redux/shopSlice';
import { useEffect } from 'react';

export const ProductsList = ({ products }) => {
    const selectedProducts = useSelector(selectProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedProducts.length === 0) {
            dispatch(deleteShop());
        }
    }, [dispatch, selectedProducts.length]);
    return (
        <List>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    img={product.imageURL}
                    price={product.price}
                    currency={product.currency}
                    id={product.id}
                />
            ))}
        </List>
    );
};

ProductsList.propTypes = {
    products: PropTypes.array.isRequired,
};
