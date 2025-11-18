import { FlexBox } from '../../../components/common/FlexBox'
import AccountTitleText from '../../../components/common/text/AccountTitleText'
import ExportButton from '../../../components/button/ExportButton'
import { useAppSelector } from '../../../hooks'
import { useEffect, useState } from 'react'
import { instance } from '../../../api'
import OrderHistoryTable from './OrderHistoryTable'
import { CustomSelect } from '../../../components/common/CustomSelect'

const dateOptions = [
  { value: 'today', label: 'TODAY' },
  { value: '1', label: '1 MONTH' },
  { value: '3', label: '3 MONTHS' },
  { value: '6', label: '6 MONTHS' },
  { value: 'custom', label: 'CUSTOM' },
];
const pairOptions = [
  { value: 'all', label: 'ALL' },
  { value: 'sell', label: 'AVA / USDT' },
  { value: 'buy', label: 'FET / BTC' },
];

const typeOptions = [
  { value: 'all', label: 'ALL' },
  { value: 'sell', label: 'SELL' },
  { value: 'buy', label: 'Buy' },
];

const sideOptions = [
  { value: 'all', label: 'ALL' },
  { value: 'limit-order', label: 'LIMIT ORDER' },
  { value: 'market-order', label: 'MARKET ORDER' },
  { value: 'stop-limit-order', label: 'STOP LIMIT ORDER' },
  { value: 'stop-market-order', label: 'STOP MARKET ORDER' },
  { value: 'oco-order', label: 'Trailing Stop MarketR' },
];
const statusOptions = [
  { value: 'all', label: 'ALL' },
  { value: 'completed', label: 'COMPLETED' },
  { value: 'cancelled', label: 'CANCELLED' },
];

const OrderHistory = () => {
  const token = useAppSelector((state) => state.auth.accessToken)

  // const [history, setHistory] = useState<any>();
  const [selectedPair, setSelectedPair] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedSide, setSelectedSide] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  useEffect(() => {
    if (token && token !== '') {
      getProfile()
    }
  }, [token])

  const getProfile = async () => {
    try {
      const { data } = await instance({
        url: '/api/OrderHistory?side=ALL&pair=ALL&page=1&count=20',
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

  const handleTypeChange = (selectedOption: any) => {
    setSelectedType(selectedOption);
  };

  const handleSideChange = (selectedOption: any) => {
    setSelectedSide(selectedOption);
  };
  const handleDateChange = (selectedOption: any) => {
    setSelectedDate(selectedOption);
  };
  const handleStatusChange = (selectedOption: any) => {
    setSelectedStatus(selectedOption);
  };

  return (
    <FlexBox direction="column" gap="30px">
      <FlexBox justifyContent='space-between' alignItems='center'>
        <AccountTitleText
          text="Order History"
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
        <CustomSelect
          defaultValue={selectedType}
          onChange={handleTypeChange}
          options={typeOptions}
          placeholder="Type..."
        />
        <CustomSelect
          defaultValue={selectedStatus}
          onChange={handleStatusChange}
          options={statusOptions}
          placeholder="Status..."
        />
      </FlexBox>
      <OrderHistoryTable
        mockData={
          new Array(50).fill({
            date: "1CAT/USDT",
            pair: 123,
            type: 123,
            side: 123,
            price: 123,
            size: 123,
            executedValue: 123,
            fee: 123,
            status: 123,
          })
        }
      />
    </FlexBox>
  )
}

export default OrderHistory