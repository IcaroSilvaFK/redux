import { Reducer } from "redux";
import produce from "immer";

import { ActionTypes, ICartProps } from "./types";

const INITIAL_STATE: ICartProps = {
  items: [],
  failedStockCheck: [],
};

export const cart: Reducer<ICartProps> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addProductToCardSuccess: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );
        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }
        break;
      }
      case ActionTypes.addProductToCardFailure: {
        draft.failedStockCheck.push(action.payload.productID);
        break;
      }
      default: {
        return draft;
      }
    }
  });
};
