import PropTypes from 'prop-types';
import {
    CopyButton,
    DiscountWrapper,
    StyledCouponCard,
} from './CouponCard.styled';

function CouponCard({ coupon }) {
    const copyCouponId = couponId => {
        navigator.clipboard
            .writeText(couponId)
            .then(() => alert('Coupon ID copied to clipboard'))
            .catch(error => console.error('Error copying coupon ID:', error));
    };

    return (
        <StyledCouponCard>
            <DiscountWrapper>-{coupon.discount}%</DiscountWrapper>
            <div>
                <h3>{coupon.id}</h3>
            </div>

            <CopyButton onClick={() => copyCouponId(coupon.id)}>
                Copy code
            </CopyButton>
        </StyledCouponCard>
    );
}

export default CouponCard;

CouponCard.propTypes = {
    coupon: PropTypes.shape({
        id: PropTypes.string.isRequired,
        discount: PropTypes.number.isRequired,
    }).isRequired,
};
