import { useState, useEffect } from "react";
import type { IProduct } from "../types/Product";
import getProducts from "../utils/getProducts";

export default function useSearchProducts(search: string, limit = 6) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!search.trim()) {
      setProducts([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getProducts({ search, limit });
        setProducts(data.products);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch search results");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search, limit]);

  return { products, loading, error };
}
