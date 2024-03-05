import { ShopsContainer } from './ShopList.styled';

import { getShops } from '../../services/ShopAPI';

import { useQuery } from '@tanstack/react-query';
import { CustomLink } from '../CustomLink/CustomLink';
import { MutatingDots } from 'react-loader-spinner';

function ShopList() {
    const query = useQuery({
        queryKey: ['shops'],
        queryFn: getShops,
        staleTime: 6000,
    });

    return (
        <ShopsContainer>
            {query?.data ? (
                query.data.map(shop => (
                    <CustomLink key={shop.id} to={`/shops/${shop.id}`}>
                        {shop.name}
                    </CustomLink>
                ))
            ) : (
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
        </ShopsContainer>
    );
}

export default ShopList;
