import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCoupons } from '../../services/ShopAPI';

const Coupons = () => {
    const [randomCoupons, setRandomCoupons] = useState([]);

    const { data: coupons } = useQuery({
        queryKey: ['coupons'],
        queryFn: getCoupons,
        staleTime: 60000,
    });
    console.log(coupons);

    useEffect(() => {
        if (coupons?.length > 0) {
            generateRandomCoupons();
        }
    }, [coupons]);
    console.log('coupons:', !!coupons);

    const generateRandomCoupons = () => {
        const randomIndexes = [];
        while (randomIndexes.length < 3) {
            const randomIndex = Math.floor(Math.random() * coupons.length);
            if (!randomIndexes.includes(randomIndex)) {
                randomIndexes.push(randomIndex);
            }
        }
        const selectedCoupons = randomIndexes.map(index => coupons[index]);
        setRandomCoupons(selectedCoupons);
    };

    const copyCouponId = couponId => {
        navigator.clipboard
            .writeText(couponId)
            .then(() => alert('Coupon ID copied to clipboard'))
            .catch(error => console.error('Error copying coupon ID:', error));
    };

    return (
        <div>
            <h1>Coupons</h1>
            <ul>
                {coupons?.length > 0 &&
                    randomCoupons.map(coupon => (
                        <li key={coupon.id}>
                            Coupon ID: {coupon.id} - Discount: {coupon.discount}
                            %
                            <button onClick={() => copyCouponId(coupon.id)}>
                                Copy
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Coupons;
