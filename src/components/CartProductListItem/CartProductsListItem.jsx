import {
    Button,
    ContentWrapper,
    Image,
    ImageWrapper,
    Input,
    InputTotalWrapper,
    ProductCartItem,
    SumTotalPrice,
} from './CartProductsListItem.styled';
import { useDispatch } from 'react-redux';
import { changeAmount, deleteProduct } from '../../redux/productsSlice';
import imagePlaceholder from '../../images/placeholder-image.jpeg';
import PropTypes from 'prop-types';
import ProductPrice from '../ProductPrice/ProductPrice';
import ProductNameTitle from '../ProductNameTitle/ProductNameTitle';

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
            <ImageWrapper style={{ width: '50%' }}>
                <Image
                    src={image}
                    alt={name}
                    width={'300px'}
                    onError={handleImageError}
                />
            </ImageWrapper>
            <ContentWrapper>
                <div style={{ margin: '0 auto', textAlign: 'center' }}>
                    <ProductNameTitle>{name}</ProductNameTitle>
                    <ProductPrice>{price} UAH</ProductPrice>
                </div>
                <InputTotalWrapper>
                    <Input
                        type="number"
                        value={qty}
                        onChange={handleInputChange}
                    />
                    <SumTotalPrice>
                        TOTAL: {(price * qty).toFixed(2)} UAH
                    </SumTotalPrice>
                </InputTotalWrapper>

                <Button type="button" onClick={handleButtonDeleteClick}>
                    Delete
                </Button>
            </ContentWrapper>
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
