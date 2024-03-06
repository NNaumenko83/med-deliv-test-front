import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const OrderWrapper = styled.li`
    width: 100%;
    border: 1px solid #c0beb9;
    border-radius: 20px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
`;

export const PriceWrapper = styled.div`
    padding: 20px;
`;

export const OrderInfoWrapper = styled.div`
    grid-area: 1 / 4 / 2 / 5;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 350px;
    border-left: 1px solid #c0beb9;
`;

export const NumberOrder = styled.p`
    font-size: 20px;
    font-weight: 600;
`;

export const ShowInfoLink = styled(Link)`
    padding: 5px;
    width: 100%;
    border: 1px solid #020024;
    opacity: 0.8;
    background-color: #7eb100;
    border-radius: 20px;
    transition: all 100ms linear;
    font-size: 16px;
    :hover {
        opacity: 1;
        color: #ffffff;
    }

    display: flex;
    justify-content: center;
`;

export const StyledOrdersList = styled.ul`
    display: flex;
    gap: 16px;
    flex-direction: column;
`;
