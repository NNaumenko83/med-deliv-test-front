import { useQuery } from '@tanstack/react-query';
import OrdersList from '../../components/OrdersList/OrdersList';
import { getOrders } from '../../services/ShopAPI';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import {
    HistoryContainer,
    OrdersListWrapper,
    SearchWrapper,
} from './Histoty.styled';
import SearchBar from '../../components/SearchBar/SearchBar';

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
    console.log('data:', data);

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
    }, [searchEmail, searchPhone]);

    return (
        <HistoryContainer>
            <SearchWrapper>
                <SearchBar />
            </SearchWrapper>

            <OrdersListWrapper>
                {data && <OrdersList orders={data} />}
            </OrdersListWrapper>
        </HistoryContainer>
    );
};

export default History;
