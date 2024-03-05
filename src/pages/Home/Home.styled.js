import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ShopsContainer = styled.div`
    display: flex;
    max-width: 200px;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    height: calc(100vh - 120px);
    border: 1px solid #bfbfbf;
    border-radius: 5px;
    -webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
`;

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    padding: 10px 15px;
    width: auto;
    border: 1px solid #020024;
    opacity: 0.8;
    background-color: #7eb100;
    border-radius: 20px;
    transition: all 100ms linear;
    font-size: 16px;
    :hover {
        opacity: 1;
        color: #ffffff;
        -webkit-box-shadow: 0px 0px 20px 0px rgba(52, 128, 209, 1);
        -moz-box-shadow: 0px 0px 20px 0px rgba(52, 128, 209, 1);
        box-shadow: 0px 0px 20px 0px rgba(52, 128, 209, 1);
    }
`;

export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
`;

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 600;
    color: #1a71b6;
    text-align: center;
`;
