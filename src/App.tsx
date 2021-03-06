import { Provider } from "react-redux";

import { store } from "./store";

import { Catalog } from "./components/catalog";
import { Cart } from "./components/cart";

function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
}

export default App;
