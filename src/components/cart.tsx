import { useSelector } from "react-redux";
import { ISate } from "../store";
import { ICartItems } from "../store/modules/cart/types";

export function Cart() {
  const state = useSelector<ISate, ICartItems[]>((state) => state.cart.items);

  console.log(state);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item) => (
            <tr key={item.product.id}>
              <td>{item.product.title}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>{(item.product.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
