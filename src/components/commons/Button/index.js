import styled, { css } from "styled-components";

const ButtonGhost = css`
  background-color: transparent;
  color: #FB7B6B;
`;

const ButtonDefault = css`
  color: #fff;
  background-color: ${(props) =>{
      return props.theme.colors.primary
  }}

`;
export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;
  ${(props) => {
    if (props.ghost) {
      return ButtonGhost;
    } else {
      return ButtonDefault;
    }
  }}
  &:hover,
&:focus {
    opacity: 0.5;
  }
`;
