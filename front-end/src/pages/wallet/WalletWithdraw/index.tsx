import { FlexBox } from '../../../components/common/FlexBox'
import AccountTitleText from '../../../components/common/text/AccountTitleText'
import SearchableSelect from '../../../components/select/SearchableSelect'
import styled from 'styled-components'
import AccountSubjectText from '../../../components/common/text/AccountSubjectText'
import ViewAllButton from '../../../components/button/ViewAllButton'
import CustomSearchInput from "../../../components/common/CustomSearchInput"
import CustomText from "../../../components/common/CustomText"
import { COLORS_CONSTANT } from "../../../constants/colrs.constant"
import { globalFonts } from '../../../constants/fonts.constant'
import BadgeText from '../../../components/text/BadgeText'
import { useEffect, useState } from 'react'
import { instance } from '../../../api'
import { useAppSelector } from '../../../hooks'
import WalletWithdrawTable from './WalletWithdrawTable'


const LabelText = styled.span`
  color: #55535B;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 14.327px; /* 143.272% */
  text-transform: uppercase;
`

const WalletInputBox = styled.div`
  border-radius: 8px;
  border: 1px solid #DEE1E1;
  background: #FAFAFB;
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  white-space: nowrap;

  input{
    border: none;
    outline: none;
    color: ${COLORS_CONSTANT.secondary};
    background-color: #FAFAFB;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 240% */
    text-transform: uppercase;
    &::placeholder{
      color: rgba(85, 83, 91, 0.50);
    }
  }
`

const MarketTab = styled.div`
  color: #55535B;
  font-family: ${globalFonts.Poppins};
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
  &.active{
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


const WalletWithdraw = () => {
  const token = useAppSelector((state) => state.auth.accessToken)
  const [activeTab, setActiveTab] = useState<string>("Wallet Address");
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    if (token && token !== '') {
      getWithdrawHistory()
    }
  }, [token])

  const getWithdrawHistory = async () => {
    try {
      const { data } = await instance({
        url: 'api/GetWithdrawals',
        method: 'POST',
        headers: {
          'Authorization': token
        },
        data: { currency: "ALL" }
      });
      if (data.status === "Success") {
        console.log("data.data.withdrawals", data.data.withdrawals)

        const filteredData = data.data.withdrawals.map((item: any) => ({
          withdrawalType: item.withdrawalType,
          withdrawalAddress: item.withdrawalAddress,
          withdrawalStatus: item.withdrawalStatus,
          withdrawalAmount: item.withdrawalAmount,
          withdrawalReqDate: item.withdrawalReqDate,
        }));

        console.log("filteredData", filteredData)
        setHistory(filteredData);
      }

    } catch (err) {
      console.error("err", err)
    }
  }

  return (
    <FlexBox direction="column" gap="30px">
      <FlexBox justifyContent='space-between' alignItems='center'>
        <AccountTitleText
          text="Withdraw Crypto"
        />
      </FlexBox>

      <FlexBox>
        <FlexBox maxWidth="360px" direction="column" gap="24px">
          <FlexBox direction='column' gap="8px">
            <LabelText>Select coin</LabelText>
            <SearchableSelect
              items={
                ["USDT", "USDT"]
              }
              searchField="Subject"
              width='100%'
            />
            <FlexBox justifyContent='start' gap="8px">
              <BadgeText text="BITCOIN" />
              <BadgeText text="ETH" />
              <BadgeText text="BTC" />
              <BadgeText text="TRX" />
            </FlexBox>
          </FlexBox>
          <FlexBox direction='column' gap="16px">
            <FlexBox justifyContent="start" gap="25px" borderBottom='1px solid rgba(208, 208, 208, 0.50)'>
              {
                ["Wallet Address", "OXFX User"].map((tab: string, index: number) => {
                  return (
                    <MarketTab
                      key={index}
                      className={tab === activeTab ? 'active' : ''}
                      onClick={() => {
                        setActiveTab(tab)
                      }}
                    >
                      {tab}
                    </MarketTab>
                  )
                })
              }
            </FlexBox>
            <FlexBox direction="column" gap="8px">
              <LabelText>Wallet Address</LabelText>
              <WalletInputBox>
                <input
                  placeholder="WALLET ADDRESS"
                />
                <CustomText
                  borderLeft="#33C4AC 1px solid"
                  text="Save Addresses"
                  paddingLeft="12px"
                  color="#33C4AC"
                  fontFamily="Poppins"
                  fontSize="14px"
                  fontWeight="500"
                  lineHeight="24px"
                  width="125px"
                />
              </WalletInputBox>
            </FlexBox>

            <FlexBox direction="column" gap="8px">
              <LabelText>Select a network</LabelText>
              <CustomSearchInput
                height="48px"
                maxWidth="100%"
                bgColor="#FAFAFB"
              />
            </FlexBox>

          </FlexBox>
        </FlexBox>
      </FlexBox>

      <FlexBox justifyContent='space-between' alignItems='center'>
        <AccountSubjectText
          text='Recent Withdrawals'
        />
        <ViewAllButton />
      </FlexBox>
      <WalletWithdrawTable
        mockData={
          history
        }
      />
    </FlexBox>
  )
}

export default WalletWithdraw