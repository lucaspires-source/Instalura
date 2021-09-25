import WebsitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import AboutScreen from '../src/components/screens/AboutScreen';
import { getContent } from '../src/components/screens/AboutScreen/getContent';

export async function getStaticProps() {
  const messages = await getContent();

  return {
    props: {
      messages,
    },
  };
}

export default WebsitePageHOC(AboutScreen, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Sobre' },
  },
});
