import React from 'react';
import WebsitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import FAQQuestionScreen from '../../src/components/screens/FAQQuestionScreen';

const PageFAQInterna = ({ category, question }) => (
  <FAQQuestionScreen
    question={question}
    category={category}
  />
);
PageFAQInterna.propTypes = FAQQuestionScreen.propTypes;
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
