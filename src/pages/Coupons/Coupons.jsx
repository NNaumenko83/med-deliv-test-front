import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCoupons } from '../../services/ShopAPI';
import CouponList from '../../components/CouponList/CouponList';
import Container from '../../components/Container/Container';

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

    return (
        <Container>
            {randomCoupons?.length > 0 && (
                <CouponList coupons={randomCoupons} />
            )}
        </Container>
    );
};

export default Coupons;
