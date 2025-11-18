import { FlexBox } from '../../../components/common/FlexBox'
import AccountTitleText from '../../../components/common/text/AccountTitleText'
import ExportButton from '../../../components/button/ExportButton'
import { useAppSelector } from '../../../hooks'
import { instance } from '../../../api'
import { useEffect, useState } from 'react'
import TradeHistoryTable from './TradeHistoryTable'
import { CustomSelect } from '../../../components/common/CustomSelect'

const pairOptions = [
  { value: 'all', label: 'ALL' },
  { value: 'sell', label: 'AVA / USDT' },
  { value: 'buy', label: 'FET / BTC' },
];

const dateOptions = [
  { value: 'all', label: 'TODAY' },
  { value: 'sell', label: '1 MONTH' },
  { value: 'buy', label: '3 MONTHS' },
  { value: 'sell', label: '6 MONTHS' },
  { value: 'buy', label: 'CUSTOM' },
];
const sideOptions = [
  { value: 'all', label: 'ALL' },
  { value: 'limit-order', label: 'LIMIT ORDER' },
  { value: 'market-order', label: 'MARKET ORDER' },
  { value: 'stop-limit-order', label: 'STOP LIMIT ORDER' },
  { value: 'stop-market-order', label: 'STOP MARKET ORDER' },
  { value: 'oco-order', label: 'Trailing Stop Market' },
];

const TradeHistory = () => {
  const token = useAppSelector((state) => state.auth.accessToken)

  // const [history, setHistory] = useState<any>();
  const [selectedPair, setSelectedPair] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSide, setSelectedSide] = useState(null);



  useEffect(() => {
    if (token && token !== '') {
      getProfile()
    }
  }, [token])

  const getProfile = async () => {
    try {
      const { data } = await instance({
        url: '/api/TradeHistory?side=ALL&pair=ALL&page=1&count=20',
        method: 'GET',
        headers: {
          'Authorization': token
        }
      });
      if (data.status === "Success") {
        console.log("history data", data.data)
        // setHistory(data.data);
      }

    } catch (err) {
      console.error("err", err)
    }
  }
  const handlePairChange = (selectedOption: any) => {
    setSelectedPair(selectedOption);
  };

  const handleDateChange = (selectedOption: any) => {
    setSelectedDate(selectedOption);
  };

  const handleSideChange = (selectedOption: any) => {
    setSelectedSide(selectedOption);
  };
  return (
    <FlexBox direction="column" gap="30px">
      <FlexBox justifyContent='space-between' alignItems='center'>
        <AccountTitleText
          text="Trade History"
        />
        <ExportButton />


      </FlexBox>
      <FlexBox justifyContent="start" gap="10px">
        <CustomSelect
          defaultValue={selectedDate}
          onChange={handleDateChange}
          options={dateOptions}
          placeholder="Date..."
        />
        <CustomSelect
          defaultValue={selectedPair}
          onChange={handlePairChange}
          options={pairOptions}
          placeholder="Pair..."
        />
        <CustomSelect
          defaultValue={selectedSide}
          onChange={handleSideChange}
          options={sideOptions}
          placeholder="Side..."
        />

      </FlexBox>
      <TradeHistoryTable
        mockData={
          new Array(50).fill({
            date: "1CAT/USDT",
            pair: 123,
            size: 123,
            side: 123,
            price: 123,
            executedValue: 123,
            fee: 123,
          })
        }
      />
    </FlexBox>
  )
}

export default TradeHistory