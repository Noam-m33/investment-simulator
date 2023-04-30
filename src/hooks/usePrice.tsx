import { useState, useEffect } from "react";

interface PriceData {
  BTC: number;
  ETH: number;
}

interface PriceHook {
  data: PriceData | null;
  loading: boolean;
  error: Error | null;
}

const usePrice = (): PriceHook => {
  const [data, setData] = useState<PriceData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPriceData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/getCryptoPrices");
        const { data } = await response.json();
        setData({
          BTC: Math.floor(data.BTC[0].quote.USD.price),
          ETH: Math.floor(data.ETH[0].quote.USD.price),
        });
        setLoading(false);
      } catch (error: Error | any) {
        setError(error);
        console.error("error");
        setLoading(false);
      }
    };
    fetchPriceData();
  }, []);

  return { data, loading, error };
};

export default usePrice;
