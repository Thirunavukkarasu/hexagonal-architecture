export const postTypeDefs = `#graphql
  type Post {
    id: ID!
    title: String!
    content: String!
    author: Author!
  }

  type Query {
    getPosts: [Post!]!
  }

  type Mutation {
    createPost(title: String!, content: String!, authorId: ID!): Post!
  }
`;
