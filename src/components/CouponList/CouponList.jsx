import PropTypes from 'prop-types';
import CouponCard from '../CouponCard/CouponCard';
import { StyledCouponsList } from './CouponList.styled';

function CouponList({ coupons }) {
    return (
        <StyledCouponsList>
            {coupons.map(coupon => (
                <CouponCard key={coupon.id} coupon={coupon} />
            ))}
        </StyledCouponsList>
    );
}

CouponList.propTypes = {
    coupons: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            discount: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default CouponList;
