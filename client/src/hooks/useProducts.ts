import { useState, useEffect } from 'react';

export interface Product {
  id: string;
  name: string;
  price: string;
  currency: string;
  moq: number;
  material: string;
  colors?: string[];
  description: string;
  weight?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  products: Product[];
}

export interface ProductsData {
  company: {
    name: string;
    chineseName: string;
    established: number;
    location: string;
    description: string;
    contact: {
      phone: string;
      email: string;
    };
  };
  categories: Category[];
}

export function useProducts() {
  const [data, setData] = useState<ProductsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch('/products.json');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!cancelled) {
          setData(json);
          setError(null);
        }
      } catch (err: any) {
        if (!cancelled) {
          setError(err.message ?? 'Failed to load products');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  return { data, loading, error };
}
