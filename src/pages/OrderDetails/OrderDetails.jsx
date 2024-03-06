import { useQuery } from '@tanstack/react-query';
import Container from '../../components/Container/Container';
import { getOrderById } from '../../services/ShopAPI';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { ContentWrapper, Title } from './OrderDetails.styled';
import { LoadingWrapper } from '../Histoty/Histoty.styled';
import { MutatingDots } from 'react-loader-spinner';
import { Error } from '../../components/Error/Error';

const OrderDetails = () => {
    const { id } = useParams();

    const { data, isLoading, error } = useQuery({
        queryKey: ['orders', id],
        queryFn: () => getOrderById(id),
    });

    return (
        <Container>
            {!isLoading && data && (
                <div>
                    <Title>Order number: {data.id}</Title>
                    <ContentWrapper>
                        <p>
                            Date:{' '}
                            {format(new Date(data.createdAt), 'dd-MM-yyyy')}
                        </p>
                        <p>Pharmacy: {data.shop.name}</p>
                        <p>Address: {data.address}</p>
                        <p>Customer: {data.name}</p>
                        <p>Total: {data.total.toFixed(2)} UAH</p>
                        <p>
                            Coupon: {data.coupon ? data.coupon : 'No coupon'}{' '}
                        </p>
                        <p>Discount: {data.discount.toFixed(2)} UAH </p>
                        <p>
                            Total with discount:{' '}
                            {data.totalWithDiscount.toFixed(2)}
                            UAH
                        </p>
                    </ContentWrapper>
                </div>
            )}

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
        </Container>
    );
};

export default OrderDetails;
