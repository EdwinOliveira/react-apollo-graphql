const typeDefs = `#graphql
  type Query {
    findBooks(): [Book]!
    findBookById(input: FindBookByIdInput!): Book!
  }

  type Mutation {
    createBook(input: CreateBookInput!): Book!
  }

  type FindBookByIdInput {
    id: Int!
  }

  type CreateBookInput {
    designation: String!
    description: String!
  }

  type Book {
    id: Int!
    designation: String!
    description: String!
  }
`;

export { typeDefs };
