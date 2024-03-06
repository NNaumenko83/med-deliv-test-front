import HistoryProductsList from '../HistoryProductsList/HistoryProductsList';
import { SumTotalPrice } from '../HistoryProductsListItem/HistoryProductsListItem.styled';

import ordersPropTypes from './OrdersList.props';
import {
    NumberOrder,
    OrderInfoWrapper,
    OrderWrapper,
    ShowInfoLink,
    StyledOrdersList,
} from './OrdersList.styled';
import { format } from 'date-fns';

function OrdersList({ orders }) {
    return (
        <StyledOrdersList>
            {orders.map(order => (
                <OrderWrapper key={order.id}>
                    <HistoryProductsList products={order.products} />
                    <OrderInfoWrapper>
                        <NumberOrder>{order.id}</NumberOrder>
                        <p>
                            Date:{' '}
                            {format(new Date(order.createdAt), 'dd-MM-dd-yyyy')}
                        </p>
                        <SumTotalPrice>
                            TOTAL: {order.totalWithDiscount.toFixed(2)} UAH
                        </SumTotalPrice>
                        <ShowInfoLink to={`/products/${order.id}`}>
                            Show info
                        </ShowInfoLink>
                    </OrderInfoWrapper>
                </OrderWrapper>
            ))}
        </StyledOrdersList>
    );
}

export default OrdersList;

OrdersList.propTypes = ordersPropTypes;
