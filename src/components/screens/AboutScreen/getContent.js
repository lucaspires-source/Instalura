import CMSGraphQLClient from '../../../infra/cms/CMSGraphQLClient';

export async function getContent() {
  const query = gql`
          query {
            pageSobre {
              pageTitle
              pageDescription
            }
          }
        `;
  const client = CMSGraphQLClient();
  const res = await client.query({ query });

  return res.data.messages;
}

const DatoCMSURL = 'https://graphql.datocms.com/';
const TOKEN = process.env.DATO_CMS_TOKEN;
const client = new GraphQLClient(DatoCMSURL, {
  headers: {
    Authorization: `Bearer ${TOKEN}`,

  },
});
