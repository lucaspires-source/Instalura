import React from 'react';
import WebsitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

const style = {
  display: 'flex',
  justifyContent: 'center',
};
const PageSobre = () => (
  <div style={style}>
    <img src="https://www.saojoaoevangelista.mg.leg.br/institucional/noticias/site-em-construcao/image" alt="paginaconstrucao" />
  </div>
);

export default WebsitePageHOC(PageSobre, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Sobre' },
  },
});
