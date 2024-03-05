import { Button, Input, ProductCartItem } from './CartProductsListItem.styled';
import { useDispatch } from 'react-redux';
import { changeAmount, deleteProduct } from '../../redux/productsSlice';
import imagePlaceholder from '../../images/placeholder-image.jpeg';
import PropTypes from 'prop-types';

export const CartProductsListItem = ({ image, price, id, name, qty }) => {
    const dispatch = useDispatch();

    const handleInputChange = e => {
        if (Number(e.target.value) <= 0) {
            return;
        }
        dispatch(changeAmount({ id, qty: e.target.value }));
    };

    const handleButtonDeleteClick = () => {
        dispatch(deleteProduct(id));
    };

    const handleImageError = event => {
        event.target.src = imagePlaceholder;
    };

    return (
        <ProductCartItem>
            <div style={{ width: '50%' }}>
                <img
                    style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '10px',
                    }}
                    src={image}
                    alt={name}
                    width={'300px'}
                    onError={handleImageError}
                />
            </div>
            <div
                style={{
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div style={{ margin: '0 auto', textAlign: 'center' }}>
                    <h3>{name}</h3>
                    <p>{price} UAH</p>
                </div>

                <Input type="number" value={qty} onChange={handleInputChange} />
                <p style={{ textAlign: 'center', marginBottom: '15px' }}>
                    TOTAL: {price * qty} UAH
                </p>
                <Button type="button" onClick={handleButtonDeleteClick}>
                    Delete
                </Button>
            </div>
        </ProductCartItem>
    );
};

CartProductsListItem.propTypes = {
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
};
