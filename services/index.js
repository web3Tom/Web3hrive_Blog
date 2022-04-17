import { request, gql } from "graphql-request";
import { GraphQLClient } from "graphql-request";

// const graphcms = new GraphQLClient(
//   "https://api-us-east-1.graphcms.com/v2/cl1uz79iwcfqc01xk2eb8498t/master"
// );

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featured_image {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};
