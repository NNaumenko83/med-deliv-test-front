import PropTypes from 'prop-types';
import CouponCard from '../CouponCard/CouponCard';

function CouponList({ coupons }) {
    return (
        <ul>
            {coupons.map(coupon => (
                <CouponCard key={coupon.id} coupon={coupon} />
            ))}
        </ul>
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
