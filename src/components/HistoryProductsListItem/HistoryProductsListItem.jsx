import {
    ContentWrapper,
    Image,
    ImageWrapper,
    InputTotalWrapper,
    ProductListItem,
    SumTotalPrice,
} from './HistoryProductsListItem.styled';

import imagePlaceholder from '../../images/placeholder-image.jpeg';
import PropTypes from 'prop-types';
import ProductPrice from '../ProductPrice/ProductPrice';
import ProductNameTitle from '../ProductNameTitle/ProductNameTitle';

// eslint-disable-next-line no-unused-vars
export const HistoryProductsListItem = ({
    product: {
        product: { imageURL, name: productName, price, name },
        quantity,
    },
}) => {
    const handleImageError = event => {
        event.target.src = imagePlaceholder;
    };

    return (
        <ProductListItem>
            <ImageWrapper style={{ width: '50%' }}>
                <Image
                    src={imageURL}
                    alt={name}
                    width={'300px'}
                    onError={handleImageError}
                />
            </ImageWrapper>
            <ContentWrapper>
                <div style={{ margin: '0 auto', textAlign: 'center' }}>
                    <ProductNameTitle>{productName}</ProductNameTitle>
                    <ProductPrice>{price.toFixed(2)} UAH</ProductPrice>
                </div>
                <InputTotalWrapper>
                    <p>Quantity: {quantity} pcs.</p>
                    <SumTotalPrice>
                        TOTAL: {(price * quantity).toFixed(2)} UAH
                    </SumTotalPrice>
                </InputTotalWrapper>
            </ContentWrapper>
        </ProductListItem>
    );
};

// HistoryProductsListItem.propTypes = {
//     image: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
// };
