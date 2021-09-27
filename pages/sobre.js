import WebsitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import AboutScreen from '../src/components/screens/AboutScreen';
import { getContent } from '../src/components/screens/AboutScreen/getContent';

export async function getStaticProps({ preview }) {
  const messages = await getContent({ preview });

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
