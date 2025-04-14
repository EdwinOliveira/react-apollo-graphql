import { gql } from "@apollo/client";

const FIND_BOOK_BY_ID_QUERY = gql`
  query FindBookById($id: ID!) {
    findBookById(input: { id: $id }) {
      id
      designation
      description
    }
  }
`;

export { FIND_BOOK_BY_ID_QUERY };
