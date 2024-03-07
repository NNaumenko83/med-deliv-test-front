import { ShopsContainer } from './ShopList.styled';

import { getShops } from '../../services/ShopAPI';

import { useQuery } from '@tanstack/react-query';
import { CustomLink } from '../CustomLink/CustomLink';
import { MutatingDots } from 'react-loader-spinner';
import { Error } from '../Error/Error';

function ShopList() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['shops'],
        queryFn: getShops,
        staleTime: 60000,
    });

    return (
        <ShopsContainer>
            {data &&
                data.map(shop => (
                    <CustomLink key={shop.id} to={`/shops/${shop.id}`}>
                        {shop.name}
                    </CustomLink>
                ))}
            {isLoading && (
                <MutatingDots
                    height={100}
                    width={100}
                    color="#1976d2"
                    secondaryColor="#1976d2"
                    radius={12.5}
                    ariaLabel="mutating-dots-loading"
                    visible={true}
                />
            )}
            {error && <Error />}
        </ShopsContainer>
    );
}

export default ShopList;
