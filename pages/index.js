import React from 'react';
import Main from '../src/components/commons/Main';
import WebsitePageWrapper from '../src/components/wrappers/WebsitePage';

export default function Home() {
  return (
    <WebsitePageWrapper seoProps={{ headTitle: 'Home' }}>
      <Main />
    </WebsitePageWrapper>

  );
}
