import { FlexBox } from '../../components/common/FlexBox'
import AccountTitleText from '../../components/common/text/AccountTitleText'
import SearchableSelect from '../../components/select/SearchableSelect'
import CustomButton from '../../components/common/CustomButton'
import AddressManagementTable from '../../components/table/AddressManagementTable'
import { globalFonts } from '../../constants/fonts.constant'
import styled from 'styled-components'

const MarketTab = styled.div`
  color: #55535B;
  font-family: ${globalFonts.Poppins};
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
  &:hover{
    color: black;
    font-weight: 600;
    &:after {
      content: ""; /* This is necessary for the pseudo element to work. */ 
      display: block; /* This will put the pseudo element on its own line. */
      margin: 0 auto; /* This will center the border. */
      width: 50%; 
      padding-top: 10px; 
      border-bottom: 2px solid black;
    }
  }
`

const WalletHistory = () => {
  return (
    <FlexBox direction="column" gap="30px">
      <FlexBox justifyContent='space-between' alignItems='center'>
        <AccountTitleText
          text="History"
        />
      </FlexBox>
      <FlexBox gap='25px' smDirection='row' justifyContent='start'>
        {
          ["Deposit History", "Withdraw History"].map((tab: string, index: number) => {
            return (
              <MarketTab key={index}>
                {tab}
              </MarketTab>
            )
          })
        }
      </FlexBox>
      <FlexBox justifyContent='start' gap="10px">
        <SearchableSelect
          items={[
            "AVAX", "USDT"
          ]}
          searchField='time'
        />
        <SearchableSelect
          items={[
            "AVAX", "USDT"
          ]}
          searchField='all status'
        />
        <SearchableSelect
          items={[
            "AVAX", "USDT"
          ]}
          searchField='All Coins'
        />
        <CustomButton
          text="CSV Download"
          fontSize='14px'
          lineHeight='24px'
          height='40px'
          width='155px'
        />

      </FlexBox>
      <AddressManagementTable
        mockData={
          new Array(50).fill({
            addressLevel: "1CAT/USDT",
            coin: 123,
            address: "TXTBEY1bcc62gMLybc3GtSpwpRdmjKzHzJ",
            network: 123,
            memo: 123,
            addressOrigin: 123,
          })
        }
      />
    </FlexBox>
  )
}

export default WalletHistory