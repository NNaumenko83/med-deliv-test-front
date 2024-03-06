import { ContainerStyled } from '../../components/Container/Container.styled';
import styled from '@emotion/styled';

export const HistoryContainer = styled(ContainerStyled)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;

export const SearchWrapper = styled.div`
    grid-area: 1 / 1 / 3 / 4;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const OrdersListWrapper = styled.div`
    grid-area: 3 / 1 / 6 / 4;
    border: 1px solid red;
`;
