import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../../../theme';
import { GlobalStyle } from '../../../../theme/GlobalStyle';

const WebsiteGlobalProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default WebsiteGlobalProvider;

WebsiteGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
