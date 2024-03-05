import PropTypes from 'prop-types';
import {
    CopyButton,
    DiscountWrapper,
    StyledCouponCard,
} from './CouponCard.styled';
import { toast } from 'react-toastify';

function CouponCard({ coupon }) {
    const copyCouponId = couponId => {
        navigator.clipboard
            .writeText(couponId)
            .then(() =>
                toast.success('Coupon code copied', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                })
            )
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
