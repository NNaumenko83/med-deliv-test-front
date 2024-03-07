import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCoupons } from '../../services/ShopAPI';
import CouponList from '../../components/CouponList/CouponList';
import Container from '../../components/Container/Container';
import { MutatingDots } from 'react-loader-spinner';

const Coupons = () => {
    const [randomCoupons, setRandomCoupons] = useState([]);

    const { data: coupons, isLoading } = useQuery({
        queryKey: ['coupons'],
        queryFn: getCoupons,
        staleTime: 60000,
    });

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
            {isLoading && (
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <MutatingDots
                        height={100}
                        width={100}
                        color="#1976d2"
                        secondaryColor="#1976d2"
                        radius={12.5}
                        ariaLabel="mutating-dots-loading"
                        visible={true}
                    />
                </div>
            )}
            {!isLoading && randomCoupons?.length > 0 && (
                <CouponList coupons={randomCoupons} />
            )}
        </Container>
    );
};

export default Coupons;
