import styled, { css } from "styled-components";
import PropTypes from 'prop-types';
import breakpointsMedia  from '../../../theme/utils/breakpointsMedia'
import propToStyle  from '../../../theme/utils/propToStyle';
import get from 'lodash/get'; 
export const TextStyleVartiansMap = {
  title: css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.titleXS.fontSize};
    font-weight: ${theme.typographyVariants.titleXS.fontWeight};
    line-height: ${theme.typographyVariants.titleXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographyVariants.title.fontSize};
        font-weight: ${theme.typographyVariants.title.fontWeight};
        line-height: ${theme.typographyVariants.title.lineHeight};
      `}
    `,
  })}
`,

  titleXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.titleXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.titleXS.font_weight};
    line-height: ${({ theme }) => theme.typographyVariants.titleXS.lineHeight};
  `,
  subTitle: css`
    font-size: ${({ theme }) => theme.typographyVariants.subTitle.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.subTitle.font_weight};
    line-height: ${({ theme }) => theme.typographyVariants.subTitle.lineHeight};
  `,

  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.paragraph1.font_weight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.paragraph1.lineHeight};
  `,
  paragraph2: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph2.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.paragraph2.font_weight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.paragraph2.lineHeight};
  `,

  smallestException: css`
    font-size: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.smallestException.font_weight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.smallestException.lineHeight};
  `,
};

const TextBase = styled.span`
  ${(props) => TextStyleVartiansMap[props.variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}
`;
const Text = ({ variant, tag, children, ...props }) => {
  return (
    <TextBase variant={variant} as={tag} {...props}>
      {children}
    </TextBase>
  );
};

Text.defaultProps = {
  tag: "span",
  variant: "paragraph1",
};

Text.propTypes ={
  tag:PropTypes.string.isRequired,
  variant:PropTypes.string.isRequired,
  children:PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['title', 'paragraph1', 'smallestException']),
}
export default Text;
