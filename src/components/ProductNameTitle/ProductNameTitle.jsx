import PropTypes from 'prop-types';
import { StyledProductNameTitle } from './ProductNameTitle.styled';

function ProductNameTitle({ children }) {
    return <StyledProductNameTitle>{children}</StyledProductNameTitle>;
}

ProductNameTitle.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProductNameTitle;
