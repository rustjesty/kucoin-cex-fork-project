import styled from 'styled-components'
import { FlexBox } from '../../../components/common/FlexBox'
import AccountTitleText from '../../../components/common/text/AccountTitleText'
import CustomImage from '../../../components/common/CustomImage'
import CheckBox from '../../../components/CheckBox'
import CustomSearchInput from '../../../components/common/CustomSearchInput'
import ExportButton from '../../../components/button/ExportButton'
import CustomButton from '../../../components/common/CustomButton'
import { instance } from '../../../api'
import { useAppSelector } from '../../../hooks'
import { useEffect, useState } from 'react'
import WalletAddressBookTable from './WalletAddressBookTable'
import AddWithdrawalAddrModal from '../../../components/modal/AddWithdrawalAddrModal'
import { CustomSelect } from '../../../components/common/CustomSelect'

const WhitelistDisabledText = styled.span`
  color: #55535B;
  font-family: Aeroport;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
`

const coinOptions = [
  { value: 'sol', label: 'SOL' },
  { value: 'eth', label: 'ETH' },
  { value: 'btc', label: 'BTC' },
];

const WalletAddressBook = () => {
  const token = useAppSelector((state) => state.auth.accessToken)

  const [history, setHistory] = useState<any[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false)
  const [selectedCoin, setSelectedCoin] = useState(null);
  
  useEffect(() => {
    if (token && token !== '') {
      getAddressBookData()
    }
  }, [token])

  const handleCoinChange = (selectedOption: any) => {
    setSelectedCoin(selectedOption);
  };

  const getAddressBookData = async () => {
    console.log("calling getAddressBookData...")
    try {
      const { data } = await instance({
        url: '/api/Get_AddressBook',
        method: 'POST',
        headers: {
          'Authorization': token
        },
        data: { Currency: "ALL" }
      });
      if (data.status === "Success") {
        console.log("fetch addressbook data ===> ", data.data)
        setHistory(data.data)
      }
    } catch (err) {
      console.error("err", err)
    }
  }

  return (
    <FlexBox direction="column" gap="30px">
      <FlexBox justifyContent='space-between' alignItems='center'>
        <AccountTitleText
          text="Address Management"
        />
      </FlexBox>
      <FlexBox justifyContent='start' alignItems='center' gap="10px">
        <CheckBox />
        <WhitelistDisabledText>Whitelist disabled</WhitelistDisabledText>
        <CustomImage
          image="/assets/images/icons/help.svg"
          width='16px'
          height='16px'
        />
      </FlexBox>
      <FlexBox justifyContent='space-between' alignItems='center' gap="10px" smAlignItems='center'>
        <FlexBox justifyContent='start' gap="10px">
          <CustomSelect
            defaultValue={selectedCoin}
            onChange={handleCoinChange}
            options={coinOptions}
            placeholder="Coin"
          />
          <CustomSearchInput
            maxWidth='289px'
            bgColor='white'
          />

        </FlexBox>
        <FlexBox justifyContent='end' gap="10px">
          <ExportButton />
          <CustomButton
            text="Add address"
            fontSize='14px'
            lineHeight='24px'
            height='40px'
            width='155px'
            onClick={() => {
              setShowModal(true)
            }}
          />
        </FlexBox>
      </FlexBox>
      <WalletAddressBookTable
        mockData={
          history
        }
      />
      <AddWithdrawalAddrModal
        show={showModal}
        onClose={() => {
          setShowModal(false)
        }}
      />
    </FlexBox>
  )
}

export default WalletAddressBook