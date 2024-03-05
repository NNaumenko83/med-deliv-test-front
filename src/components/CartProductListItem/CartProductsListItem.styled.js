import styled from '@emotion/styled';

export const ProductCartItem = styled.li`
    flex-basis: 100%;
    display: flex;
    gap: 20px;
    height: auto;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #272729;
    border-radius: 5px;
    -webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
`;

export const imageWrapper = styled.div``;

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
    margin-bottom: 15px;
`;
