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
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 50px repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: calc(100vh - 210px);
`;
export const ShopsListWrapper = styled.div`
    grid-area: 2 / 1 / 6 / 2;
    border-right: 1px solid #bfbfbf;
`;
export const ProductsListWrapper = styled.div`
    grid-area: 2 / 2 / 6 / 6;
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

export const SortWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-bottom: 1px solid #bfbfbf;
`;

export const Test = styled.div`
    grid-area: 1 / 1 / 2 / 6;
`;
