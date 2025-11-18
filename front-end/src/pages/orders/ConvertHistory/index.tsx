import { FlexBox } from '../../../components/common/FlexBox'
import AccountTitleText from '../../../components/common/text/AccountTitleText'
import ExportButton from '../../../components/button/ExportButton'
import { instance } from '../../../api'
import { useAppSelector } from '../../../hooks'
import { useEffect, useState } from 'react'
import ConvertHistoryTable from './ConvertHistoryTable'
import { CustomSelect } from '../../../components/common/CustomSelect'

const dateOptions = [
  { value: 'today', label: 'TODAY' },
  { value: '1', label: '1 MONTH' },
  { value: '3', label: '3 MONTHS' },
  { value: '6', label: '6 MONTHS' },
  { value: 'custom', label: 'CUSTOM' },
];
const statusOptions = [
  { value: 'all', label: 'ALL' },
  { value: 'completed', label: 'COMPLETED' },
  { value: 'cancelled', label: 'CANCELLED' },
];



const ConvertHistory = () => {
  const token = useAppSelector((state) => state.auth.accessToken)

  // const [history, setHistory] = useState<any>();
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
        url: '/api/get_insta_trades',
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
          text="Convert History"
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
          defaultValue={selectedStatus}
          onChange={handleStatusChange}
          options={statusOptions}
          placeholder="Status..."
        />
      </FlexBox>
      <ConvertHistoryTable
        mockData={
          new Array(50).fill({
            date: "1CAT/USDT",
            amountPurchased: 123,
            amountSpent: 123,
            price: 123,
            status: 123,
          })
        }
      />
    </FlexBox>
  )
}

export default ConvertHistory