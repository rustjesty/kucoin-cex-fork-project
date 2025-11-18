import { createContext, PropsWithChildren, useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';

interface GlobalContextValues {
  pricesData: any;
}

export const GlobalContext = createContext<GlobalContextValues>({
  pricesData: {},
});

export const GlobalProvider = ({ children }: PropsWithChildren) => {
  const [pricesData, setPricesData] = useState({});

  const fetchPricesData = useCallback(async () => {
    try {
      const { data } = await axios.get("https://nodes.oxfx.io/api/get_coin_stats");
      console.log("fetch prices data", data)
      if (data.status && data.status === 'Success') setPricesData(data.data);
    } catch (err) {
      console.log("fetchPricesData ERROR", err);
    }
  }, []);

  useEffect(() => {
    fetchPricesData();
  }, []);

  return (
    <GlobalContext.Provider value={{ pricesData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
