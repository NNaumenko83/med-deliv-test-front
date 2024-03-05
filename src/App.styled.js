import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    min-width: 320px;
    height: 100vh;
    /* align-items: center; */
    padding: 0 30px;

    @media screen and (min-width: 320px) {
        max-width: 480px;
        font-size: 0.5rem;
    }

    @media screen and (min-width: 768px) {
        min-width: 768px;
        font-size: 0.75rem;
    }
    @media screen and (min-width: 1200px) {
        min-width: 1200px;
        font-size: 1rem;
    }
`;
