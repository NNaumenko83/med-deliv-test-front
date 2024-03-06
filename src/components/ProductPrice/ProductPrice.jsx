import PropTypes from 'prop-types';
import { StyledProductPrice } from './ProductPrice.styled';

function ProductPrice({ children }) {
    return <StyledProductPrice>{children}</StyledProductPrice>;
}

ProductPrice.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProductPrice;
