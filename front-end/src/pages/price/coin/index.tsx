import styled from "styled-components";
import { Container, Wrapper } from "../../../styles/globalStyles";
import { COLORS_CONSTANT } from "../../../constants/colrs.constant";
import { globalFonts } from "../../../constants/fonts.constant";
import CustomImage from "../../../components/common/CustomImage";
import { FlexBox } from "../../../components/common/FlexBox";
import TimeTab from "../../../components/custom/CoinDetail/TimeTab";
import CategoryTab from "../../../components/custom/CoinDetail/CategoryTab";
import CoinInfo from "../../../components/custom/CoinDetail/CoinInfo";
import CoinCryptoConvert from "../../../components/custom/CoinDetail/CoinCryptoConvert";
import { useMemo } from "react";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import parse from 'html-react-parser';
import { PriceChartContainer } from "../../../components/chart/PriceChart";
const CoinName = styled.span`
  color: ${COLORS_CONSTANT.secondary};
  font-family: ${globalFonts.Poppins};
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const CoinSymbol = styled.span`
  color: #DDD;
  font-family: ${globalFonts.Poppins};
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  text-transform: uppercase;
`

const CoinPrice = styled.span`
  color: ${COLORS_CONSTANT.secondary};
  font-family: Poppins;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 65px;
`

const PriceRising = styled.span`
  color: ${COLORS_CONSTANT.greenText};
  font-family: Aeroport;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
`;

const SubjectText = styled.div`
  color: ${COLORS_CONSTANT.secondary};
  /* H3 */
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const SubTitleText = styled.div`
  color: ${COLORS_CONSTANT.secondary};
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const ContentText = styled.div`
  color: ${COLORS_CONSTANT.secondary};
  /* B2 */
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`

const Coin = () => {
  const { pricesData } = useGlobalContext()
  const coin_id: string = useMemo(() => {
    return window.location.href.split("/price/")[1].toLowerCase()
  }, [])

  console.log("pricesData", pricesData)
  console.log("coin_id", coin_id)

  return (
    <Wrapper bgColor="white">
      <Container
        paddingTop="109px"
        paddingBottom="128px"
        paddingLeft="150px"
        paddingRight="150px"
      >
        {
          coin_id && pricesData && Object.keys(pricesData).length > 0 &&
          <FlexBox justifyContent="space-between">

            <FlexBox direction="column" maxWidth="714px">
              <FlexBox
                gap="10px"
                justifyContent="start"
                smDirection="row"
                alignItems="center"
              >
                <CustomImage
                  image={pricesData[coin_id].image}
                  width="40px"
                  height="40px"
                />
                <CoinName>
                  {pricesData[coin_id].coinName} Price
                </CoinName>
                <CoinSymbol>
                  {
                    coin_id && coin_id
                  }
                </CoinSymbol>
              </FlexBox>
              <FlexBox justifyContent="space-between" marginTop="20px" alignItems="center">
                <FlexBox smDirection="row" gap="20px" justifyContent="start" alignItems="center">
                  <CoinPrice>
                    ${pricesData[coin_id].price}
                  </CoinPrice>
                  <PriceRising>
                    +3.90%
                  </PriceRising>
                </FlexBox>
                <TimeTab />
              </FlexBox>



              <FlexBox direction="column" gap="20px" marginTop="84.5px">
                <CategoryTab />
                <FlexBox direction="column" gap="16px">
                  <SubjectText>
                    {pricesData[coin_id].coinName} price live data
                  </SubjectText>
                  <ContentText>
                    The current price of Bitcoin is $43,546.30. Over the last 24 hours, Bitcoin has increased by 1.98%. It currently has a circulating supply of 19.58M BTC and a maximum supply of 21.00M BTC, giving it a fully diluted market cap of $852.74B. At present, Bitcoin holds the 1 position in market cap rankings. The Bitcoin/USD price is updated in real-time.
                  </ContentText>
                </FlexBox>

              </FlexBox>
              <PriceChartContainer />
              <FlexBox direction="column" gap="20px" marginTop="40.5px">
                <SubjectText>
                  {pricesData[coin_id].coinName} ({pricesData[coin_id].exchangeTicker}) info
                </SubjectText>
                <CoinInfo
                  _1hChange={pricesData[coin_id].priceChangePercent1h}
                  _24hChange={pricesData[coin_id].priceChangePercent24hr}
                  _7dChange={pricesData[coin_id].priceChangePercent7d}
                  marketCap={pricesData[coin_id].marketCap}
                  _24hVolume={pricesData[coin_id].volume24h}
                  maxSupply={pricesData[coin_id].maxSupply}
                  circulatingSupply={pricesData[coin_id].circulatingSupply}
                />
              </FlexBox>


              <FlexBox direction="column" gap="25px" marginTop="55px">
                <SubjectText>
                  About {pricesData[coin_id].coinName} ({pricesData[coin_id].exchangeTicker})
                </SubjectText>
                <FlexBox direction="column" gap="16px">
                  <SubTitleText>
                    What is {pricesData[coin_id].coinName} ({pricesData[coin_id].exchangeTicker})
                  </SubTitleText>
                  <ContentText>
                    {parse(pricesData[coin_id].description)}
                  </ContentText>

                </FlexBox>
              </FlexBox>
            </FlexBox>


            <CoinCryptoConvert />
          </FlexBox>
        }
      </Container>
    </Wrapper>
  )
}

export default Coin