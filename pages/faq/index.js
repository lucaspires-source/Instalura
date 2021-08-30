import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';

const PageFAQ = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <FAQScreen {...props} />
);

export default PageFAQ;

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
