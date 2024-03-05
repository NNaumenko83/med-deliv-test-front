import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const LinkStyled = styled(Link)`
    font-size: 14px;
    font-weight: ${({ match }) => (match ? 800 : 600)};

    color: ${({ match }) => (match ? '#2099d8' : '#0e3b5f')};

    transition: color 250ms linear;

    &:hover,
    &:focus {
        color: #2099d8;
    }
`;
