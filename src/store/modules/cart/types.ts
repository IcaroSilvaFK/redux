export enum ActionTypes {
  addProductToCardRequest = "ADD_PRODUCT_TO_CART_REQUEST",
  addProductToCardSuccess = "ADD_PRODUCT_TO_CART_SUCCESS",
  addProductToCardFailure = "ADD_PRODUCT_TO_CART_FAILURE",
}

export interface IProps {
  id: number;
  title: string;
  price: number;
}

export interface ICartItems {
  product: IProps;
  quantity: number;
}
export interface ICartProps {
  items: ICartItems[];
  failedStockCheck: number[];
}
