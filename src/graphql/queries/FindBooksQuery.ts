import { gql } from "@apollo/client";

const FIND_BOOKS_QUERY = gql`
  query FindBooks {
    findBooks {
      id
      designation
      description
    }
  }
`;

export { FIND_BOOKS_QUERY };
