/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import WebsitePageWrapper from '..';
import WebsiteGlobalProvider from '../provider';

// eslint-disable-next-line arrow-body-style
const WebsitePageHOC = (PageComponent, { pageWrapperProps }) => {
  return (props) => (
    <WebsiteGlobalProvider>
      <WebsitePageWrapper {...pageWrapperProps}>
        <PageComponent {...props} />
      </WebsitePageWrapper>
    </WebsiteGlobalProvider>
  );
};

export default WebsitePageHOC;
