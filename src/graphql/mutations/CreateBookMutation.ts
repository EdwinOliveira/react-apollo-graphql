import { gql } from "@apollo/client";

const CREATE_BOOK_MUTATION = gql`
  mutation CreateBook($designation: String!, $description: String!) {
    createBook(input: { designation: $designation, description: $description }) {
      id
      designation
      description
    }
  }
`;

export { CREATE_BOOK_MUTATION };
