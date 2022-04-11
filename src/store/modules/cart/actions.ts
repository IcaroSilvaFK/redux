import { ActionTypes, IProps } from "./types";

export function addProductToCardRequest(product: IProps) {
  return {
    type: ActionTypes.addProductToCardRequest,
    payload: { product },
  };
}

export function addProductToCardSucess(product: IProps) {
  return {
    type: ActionTypes.addProductToCardSuccess,
    payload: { product },
  };
}

export function addProductToCardFailure(productID: number) {
  return {
    type: ActionTypes.addProductToCardFailure,
    payload: { productID: productID },
  };
}
