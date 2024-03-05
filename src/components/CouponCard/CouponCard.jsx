import PropTypes from 'prop-types';

function CouponCard({ coupon }) {
    const copyCouponId = couponId => {
        navigator.clipboard
            .writeText(couponId)
            .then(() => alert('Coupon ID copied to clipboard'))
            .catch(error => console.error('Error copying coupon ID:', error));
    };

    return (
        <li>
            Coupon ID: {coupon.id} - Discount: {coupon.discount}%
            <button onClick={() => copyCouponId(coupon.id)}>Copy</button>
        </li>
    );
}

export default CouponCard;

CouponCard.propTypes = {
    coupon: PropTypes.shape({
        id: PropTypes.string.isRequired,
        discount: PropTypes.number.isRequired,
    }).isRequired,
};
