import styled from "@emotion/styled";

export const Card = styled.li`
  flex-basis: calc((100% - 4 * 10px) / 3);
  padding: 10px;
  border: 1px solid #272729;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
`;

export const Button = styled.button`
  padding: 5px;
  border: 1px solid #020024;
  border-radius: 5px;
  :hover {
    background-color: #047ad6;
    color: #c2e3ff;
    -webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 1);
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 1);
  }
  :active {
    background-color: #005de9;
    color: #c2e3ff;
  }
`;
