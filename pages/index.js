import Main from '../src/components/commons/Main';
import WebsitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export default WebsitePageHOC(Main, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Home' },
    menuProps: { display: false },
  },
});
