import React, { useEffect, useRef } from "react";
import { socket } from "../realtime";
import { useDispatch } from "react-redux";
import { updateOrderbookData, updateTradeData } from "../features/globalSlice";


interface ITradeData {
  pair: string;
}

const TradeData = ({ pair }: ITradeData) => {
  console.log("TradeData pair", pair);

  const intervalRef = useRef<NodeJS.Timeout>();

  const dispatch = useDispatch()

  useEffect(() => {

    window.addEventListener("online", () => {
      setTimeout(() => {
        if (pair) {
          socket.subscribe(
            ['OB', 'RT', 'OT'],
            pair,
          );
        }
      }, 5000);
    });
  }, []);
  useEffect(() => {
    socket.subscribe(
      ['OB', 'RT', 'OT'],
      pair,
    );
    window.addEventListener("online", () => {
      setTimeout(() => {
        socket.subscribe(
          ['OB', 'RT', 'OT'],
          pair,
        );
      }, 5000);
    });
  }, [pair]);

  useEffect(() => {
    console.log("calling socket");

    const fetchData = async () => {
      console.log("getting fetchData");
      const handleOrderBook = (data: any) => {
        console.log("updateOrderbookData", data)
        dispatch(updateOrderbookData(data))
      };
      socket['on']('OB', handleOrderBook);
      const handleAllMatched = (data: any) => {
        console.log("trade data", data)
        dispatch(updateTradeData(data))

      };
      socket['on']('RT', handleAllMatched);

      const handleOrderBookTotal = (data: any) => {
        console.log("total data", data)
      };
      socket['on']('OT', handleOrderBookTotal);
    };

    fetchData();

    intervalRef.current = setInterval(() => {
      fetchData();
    }, 5000);

    // Clean up subscription on unmount
    // return () => {
    //   socket.off("MK");
    //   if (intervalRef.current) clearInterval(intervalRef.current);
    // };
  }, []);

  return null;
};

export default TradeData;
