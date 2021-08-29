/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

const Link = ({ href, children, ...props }) => (
  <NextLink href={href}>
    <a {...props}>
      {children}
    </a>
  </NextLink>
);

export default Link;

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
