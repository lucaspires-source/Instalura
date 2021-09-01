import React from 'react';
import WebsitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

const style = {
  display: 'flex',
  justifyContent: 'center',
};
const Login = () => (
  <div style={style}>
    <img src="https://www.saojoaoevangelista.mg.leg.br/institucional/noticias/site-em-construcao/image" alt="paginaconstrucao" />
  </div>
);

export default WebsitePageHOC(Login, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Login' },
  },
});
