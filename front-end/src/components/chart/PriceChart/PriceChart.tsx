import { useEffect, useState } from "react";
import { instance } from "../../../api";
// import { moment } from 'i18n';
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts';

export const timeFrames = {
  '7d': {
    interval: '60',
    limit: '168',
  },
  '3d': {
    interval: '60',
    limit: 72,
  },
  '1d': {
    interval: '60',
    limit: 24,
  },
};

export const PriceChartContainer = () => {
  const [chartData, setChartData] = useState([]);
  const [chartLoading, setChartLoading] = useState(true);
  // const [chartError, setChartError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data")
      setChartLoading(true);
      // setChartError(false);
      try {
        const {
          data: { data },
        } = await instance({
          url: '/market/get-chart-data',
          method: 'GET',
          data: {
            baseCurrency: "BTC",
            quoteCurrency: "USDT",
            timestamp: 1712658817015,
            interval: 60,
            limit: 168
          },
        });
        console.log("Data----------->", data)
        setChartLoading(false);
        if (data.length >= 1) {
          setChartData(data.reverse());
        } else {
          setChartData([]);
          // setChartError(true);
        }
      } catch (e) { }
    };

    fetchData();
  }, []);

  return (
    <PriceChart
      chartLoading={chartLoading}
      chartData={chartData}
      color={'primary'}
      sparkline={false}
    />
  );
}

const PriceChart = ({
  chartData,
  chartLoading,
  color = 'primary',
  sparkline = false,
}: any) => {

  if (sparkline && chartLoading) {
    return null;
  }

  return (
    <>
      {!chartLoading ? (
        <ResponsiveContainer>
          <ComposedChart
            data={chartData}
            margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
          >
            <defs>
              <linearGradient id={`color${color}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="10%" stopColor={`#ff0000`} stopOpacity={0.35} />
                <stop offset="100%" stopColor={`#ff0000`}  stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="time"
              type="number"
              // tickFormatter={timeStr =>
              //   moment
              //     .utc(timeStr)
              //     .local()
              //     .format('l')
              // }
              domain={['dataMin', 'dataMax']}
              tickLine={false}
              tick={{ fill: 'var(--defaultTextColor)' }}
              axisLine={{ stroke: 'var(--defaultTextColor)' }}
              hide={sparkline}
            />
            <YAxis
              orientation="right"
              dataKey="close"
              domain={['dataMin', 'dataMax']}
              tickLine={false}
              axisLine={{ stroke: 'var(--defaultTextColor)' }}
              tick={{ fill: 'var(--defaultTextColor)' }}
              hide={sparkline}
            />
            <Area
              type="monotone"
              dataKey="close"
              stroke={`#ff0000`} 
              fill={`url(#${`color${color}`})`}
              strokeWidth={3}
            />
            <Tooltip />
          </ComposedChart>
        </ResponsiveContainer>
      ) : (
        <></>
      )}
    </>
  );
};