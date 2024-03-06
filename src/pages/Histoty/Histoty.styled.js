import { ContainerStyled } from '../../components/Container/Container.styled';
import styled from '@emotion/styled';

export const HistoryContainer = styled(ContainerStyled)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 150px 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;

export const SearchWrapper = styled.div`
    grid-area: 1 / 1 / 2 / 4;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const OrdersListWrapper = styled.div`
    grid-area: 2 / 1 / 4 / 4;
`;

export const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;
