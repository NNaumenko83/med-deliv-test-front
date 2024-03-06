import styled from '@emotion/styled';
import { TotalPrice } from '../../pages/ShoppingCart/ShoppingCart.styled';

export const ProductCartItem = styled.li`
    flex-basis: 100%;
    display: flex;
    gap: 20px;
    height: auto;
    padding: 16px;

    border: 1px solid #272729;
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

export const Button = styled.button`
    padding: 5px 15px;
    border: 1px solid #020024;
    border-radius: 5px;
    :hover {
        background-color: #047ad6;
        color: #c2e3ff;
        -webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 1);
        -moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 1);
        box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 1);
    }
    :active {
        background-color: #005de9;
        color: #c2e3ff;
    }
`;

export const Input = styled.input`
    text-align: center;
    font-size: 20px;
    border: 1px solid #dad9d7;
    border-radius: 5px;
    height: 25px;
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
    font-size: 24px;
`;

export const Image = styled.img`
    display: block;
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
`;
