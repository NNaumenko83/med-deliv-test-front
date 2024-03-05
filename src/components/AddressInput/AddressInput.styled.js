import styled from '@emotion/styled';

export const SuggestionsList = styled.ul`
    position: absolute;
    background-color: #fffbf4;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    display: flex;
    padding: 5px;
    flex-direction: column;
    gap: 2px;
    z-index: 1000;
    width: 80%;
`;

export const SuggestionsItem = styled.li`
    cursor: pointer;
    transition: color 150ms linear;
    :hover {
        color: #0077ef;
    }
`;

export const InputWrapper = styled.div`
    width: 100%;
    position: relative;
`;

export const InputAutocomplete = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #dbf6ff;
    border-radius: 5px;
`;
