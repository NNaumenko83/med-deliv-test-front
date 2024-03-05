import styled from '@emotion/styled';

export const FormCart = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-wrap: wrap;
    overflow: auto;
    height: 100%;
`;

export const FormInput = styled.input`
    width: 100%;
`;

export const SubmitButton = styled.button`
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

    position: absolute;

    right: 10px;
    bottom: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 36px;

    border: 1px solid #020024;
    border-radius: 5px;
    :hover {
        background-color: ${props => (props.disabled ? null : '#047ad6')};
        color: ${props => (props.disabled ? null : '#c2e3ff')};
        -webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 1);
        -moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 1);
        box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 1);
    }
    :active {
        background-color: ${props => (props.disabled ? null : '#005de9')};
        color: ${props => (props.disabled ? null : '#c2e3ff')};
    }
`;

export const ErrorText = styled.span`
    color: #e42c01;
`;
