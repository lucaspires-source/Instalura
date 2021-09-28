import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import React, { useContext } from 'react';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';
import Link from '../../commons/Link';
import { WebsitePageContext } from '../../wrappers/WebsitePage/context';

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
    font-weight: ${({ theme }) => theme.typographyVariants.subTitle.font_weight};
    line-height: ${({ theme }) => theme.typographyVariants.subTitle.lineHeight};
  `,

  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.font_weight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,
  paragraph2: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph2.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph2.font_weight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph2.lineHeight};
  `,

  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.font_weight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
};

const TextBase = styled.span`
  ${(props) => TextStyleVartiansMap[props.variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}
`;
const Text = ({
  variant, tag, children, href, cmsKey, ...props
}) => {
  const websitePageContext = useContext(WebsitePageContext);
  const componentContent = cmsKey ? websitePageContext.getCMSContent(cmsKey) : children;
  if (props.href) {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <TextBase href={href} variant={variant} as={Link} {...props}>
        {componentContent}
      </TextBase>
    );
  }
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextBase variant={variant} as={tag} {...props} href={href}>
      {componentContent}
    </TextBase>
  );
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: '',
  cmsKey: null,
};

Text.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['title', 'paragraph1', 'smallestException', 'subTitle', 'paragraph2']),
  href: PropTypes.string,
  cmsKey: PropTypes.string,
};
export default Text;
