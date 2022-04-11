import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ISate } from "../store";
import { addProductToCardRequest } from "../store/modules/cart/actions";

export interface IProductProps {
  id: number;
  title: string;
  price: number;
}

interface IcatalogProps {
  product: IProductProps;
}

export function CatalgItem({ product }: IcatalogProps) {
  const dispatch = useDispatch();

  const hasFAiledStockCheck = useSelector<ISate, boolean>((state) => {
    return state.cart.failedStockCheck.includes(product.id);
  });
  console.log(hasFAiledStockCheck);
  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCardRequest(product));
  }, [dispatch, product]);
  console.log("a");

  return (
    <div key={product.id}>
      <strong>{product.title}</strong>
      <span>{product.price}</span>
      &nbsp;
      <button onClick={handleAddProductToCart}>Add to cart</button>
      {hasFAiledStockCheck && (
        <span style={{ color: "red" }}>Falta de estoque</span>
      )}
    </div>
  );
}
