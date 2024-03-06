import styled from '@emotion/styled';
import { TotalPrice } from '../../pages/ShoppingCart/ShoppingCart.styled';

export const ProductListItem = styled.li`
    max-width: 400px;
    min-width: 400px;
    display: flex;
    gap: 20px;
    height: auto;
    padding: 16px;

    border-radius: 20px;
    -webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 200px;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid #9796ab;
    background-color: white;
    overflow: hidden;
`;

export const ContentWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const InputTotalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    justify-content: space-between;
`;

export const SumTotalPrice = styled(TotalPrice)`
    color: #1752a6;
    font-size: 20px;
`;

export const Image = styled.img`
    display: block;
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
`;
