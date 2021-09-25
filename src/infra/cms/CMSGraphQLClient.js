import { GraphQLClient, gql as GraphQLTag } from 'graphql-request';

export const gql = GraphQLTag;
const CMSGraphQLClient = () => {
  const DatoCMSURL = 'https://graphql.datocms.com/';
  const TOKEN = process.env.DATO_CMS_TOKEN;
  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,

    },
  });
  return {
    async query({ query, variables }) {
      const messages = await client.request(query, variables);

      return {
        data: {
          messages,
        },
      };
    },
  };
};

export default CMSGraphQLClient;
