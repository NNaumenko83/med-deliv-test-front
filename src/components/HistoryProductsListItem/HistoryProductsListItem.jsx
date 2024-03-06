import PropTypes from 'prop-types';
import {
    ContentWrapper,
    Image,
    ImageWrapper,
    InputTotalWrapper,
    ProductListItem,
    SumTotalPrice,
} from './HistoryProductsListItem.styled';

import imagePlaceholder from '../../images/placeholder-image.jpeg';
import ProductPrice from '../ProductPrice/ProductPrice';
import ProductNameTitle from '../ProductNameTitle/ProductNameTitle';

export const HistoryProductsListItem = ({
    product: {
        product: { imageURL, name: productName, price },
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
                    alt={productName}
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

HistoryProductsListItem.propTypes = {
    product: PropTypes.shape({
        product: PropTypes.shape({
            imageURL: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired,
};
