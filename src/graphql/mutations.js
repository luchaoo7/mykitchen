/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createKitchenItem = /* GraphQL */ `
  mutation CreateKitchenItem(
    $input: CreateKitchenItemInput!
    $condition: ModelKitchenItemConditionInput
  ) {
    createKitchenItem(input: $input, condition: $condition) {
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
export const updateKitchenItem = /* GraphQL */ `
  mutation UpdateKitchenItem(
    $input: UpdateKitchenItemInput!
    $condition: ModelKitchenItemConditionInput
  ) {
    updateKitchenItem(input: $input, condition: $condition) {
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
export const deleteKitchenItem = /* GraphQL */ `
  mutation DeleteKitchenItem(
    $input: DeleteKitchenItemInput!
    $condition: ModelKitchenItemConditionInput
  ) {
    deleteKitchenItem(input: $input, condition: $condition) {
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
