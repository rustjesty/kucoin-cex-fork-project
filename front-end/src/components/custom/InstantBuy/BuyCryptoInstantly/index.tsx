import styled from "styled-components"
import { Container, Wrapper } from "../../../../styles/globalStyles"
import { FlexBox } from "../../../common/FlexBox"
import CustomImage from "../../../common/CustomImage"
import Title from "../../../common/text/Title"

const SubTitle = styled.div`
  color: #55535B;
  max-width: 520px;
  width: 100%;
  font-size: 18px;
  line-height: 1.5;
  font-family: Roboto;
  font-weight: 400;
`

const BuyMethod = styled.div`
  font-size: 18px;
  line-height: 1.5;
  font-family: Roboto;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
  span{
    font-weight: 400;
    color: #55535B
  }
`

const BuyCryptoInstantly = () => {
  return (
    <Wrapper bgColor="#ffffff">
      <Container maxWidth="1117px" paddingTop="50px" paddingBottom="150px">
        <FlexBox alignItems="center">
          <FlexBox direction="column" gap="30px">
            <Title
              text="<span>Buy Crypto</span> Instantly"
              textAlign="left"
            />
            <SubTitle>
              Buy Bitcoin and many other cryptocurrencies on OXF with a selection a variety of payment methods, including credit and debit cards, bank transfers, fiat deposits, simplex and more
            </SubTitle>
            <FlexBox direction="column" gap="20px">
              <BuyMethod>
                Buy with -
              </BuyMethod>
              <BuyMethod>
                Fiat currency: <span>AUD, USD, EURO and more.</span>
              </BuyMethod>
              <BuyMethod>
                Visa:
              </BuyMethod>
              <BuyMethod>
                <CustomImage
                  image="/assets/images/cards/visa.svg"
                />
                <CustomImage
                  image="/assets/images/cards/card1.svg"
                />
                <CustomImage
                  image="/assets/images/cards/card2.svg"
                />
                <CustomImage
                  image="/assets/images/cards/card3.svg"
                />
                <CustomImage
                  image="/assets/images/cards/card4.svg"
                />
                <span>and more...</span>
              </BuyMethod>
            </FlexBox>

          </FlexBox>
          <CustomImage
            image="/assets/images/buySell.svg"
          />
        </FlexBox>
      </Container>
    </Wrapper>
  )
}

export default BuyCryptoInstantly