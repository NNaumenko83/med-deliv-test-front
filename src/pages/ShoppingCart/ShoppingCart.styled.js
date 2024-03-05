import styled from "@emotion/styled";

export const CartContainer = styled.div`
  display: flex;
  height: calc(100vh - 150px - 20px);
  gap: 15px;
`;

export const CartProducts = styled.div`
  display: flex;
  width: calc((100% - 15px * 2 + 30px) / 2);
  gap: 15px;
  padding: 20px;
  border: 1px solid #272729;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
`;

export const FormContainer = styled.div`
  padding: 20px;
  width: calc((100% - 15px * 2 + 30px) / 2);
  border: 1px solid #272729;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.75);
`;

export const TextPrice = styled.p`
  margin-top: 20px;
  font-size: 1.2rem;
`;
