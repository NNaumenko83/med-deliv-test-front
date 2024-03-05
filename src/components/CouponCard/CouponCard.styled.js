import styled from '@emotion/styled';

export const StyledCouponCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 30px;
    justify-content: space-between;
    border: 1px solid #8ed0ff;
    height: 250px;
    border-radius: 30px;

    -webkit-box-shadow: 0px 0px 15px -3px rgba(0, 115, 255, 1);
    -moz-box-shadow: 0px 0px 15px -3px rgba(0, 115, 255, 1);
    box-shadow: 0px 0px 15px -3px rgba(0, 115, 255, 1);
`;

export const CopyButton = styled.button`
    padding: 5px;
    width: 70%;
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
`;

export const DiscountWrapper = styled.div`
    font-family: 'MadimiOne';
    line-height: 1.1;
    font-size: 80px;
`;

export const CouponCodeWrapper = styled.div``;
