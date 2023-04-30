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

  const apiKey = import.meta.env.VITE_APP_COINMARKETCAP_API_KEY as string;

  useEffect(() => {
    const fetchPriceData = async () => {
      setLoading(true);
      try {
        const response = await fetch("api/v2/cryptocurrency/quotes/latest?symbol=BTC,ETH", {
          headers: {
            "X-CMC_PRO_API_KEY": apiKey,
            "Content-Type": "application/json",
          },
        });
        const { data } = await response.json();
        setData({ BTC: data.BTC[0].quote.USD.price, ETH: data.ETH[0].quote.USD.price });
        setLoading(false);
      } catch (error: Error | any) {
        setError(error);
        setLoading(false);
      }
    };
    fetchPriceData();
  }, []);

  return { data, loading, error };
};

export default usePrice;
