import PropTypes from 'prop-types';

const productType = PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    shopId: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
});

const productsType = PropTypes.arrayOf(
    PropTypes.shape({
        product: productType.isRequired,
        quantity: PropTypes.number.isRequired,
        orderPrice: PropTypes.number.isRequired,
    })
);

const orderType = PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    shop: PropTypes.string.isRequired,
    products: productsType.isRequired,
    coupon: PropTypes.string,
    total: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    totalWithDiscount: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
});

const ordersArrayType = PropTypes.arrayOf(orderType);

export default ordersArrayType;
