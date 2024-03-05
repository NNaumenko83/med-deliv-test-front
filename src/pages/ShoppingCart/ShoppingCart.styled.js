import styled from '@emotion/styled';

export const CartContainer = styled.div`
    height: calc(100vh - 150px - 50px);
    position: relative;
    gap: 4px;
    padding: 20px;

    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
`;

export const CartProducts = styled.div`
    display: flex;
    gap: 15px;
    padding: 20px;
    border: 1px solid #8ed0ff;
    border-radius: 5px;

    -webkit-box-shadow: 0px 0px 10px -3px rgba(0, 115, 255, 1);
    -moz-box-shadow: 0px 0px 10px -3px rgba(0, 115, 255, 1);
    box-shadow: 0px 0px 10px -3px rgba(0, 115, 255, 1);

    grid-area: 1 / 5 / 7 / 9;
`;

export const FormContainer = styled.div`
    padding: 20px;
    overflow: auto;

    border: 1px solid #8ed0ff;
    border-radius: 5px;

    -webkit-box-shadow: 0px 0px 10px -3px rgba(0, 115, 255, 1);
    -moz-box-shadow: 0px 0px 10px -3px rgba(0, 115, 255, 1);
    box-shadow: 0px 0px 10px -3px rgba(0, 115, 255, 1);

    grid-area: 5 / 1 / 9 / 5;
`;

export const TextPrice = styled.p`
    margin-top: 20px;
    font-size: 1.2rem;
`;

export const MapWrapper = styled.div`
    grid-area: 1 / 1 / 5/ 5;
    background-color: purple;

    border-radius: 5px;
    overflow: hidden;

    border: 1px solid #8ed0ff;

    -webkit-box-shadow: 0px 0px 10px -3px rgba(0, 115, 255, 1);
    -moz-box-shadow: 0px 0px 10px -3px rgba(0, 115, 255, 1);
    box-shadow: 0px 0px 10px -3px rgba(0, 115, 255, 1);
`;

export const PriceWrapper = styled.div`
    grid-area: 8 / 5 / 9 / 7;
    background-color: green;
`;
export const SubmitWrapper = styled.div`
    grid-area: 8 / 7 / 9 / 9;
    background-color: blue;
`;

export const CouponsWrapper = styled.div`
    grid-area: 7 / 5 / 8 / 7;
    background-color: yellow;
`;

export const TestWrapper = styled.div`
    width: max-content;
    grid-area: 7 / 7 / 8 / 9;
`;
