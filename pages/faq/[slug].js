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

export async function getStaticProps({ params }) {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then(async (res) => {
      const response = await res.json();
      return response.data;
    });
  const data = faqCategories.reduce((value, faqCategory) => {
    const foundQuestion = faqCategory.questions.find((question) => {
      if (question.slug === params.slug) {
        return true;
      }
      return false;
    });

    if (foundQuestion) {
      return {
        ...value,
        category: faqCategory,
        question: foundQuestion,
      };
    }
    return value;
  }, {});
  return {
    props: {
      category: data.category,
      question: data.question,
      pageWrapperProps: {
        seoProps: {
          headTitle: data.question.title,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then(async (res) => {
      const response = await res.json();
      return response.data;
    });

  const paths = faqCategories.reduce((value, faqCategory) => {
    const questionsPaths = faqCategory.questions.map((question) => {
      const questionSlug = question.slug;
      return { params: { slug: questionSlug } };
    });

    return [
      ...value,
      ...questionsPaths,
    ];
  }, []);

  return {
    paths,
    fallback: false,
  };
}
