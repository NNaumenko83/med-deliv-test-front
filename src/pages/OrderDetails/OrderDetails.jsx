import { useQuery } from '@tanstack/react-query';
import Container from '../../components/Container/Container';
import { getOrderById } from '../../services/ShopAPI';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { Title } from './OrderDetails.styled';

const OrderDetails = () => {
    const { id } = useParams();

    const { data, isLoading, error } = useQuery({
        queryKey: ['orders', id],
        queryFn: () => getOrderById(id),
    });

    return (
        <Container>
            {data && (
                <div>
                    <Title>Order number: {data.id}</Title>
                    <p>
                        Date: {format(new Date(data.createdAt), 'dd-MM-yyyy')}
                    </p>
                    <p>Pharmacy: {data.shop.name}</p>
                    <p>Address: {data.address}</p>
                    <p>Customer: {data.name}</p>
                    <p>Total: {data.total.toFixed(2)} UAH</p>
                    <p>Coupon: {data.coupon ? data.coupon : 'No coupon'} </p>
                    <p>Discount: {data.discount.toFixed(2)} UAH </p>
                    <p>
                        Total with discount: {data.totalWithDiscount.toFixed(2)}
                        UAH
                    </p>
                </div>
            )}
        </Container>
    );
};

export default OrderDetails;
