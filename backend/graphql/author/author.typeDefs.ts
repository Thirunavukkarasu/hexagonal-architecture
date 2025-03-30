export const authorTypeDefs = `#graphql
  type Author {
    id: ID!
    name: String!
    posts: [Post!]!
  }

  type Query {
    getAuthors: [Author!]!
  }

  type Mutation {
    createAuthor(name: String!): Author!
  }
`;
