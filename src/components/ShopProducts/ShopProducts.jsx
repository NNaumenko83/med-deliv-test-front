import { LoaderWrapper } from './ShopProducts.styled';

import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { MutatingDots } from 'react-loader-spinner';
import { getProducts } from '../../services/ShopAPI';
import { ProductsList } from '../ProductsList/ProductsList';
import { Error } from '../Error/Error';
import { useQuery } from '@tanstack/react-query';

const ShopProducts = () => {
    const { shopName } = useParams();
    const location = useLocation();

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['products', shopName, location.search],
        queryFn: async () => {
            const data = await getProducts(shopName, location.search);
            return data;
        },
        staleTime: 6000,
    });

    useEffect(() => {
        refetch();
    }, [location.search, refetch]);

    return (
        <>
            {isLoading && (
                <LoaderWrapper>
                    <MutatingDots
                        height={100}
                        width={100}
                        color="#1976d2"
                        secondaryColor="#1976d2"
                        radius={12.5}
                        ariaLabel="mutating-dots-loading"
                        visible={true}
                    />
                </LoaderWrapper>
            )}
            {!isLoading && data && <ProductsList products={data} />}
            {error && <Error />}
        </>
    );
};

export default ShopProducts;
