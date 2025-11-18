import styled from "styled-components"
import ViewAllButton from "../../../components/button/ViewAllButton"
import CustomSearchInput from "../../../components/common/CustomSearchInput"
import { FlexBox } from "../../../components/common/FlexBox"
import AccountCommonText from "../../../components/common/text/AccountCommonText"
import AccountSubjectText from "../../../components/common/text/AccountSubjectText"
import AccountTitleText from "../../../components/common/text/AccountTitleText"
import { useAppSelector } from "../../../hooks"
import HideButton from "../../../components/button/HideButton"
import { globalFonts } from "../../../constants/fonts.constant"
import WalletSpotTable from "./WalletSpotTable"

const CustomButton = styled.div`
  cursor: pointer;
  display: flex;
  height: 37px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  border: 1px solid rgba(85, 83, 91, 0.20);
  background: rgba(163, 174, 208, 0.10);

  color: #18171C;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`

const BalanceText = styled.span`
  color: var(--text, #18171C);
  font-family: ${globalFonts.Poppins};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 125% */
  letter-spacing: -0.48px;
`

const USDBalanceText = styled.span`
  color: #55535B;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 214.286% */
  letter-spacing: -0.28px;
`

const SymbolText = styled.span`
  color: var(--text, #18171C);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 166.667% */
  letter-spacing: -0.36px;
`


const WalletSpot = () => {
  const isHidden = useAppSelector(state => state.auth.isBalanceHidden)
  return (
    <FlexBox direction="column" gap="30px">
      <FlexBox justifyContent='space-between' alignItems='center'>
        <AccountTitleText
          text="Spot"
        />
      </FlexBox>
      <FlexBox
        borderRadius="8px"
        bgColor="#FBFBFB"
        padding="25px"
        direction="column"
      >
        <FlexBox justifyContent="space-between">
          <FlexBox gap="10px" justifyContent="start" alignItems="center">
            <AccountCommonText
              text="Estimated balance"
            />
            <HideButton />
          </FlexBox>
          <FlexBox justifyContent="end" gap="8px" width="default">
            <CustomButton>Buy</CustomButton>
            <CustomButton>Deposit</CustomButton>
            <CustomButton>Withdraw</CustomButton>
            <CustomButton>History</CustomButton>
          </FlexBox>
        </FlexBox>
        <FlexBox justifyContent="start" gap="5px">
          <BalanceText>
            {
              isHidden ? '********' : 0.13443
            }
          </BalanceText> <SymbolText>BTC</SymbolText>
        </FlexBox>

        <FlexBox justifyContent="space-between">
          <USDBalanceText>
            {
              isHidden ? '********' : '≈' + '15, 2842' + 'USD'
            }
          </USDBalanceText>

        </FlexBox>

      </FlexBox>
      <FlexBox
        height="1px"
        bgColor="#F4F7FE"
      />
      <FlexBox justifyContent='space-between' alignItems='center'>
        <AccountSubjectText
          text="Spot"
        />
        <ViewAllButton />
      </FlexBox>
      <CustomSearchInput
        bgColor="white"
        maxWidth="289px"
      />
      <WalletSpotTable
        mockData={
          new Array(50).fill({
            coin: "1CAT/USDT",
            amount: 123,
            available: 1231,
          })
        }
      />
    </FlexBox>
  )
}

export default WalletSpot