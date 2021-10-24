/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getKitchenItem = /* GraphQL */ `
  query GetKitchenItem($id: ID!) {
    getKitchenItem(id: $id) {
      id
      name
      description
      image
      price
      createdAt
      updatedAt
    }
  }
`;
export const listKitchenItems = /* GraphQL */ `
  query ListKitchenItems(
    $filter: ModelKitchenItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKitchenItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
