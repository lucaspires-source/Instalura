import React from 'react';
import WebsitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

const PageFAQInterna = () => {
  console.log('oi');
  return (
    <div>
      Faq Interna
    </div>
  );
};

export default WebsitePageHOC(PageFAQInterna);

export async function getStaticProps() {
  return {
    props: {

    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [

    ],
  };
}
