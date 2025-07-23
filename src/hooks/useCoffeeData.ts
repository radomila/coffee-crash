import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import type { CoffeeProps } from '../types.ts';

export function useCoffeeData() {
  const [coffeeData, setCoffeeData] = useState<CoffeeProps[] | null>([]);
  const [error, setError] = useState<object>();
  const [loading, setLoading] = useState<boolean>(false);

  const apiUrl = import.meta.env.VITE_API_COFFEE_URL;

  useEffect(() => {
    getCoffeeData();
  }, []);

  async function getCoffeeData() {
    setLoading(true);
    try {
      const res = await axios.get(apiUrl);
      console.log(res.data);
      setCoffeeData(res.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    coffeeData,
    isLoading: loading,
    error,
  };
}
