import { all, takeLatest, select, call, put } from "redux-saga/effects";
import { api } from "../../../configs/axios";
import {
  addProductToCardFailure,
  addProductToCardRequest,
  addProductToCardSucess,
} from "./actions";
import { ISate } from "../../";
import { AxiosResponse } from "axios";
import { ActionTypes } from "./types";

type CheckProductStockRequest = ReturnType<typeof addProductToCardRequest>;
interface IStockResponse {
  id: number;
  quantity: number;
}

function* chekProducStock({ payload }: CheckProductStockRequest): Generator {
  const { product } = payload;

  // @ts-ignore
  const currentQuantity: number = yield select((state: ISate) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    );
  });

  // @ts-ignore
  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `stock/${product.id}`
  );

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCardSucess(product));
    console.log("add");
  } else {
    yield put(addProductToCardFailure(product.id));
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCardRequest, chekProducStock),
]);

// takelatest cancela as execuções anteriores e sempre ultiliza a ultima
