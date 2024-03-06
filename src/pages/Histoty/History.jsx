import { useQuery } from '@tanstack/react-query';
import OrdersList from '../../components/OrdersList/OrdersList';
import { getOrders } from '../../services/ShopAPI';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import {
    HistoryContainer,
    LoadingWrapper,
    OrdersListWrapper,
    SearchWrapper,
} from './Histoty.styled';
import SearchBar from '../../components/SearchBar/SearchBar';
import { MutatingDots } from 'react-loader-spinner';
import { Error } from '../../components/Error/Error';

const History = () => {
    const [searchParams] = useSearchParams();
    const { phone, email } = useMemo(
        () => Object.fromEntries([...searchParams]),
        [searchParams]
    );

    const [searchEmail, setSearchEmail] = useState(email || null);
    const [searchPhone, setSearchPhone] = useState(phone || null);

    const { data, isLoading, error } = useQuery({
        queryKey: ['orders', searchEmail, searchPhone],
        queryFn: () => getOrders(searchEmail, searchPhone),
        staleTime: 60000,
    });

    const debounceDelay = 500;

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            if (email === '') {
                setSearchEmail(null);
            } else {
                setSearchEmail(email);
            }
            if (phone === '') {
                setSearchPhone(null);
            } else {
                setSearchPhone(phone);
            }
        }, debounceDelay);
        return () => clearTimeout(debounceTimeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchEmail, searchPhone]);

    return (
        <HistoryContainer>
            <SearchWrapper>
                <SearchBar />
            </SearchWrapper>

            <OrdersListWrapper>
                {!isLoading && data && <OrdersList orders={data} />}
                {isLoading && (
                    <LoadingWrapper>
                        <MutatingDots
                            height={100}
                            width={100}
                            color="#1976d2"
                            secondaryColor="#1976d2"
                            radius={12.5}
                            ariaLabel="mutating-dots-loading"
                            visible={true}
                        />
                    </LoadingWrapper>
                )}
                {error && <Error error={error} />}
            </OrdersListWrapper>
        </HistoryContainer>
    );
};

export default History;
