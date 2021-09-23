import { GraphQLClient, gql } from 'graphql-request';
import WebsitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import { TOKEN } from '../src/infra/env/apiTokenEnv';
import AboutScreen from '../src/components/screens/AboutScreen';

export async function getStaticProps() {
  const DatoCMSURL = 'https://graphql.datocms.com/';

  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,

    },
  });
  const query = gql`
    query {
      pageSobre {
        pageTitle
        pageDescription
      }
    }
  `;

  const messages = await client.request(query);

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
