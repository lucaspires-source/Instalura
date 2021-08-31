import React from 'react';
import Main from '../src/components/commons/Main';
import SEO from '../src/components/commons/SEO';
import WebsitePageWrapper from '../src/components/wrappers/WebsitePage';

export default function Home() {
  return (
    <WebsitePageWrapper>
      <SEO headTitle="Home" />
      <Main />
    </WebsitePageWrapper>

  );
}
