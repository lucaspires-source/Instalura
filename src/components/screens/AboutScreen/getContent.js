import { GraphQLClient, gql } from 'graphql-request';

export async function getContent() {
  const DatoCMSURL = 'https://graphql.datocms.com/';
  const TOKEN = process.env.DATO_CMS_TOKEN;

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

  return messages;
}
