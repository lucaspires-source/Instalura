/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

/* eslint-disable react/destructuring-assignment */
import React from 'react';
import WebsitePageWrapper from '..';
import WebsiteGlobalProvider from '../provider';

// eslint-disable-next-line max-len
const WebsitePageHOC = (PageComponent, { pageWrapperProps } = { pageWrapperProps: {} }) => (props) => (
  <WebsiteGlobalProvider>
    <WebsitePageWrapper {...pageWrapperProps} {...props.pageWrapperProps}>
      <PageComponent {...props} />
    </WebsitePageWrapper>
  </WebsiteGlobalProvider>
);

export default WebsitePageHOC;
