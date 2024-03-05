import { LoaderWrapper } from './ShopProducts.styled';

import { useParams } from 'react-router-dom';
import { MutatingDots } from 'react-loader-spinner';

import { getProducts } from '../../services/ShopAPI';
import { ProductsList } from '../ProductsList/ProductsList';
import { Error } from '../Error/Error';

import { useQuery } from '@tanstack/react-query';

const ShopProducts = () => {
    const { shopName } = useParams();
    console.log('shopName:', shopName);

    const { data, isLoading, error } = useQuery({
        queryKey: ['products', shopName],
        queryFn: async () => {
            const data = await getProducts(shopName);
            console.log('data:', data);
            return data;
        },
        staleTime: 6000,
    });

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
