import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash/get';

const StyledLink = styled.a`
color:inherit;
${({ theme, color }) => (color
    ? `color:${get(theme, `colors.${color}.color`)}`
    : 'color:inherit;')}
    text-decoration: none;
    opacity:1;
    transition:opacity ${({ theme }) => theme.transition};
    &:hover,&:focus{
        opacity:.5;
    }
`;
const Link = ({ href, children, ...props }) => (
  <NextLink href={href} passHref>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <StyledLink {...props}>
      {children}
    </StyledLink>
  </NextLink>
);

export default Link;

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
