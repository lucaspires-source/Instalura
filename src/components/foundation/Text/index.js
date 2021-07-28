import styled, { css } from "styled-components";

export const TextStyleVartiansMap ={
  smallestException : css `
      font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
      font-weight: ${({ theme }) =>theme.typographyVariants.smallestException.font_weight};
      line-height: ${({ theme }) =>theme.typographyVariants.smallestException.lineHeight};
  
  `,
  paragraph1 : css `
      font-size:${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
      font-weight:${({ theme }) =>theme.typographyVariants.paragraph1.font_weight};
      line-height:${({ theme }) =>theme.typographyVariants.paragraph1.lineHeight};
  
  `


}

const TextBase = styled.span`
  ${(props) => TextStyleVartiansMap[props.variant]}
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
