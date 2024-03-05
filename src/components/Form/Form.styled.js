import styled from '@emotion/styled';

export const FormCart = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 20px;

    overflow: auto;
    height: 100%;
`;

export const FormInput = styled.input`
    width: 100%;
`;

export const SubmitButton = styled.button`
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

    position: absolute;

    color: ${props => (props.disabled ? '#8d8377' : '#ffffff')};
    right: 10px;
    bottom: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px;
    width: 250px;
    border: 1px solid #020024;
    opacity: 0.8;
    background-color: ${props => (props.disabled ? null : '#005de9')};
    border-radius: 30px;
    transition: all 100ms linear;
    font-size: 16px;
    &:not(:disabled):hover {
        opacity: 1;
        color: #f8efae;
    }
`;

export const StyledLabel = styled.label`
    position: relative;
`;
