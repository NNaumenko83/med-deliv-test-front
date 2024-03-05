import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
    background: #152444;
    color: #e9eb97;
`;

export const HeaderContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LinkStyled = styled(Link)`
    display: flex;
    gap: 2px;
    align-items: center;
    transition: color 250ms linear;

    :hover {
        color: #eac749;
    }
`;
