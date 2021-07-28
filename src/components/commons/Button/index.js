import styled, { css } from "styled-components";
import get from "lodash/get";
import { TextStyleVartiansMap } from "../../foundation/Text";
const ButtonGhost = css`
  background-color: transparent;
  color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
`;

const ButtonDefault = css`
  background-color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
  color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.contrastText`);
  }};
`;
export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;
  ${TextStyleVartiansMap.smallestException}
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
