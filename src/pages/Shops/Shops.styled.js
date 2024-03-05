import styled from '@emotion/styled';

export const ProductsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    gap: 10px;
    padding: 10px;
    border: 1px solid #272729;
    border-radius: 5px;
    -webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
`;

export const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr;
    grid-column-gap: 24px;
    height: calc(100vh - 210px);
`;
export const ShopsListWrapper = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    border-right: 1px solid #bfbfbf;
`;
export const ProductsListWrapper = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    max-height: 100%;
    overflow: auto;
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const Title = styled.h3`
    font-size: 30px;
    font-weight: 600;
    color: #1a71b6;
`;
