import styled from "styled-components"
import { COLORS_CONSTANT } from "../../../constants/colrs.constant"
import { FlexBox } from "../../common/FlexBox"
import PercentChangeText from "../../text/PercentChangeText"



const SubjectText = styled.div`
  color: #55535B;
  /* number */
  font-family: Aeroport;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; 
`

const ValueText = styled.div`
  color: ${COLORS_CONSTANT.secondary};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`

const CurrentPercentChange = styled.span`
  color: ${COLORS_CONSTANT.greenText};
  font-family: Aeroport;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
`

const CurrentPriceText = styled.span`
  color: ${COLORS_CONSTANT.secondary};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`



interface ICoinInfo{
  _1hChange: string;
  _24hChange: string;
  _7dChange: string;
  marketCap: string;
  _24hVolume: string;
  maxSupply: string;
  circulatingSupply: string;
}

const CoinInfo = ({
  _1hChange,
  _24hChange,
  _7dChange,
  marketCap,
  _24hVolume,
  maxSupply,
  circulatingSupply
}: ICoinInfo) => {

  
  return (
    <FlexBox direction="column" width="100%">

      <FlexBox smDirection="row" justifyContent="space-between" alignItems="center">
        <CurrentPriceText>
          Current price:
        </CurrentPriceText>
        <FlexBox smDirection="row" alignItems="center" justifyContent="end" gap="5px" width="default">
          <CurrentPercentChange>
            +3.90%
          </CurrentPercentChange>
          <CurrentPriceText>
            $43,546.30
          </CurrentPriceText>
        </FlexBox>
      </FlexBox>
    
      <FlexBox borderRadius="12px" border="1px solid #DDD" padding="25px" width="100%" marginTop="29.5px" flexWrap="wrap" direction="column" gap="20px">
        <FlexBox>
          <FlexBox direction="column" gap="5px" smDirection="row" smJustifyContent="space-between">
            <SubjectText>
              ATH
            </SubjectText>
            <ValueText>
              $68,789.6
            </ValueText>
          </FlexBox>
          <FlexBox direction="column" gap="5px" smDirection="row" smJustifyContent="space-between">
            <SubjectText>
              Price Change (1h)
            </SubjectText>
            <PercentChangeText text = {_1hChange} />
            
          </FlexBox>
          <FlexBox direction="column" gap="5px" smDirection="row" smJustifyContent="space-between">
            <SubjectText>
              Price Change (24h)
            </SubjectText>
            <PercentChangeText text = {_24hChange} />
          </FlexBox>
          <FlexBox direction="column" gap="5px" smDirection="row" smJustifyContent="space-between">
            <SubjectText>
              Price Change (7d)
            </SubjectText>
            <PercentChangeText text = {_7dChange} />
          </FlexBox>

        </FlexBox>
        <FlexBox>
          <FlexBox direction="column" gap="5px" smDirection="row" smJustifyContent="space-between">
            <SubjectText>
              Market Cap
            </SubjectText>
            <ValueText>
              ${marketCap}
            </ValueText>
          </FlexBox>
          <FlexBox direction="column" gap="5px" smDirection="row" smJustifyContent="space-between">
            <SubjectText>
              24h Volume
            </SubjectText>
            <ValueText>
              ${_24hVolume}
            </ValueText>
          </FlexBox>
          <FlexBox direction="column" gap="5px" smDirection="row" smJustifyContent="space-between">
            <SubjectText>
              Circulating Supply
            </SubjectText>
            <ValueText>
              ${Math.round(parseInt(circulatingSupply))}
            </ValueText>
          </FlexBox>
          <FlexBox direction="column" gap="5px" smDirection="row" smJustifyContent="space-between">
            <SubjectText>
              Max Supply
            </SubjectText>
            <ValueText>
              ${Math.round(parseInt(maxSupply))}
            </ValueText>
          </FlexBox>
        </FlexBox>


      </FlexBox>

    </FlexBox>
  )
}

export default CoinInfo