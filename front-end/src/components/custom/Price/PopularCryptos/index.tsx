import { useGlobalContext } from "../../../../contexts/GlobalContext"
import { Container, Wrapper } from "../../../../styles/globalStyles"
import CustomImage from "../../../common/CustomImage"
import CustomSearchInput from "../../../common/CustomSearchInput"
import { FlexBox } from "../../../common/FlexBox"
import SubTitle from "../../../common/text/SubTitle"
import Title from "../../../common/text/Title"
import * as S from './index.styled'

const PopularCryptos = () => {
  const { pricesData } = useGlobalContext()
  console.log("pricesData", pricesData)
  return (
    <Wrapper bgColor="white">
      <Container maxWidth="1512px">
        <FlexBox width="100%" padding="160px 150px" direction="column" justifyContent="center" alignItems="center">
          <FlexBox direction="column" gap="16px" alignItems="center" justifyContent="center">
            <Title
              text="Popular cryptocurrencies"
            />
            <SubTitle
              text={`OXFX offers fast abd secure crypto purchases through third party payment gateways.`}
            />
            <CustomSearchInput
              bgColor="white"
              maxWidth="656px"
            />
            <FlexBox flexWrap="wrap" justifyContent="start" gap="20px 30px" marginTop="94px">
              {
                pricesData && Object.keys(pricesData).map((symbol: string, index: number) => {
                  return (
                    <S.BuyConvertBox key={index}>
                      <S.CryptoPairBox>
                        <CustomImage
                          image={pricesData[symbol].image}
                          width="32px"
                          height="32px"
                        />
                        <S.CryptoLink to={`/price/${symbol}`}>
                          {symbol}
                          {/* Bitcoin / <span>BTC</span> */}
                        </S.CryptoLink>
                      </S.CryptoPairBox>
                      <FlexBox justifyContent="end" maxWidth="246px" gap="16px">
                        <S.BuyButton>
                          Buy
                          <CustomImage
                            image="/assets/images/icons/buy.svg"
                          />
                        </S.BuyButton>
                        <S.BuyButton>
                          Convert
                          <CustomImage
                            image="/assets/images/icons/convert.svg"
                          />
                        </S.BuyButton>
                      </FlexBox>
                    </S.BuyConvertBox>
                  )
                })
              }
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </Container>
    </Wrapper>
  )
}

export default PopularCryptos