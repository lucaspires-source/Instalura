import styled, { css } from "styled-components";

const TextBase = styled.span`
  ${(props) => {
    if (props.variant === "smallestException") {
      return css`
    font-size:${({ theme }) =>
      theme.typographyVariants.smallestException.fontSize};
    font-weight${({ theme }) =>
      theme.typographyVariants.smallestException.font_weight};
    line-height:${({ theme }) =>
      theme.typographyVariants.smallestException.lineHeight};
  `
    }
  }}
`;
const Text = ({ variant, tag, children }) => {
  return (
    <TextBase variant={variant} as={tag}>
      {children}
    </TextBase>
  );
};

Text.defaultProps = {
  tag: "span",
  variant: "paragraph1",
};
export default Text;
