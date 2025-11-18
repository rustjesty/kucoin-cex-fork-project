import styled from "styled-components"
import { FlexBox } from "../../common/FlexBox"
import { useState } from "react"
import CustomImage from "../../common/CustomImage"
import { BITCOIN_ICON_IMAGE } from "../../../constants/image.constants"

const CoinCryptoConvertStyle = styled.div`
  border-radius: 14.327px;
  border: 1px solid #DDD;
  background: white;
  max-width: 404px;
  width: 100%;
  padding: 22px 20px 28px 20px;
  display: flex;
  flex-direction: column;
  gap:22px;
`

const ConvertButton = styled.button`
  border-radius: 8px;
  background: #45EFD2;
  padding: 12px 50px;
  width: 100%;

  color: #18171C;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;

  border: none;
`

const EstimatedText = styled.span`
  color: rgba(21, 25, 32, 0.50);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`

const USDText = styled.span`
  color: #000;
  text-align: right;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`

const ConvertTradeTab = styled.div`
  color: var(--Text, #55535B);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  cursor: pointer;
  background-color: #fafafa;
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active{
    color: #33C4AC;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    border-radius: 8px;
    border: 1px solid rgba(51, 196, 172, 0.20);
    background: #EBFAF7;
  }
`

const CustomInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  height: 28.654px;
  display: flex;
  align-items: center;

  font-family: Aeroport;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  color: black;
  background-color: #FAFAFB;
  padding: 0px 30px 0px 0px;
  &::placeholder{
    color: #C6C6C6;
    /* number */

  }
`

const SymbolText = styled.span`
  color: #1E1E1E;

  font-family: Aeroport;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  margin-right: 8.95px;
`

const data: string[] = [
  "Convert",
  "Trade"
]

const CoinCryptoConvert = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  return (
    <CoinCryptoConvertStyle>
      <FlexBox borderRadius="8px" bgColor="#FAFAFA" height="34px">
        {
          data.map((tab: string, index: number) => {
            return (
              <ConvertTradeTab
                key={index}
                className={activeTab === index ? 'active' : ''}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </ConvertTradeTab>
            )
          })
        }
      </FlexBox>
      <FlexBox direction="column" gap="8.95px">
        <FlexBox
          border="1px solid #DEE1E1"
          bgColor="#FAFAFB"
          borderRadius="8px"
          padding="10px 20px"
          justifyContent="space-between"
          alignItems="center"
        >
          <CustomInput
            placeholder="0.00"
          />
          <SymbolText>
            BTC
          </SymbolText>
          <CustomImage
            image={BITCOIN_ICON_IMAGE}
            width="28.654px"
            height="28.654px"
          />
        </FlexBox>
        <FlexBox justifyContent="space-between">
          <EstimatedText>
            Estimated
          </EstimatedText>
          <USDText>
            -USD
          </USDText>
        </FlexBox>
      </FlexBox>
      <ConvertButton>
        Convert
      </ConvertButton>
    </CoinCryptoConvertStyle>
  )
}

export default CoinCryptoConvert