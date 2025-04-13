const typeDefs = `#graphql
  type Query {
    findBooks(): [Book]!
    findBookById(input: FindBookByIdInput!): Book!
  }

  type Mutation {
    createBook(input: CreateBookInput!): Book!
  }

  type FindBookByIdInput {
    id: ID!
  }

  type CreateBookInput {
    designation: String!
    description: String!
  }

  type Book {
    id: ID!
    designation: String!
    description: String!
  }
`;
