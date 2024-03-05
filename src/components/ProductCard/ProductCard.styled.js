import styled from '@emotion/styled';

export const Card = styled.li`
    flex-basis: calc((100% - 4 * 10px) / 3);
    padding: 15px 10px;
    border: 1px solid #8ed0ff;
    border-radius: 20px;

    -webkit-box-shadow: 0px 0px 10px -3px rgba(0, 115, 255, 1);
    -moz-box-shadow: 0px 0px 10px -3px rgba(0, 115, 255, 1);
    box-shadow: 0px 0px 10px -3px rgba(0, 115, 255, 1);
`;

export const AddButton = styled.button`
    padding: 5px;
    width: 100%;
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

export const DeleteButton = styled.button`
    padding: 5px;
    width: 100%;
    border: 1px solid #020024;
    opacity: 0.8;
    background-color: #ff8914;
    border-radius: 20px;
    transition: all 100ms linear;
    font-size: 16px;
    :hover {
        opacity: 1;
        color: #ffffff;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 200px;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid #9796ab;
    background-color: white;
    overflow: hidden;
`;

export const Image = styled.img`
    display: block;
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    padding: 12px;
    font-size: 16px;
    font-weight: 600;
`;

export const DrugName = styled.h3`
    color: #2976bf;
`;
