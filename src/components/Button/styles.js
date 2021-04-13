import styled from "styled-components";

export const StyledButton = styled.button`
  background: white;
  border-radius: 10px;
  border: 1px solid black;

  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  &:active {
    background-color: #eeeeee;
  }
`;
