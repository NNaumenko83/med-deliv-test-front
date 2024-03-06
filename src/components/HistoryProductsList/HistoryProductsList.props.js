import PropTypes from 'prop-types';

const productPropType = PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    shopId: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
});

const productsPropType = PropTypes.arrayOf(
    PropTypes.shape({
        product: productPropType.isRequired,
        quantity: PropTypes.number.isRequired,
        orderPrice: PropTypes.number.isRequired,
    })
).isRequired;

export default productsPropType;
