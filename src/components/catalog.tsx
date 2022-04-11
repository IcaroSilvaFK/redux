import { useEffect, useState } from "react";

import { api } from "../configs/axios";
import { CatalgItem } from "./catalogItem";

export interface IProductProps {
  id: number;
  title: string;
  price: number;
}

export function Catalog() {
  const [catalog, setCatalog] = useState<IProductProps[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("products");

        setCatalog(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading Products</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Erro as missing</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Hello world catalog</h1>
      {catalog.map((product) => (
        <CatalgItem product={product} key={product.id} />
      ))}
    </div>
  );
}
