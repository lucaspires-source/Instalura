import React from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import WebsitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import { Box } from '../src/components/foundation/layout/Box';
import { Grid } from '../src/components/foundation/layout/Grid';
import Text from '../src/components/foundation/Text';
import { TOKEN } from '../src/infra/env/apiTokenEnv';

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
const PageSobre = ({ messages }) => {
  console.log(messages);
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
    >
      <Grid.Container>
        <Grid.Row
          marginTop={{ xs: '32px', md: '120px' }}
          flex="1"
        >
          <Grid.Col
            value={{ xs: 12, md: 6, lg: 6 }}
            offset={{ md: 2 }}
            flex={1}
          >
            <Text
              variant="title"
              tag="h2"
              color="tertiary.main"
            >
              {messages.pageTitle}
            </Text>
            <Box>
              {messages.pageDescription}
            </Box>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
};

export default WebsitePageHOC(PageSobre, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Sobre' },
  },
});
