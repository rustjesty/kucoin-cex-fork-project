import React, { useEffect, useRef } from "react";
import { socket } from "../realtime";
import { useDispatch } from "react-redux";
import { updateMarketData } from "../features/globalSlice";

const MarketData: React.FC = () => {
  console.log("MarketData");

  const intervalRef = useRef<NodeJS.Timeout>();

  const dispatch = useDispatch()

  useEffect(() => {
    socket.subscribe("MK");
    window.addEventListener("online", () => {
      setTimeout(() => {
        socket.subscribe("MK");
      }, 5000);
    });
  }, []);

  useEffect(() => {
    console.log("calling socket");

    const fetchData = async () => {
      console.log("calling fetchData");
      socket.on('MK', (data) => {
        console.log('MK event data:', data);
        dispatch(updateMarketData(data));
      });
      // socket.on('OT.ADA_USDT', (data) => {
      //   console.log('total data===>', data);
      // });
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

export default MarketData;
