import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { TextStyleVartiansMap } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';
import Link from '../Link';

const ButtonGhost = css`
  background-color: transparent;
  color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;

const ButtonDefault = css`
  background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
  color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
`;

const ButtonWrapper = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;
  ${propToStyle('margin')}
  ${propToStyle('display')}
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  ${breakpointsMedia({
    xs: css`
    
    ${TextStyleVartiansMap.smallestException}
    `,
    md: css`
    ${TextStyleVartiansMap.paragraph1}
    
    `,
  })}

&:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }
  
  ${({ fullWidth }) => fullWidth && css`
      width: 100%;
  `};
`;

export function Button({ href, children, ...props }) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonWrapper as={tag} href={href} {...props}>
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};
