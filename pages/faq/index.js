import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';
import WebsitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

const PageFAQ = ({ faqCategories }) => (
  <FAQScreen faqCategories={faqCategories} />
);

PageFAQ.propTypes = FAQScreen.propTypes;
export default WebsitePageHOC(PageFAQ, {
  pageWrapperProps: {
    seoProps: { headTitle: 'FAQ' },
  },
});
export async function getStaticProps() {
  const faqCategories = await fetch(
    'https://instalura-api.vercel.app/api/content/faq',
  )
    .then((res) => res.json())
    .then((resConvertida) => resConvertida.data);
  return {
    props: {
      faqCategories,
    },
  };
}
