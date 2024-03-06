import styled from '@emotion/styled';
import { ContainerStyled } from '../Container/Container.styled';

export const FooterStyled = styled.footer`
    background-color: #1976d2;
`;

export const FooterContainer = styled(ContainerStyled)`
    display: flex;
    height: 120px;
    padding: 8px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Link = styled.a`
    margin: 0 auto;
    color: #ffffc0;

    transition: color 300ms ease-in-out;

    &:hover,
    &:focus {
        color: #ffc73c;
    }
`;

export const FooterText = styled.p`
    font-size: 12px;
    color: #f7efed;
`;

export const LinkWrapper = styled.div`
    display: flex;
    gap: 10px;
`;
