import CMSGraphQLClient, { gql } from '../../../infra/cms/CMSGraphQLClient';

export async function getContent({ preview }) {
  const query = gql`
          query {
            pageSobre {
              pageTitle
              pageDescription
            }
          }
        `;
  const client = CMSGraphQLClient({ preview });
  const res = await client.query({ query });

  return res.data.messages;
}
