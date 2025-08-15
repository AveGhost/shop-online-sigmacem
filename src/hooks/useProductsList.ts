import { useState, useEffect } from 'react';
import type { IProduct } from '../types/Product';

type FetchFn = () => Promise<{ products: IProduct[] }>;

export default function useProductsList(fetchFn: FetchFn) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchFn();
        if (isMounted) {
          setProducts(data.products);
        }
      } catch (err) {
        if (isMounted) {
          setError('Error while fetching products');
          console.error(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [fetchFn]);

  return { products, loading, error };
}