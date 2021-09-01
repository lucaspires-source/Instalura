import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';
import WebsitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

const PageFAQ = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <FAQScreen {...props} />
);

export default WebsitePageHOC(PageFAQ, {
  pageWrapperProps: {
    seoProps: { headTitle: 'FAQ' },
  },
});
export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq').then(async (res) => {
    const response = await res.json();
    return response.data;
  });
  return {
    props: {
      faqCategories,
    },
  };
}
