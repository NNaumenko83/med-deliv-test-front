import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBarStyled = styled.nav`
    display: flex;
    gap: 16px;
    width: 100%;
    justify-content: center;
`;

export const NavLinkStyled = styled(NavLink)`
    font-size: 14px;
    font-weight: ${({ match }) => (match ? 600 : 400)};

    color: #ffffff;

    &.active {
        color: #ffcc37;
    }

    border-radius: 10px;

    transition: color 250ms linear;

    &:hover,
    &:focus {
        color: #ffcc37;
    }
`;
