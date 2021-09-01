import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../../../theme';
import { GlobalStyle } from '../../../../theme/GlobalStyle';

const WebsiteMasterProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default WebsiteMasterProvider;

WebsiteMasterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
