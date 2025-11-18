import { USDC_ICON_IMAGE, USDT_ICON_IMAGE } from '../../../../constants/image.constants'
import CustomImage from '../../../common/CustomImage';
import { FlexBox } from '../../../common/FlexBox';
import * as S from './index.styled'

interface IToken {
  image: string;
  symbol: string;
  tokenName: string;
  price: string;
  percent: string;
}

const tokenData: IToken[] = [
  {
    image: USDT_ICON_IMAGE,
    symbol: "USDT",
    tokenName: "TETHER",
    price: "0.9998",
    percent: "0.3%"
  },
  {
    image: USDC_ICON_IMAGE,
    symbol: "USDC",
    tokenName: "USD COIN",
    price: "56,623.54",
    percent: "0.3%"
  },
  {
    image: USDT_ICON_IMAGE,
    symbol: "USDT",
    tokenName: "TETHER",
    price: "0.9998",
    percent: "0.3%"
  },
  {
    image: USDT_ICON_IMAGE,
    symbol: "USDT",
    tokenName: "TETHER",
    price: "0.9998",
    percent: "0.3%"
  },
  {
    image: USDT_ICON_IMAGE,
    symbol: "USDT",
    tokenName: "TETHER",
    price: "0.9998",
    percent: "0.3%"
  },
  {
    image: USDT_ICON_IMAGE,
    symbol: "USDT",
    tokenName: "TETHER",
    price: "0.9998",
    percent: "0.3%"
  },
  {
    image: USDT_ICON_IMAGE,
    symbol: "USDT",
    tokenName: "TETHER",
    price: "0.9998",
    percent: "0.3%"
  },
  {
    image: USDT_ICON_IMAGE,
    symbol: "USDT",
    tokenName: "TETHER",
    price: "0.9998",
    percent: "0.3%"
  },
  {
    image: USDT_ICON_IMAGE,
    symbol: "USDT",
    tokenName: "TETHER",
    price: "0.9998",
    percent: "0.3%"
  },
  {
    image: USDT_ICON_IMAGE,
    symbol: "USDT",
    tokenName: "TETHER",
    price: "0.9998",
    percent: "0.3%"
  },
  {
    image: USDT_ICON_IMAGE,
    symbol: "USDT",
    tokenName: "TETHER",
    price: "0.9998",
    percent: "0.3%"
  },
  {
    image: USDT_ICON_IMAGE,
    symbol: "USDT",
    tokenName: "TETHER",
    price: "0.9998",
    percent: "0.3%"
  }
]


const TopCurrencies = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          <span>Top Cryptocurrencies</span> available on OPX
        </S.Title>
        <FlexBox flexWrap='wrap' gap="24px" marginTop='50px'>
          {
            tokenData.map((token: IToken, key: number) => {
              return (
                <FlexBox
                  key={key}
                  border="#EDEDED 1px solid"
                  borderRadius='12px'
                  width='261.25px'
                  direction='column'
                >
                  <FlexBox alignItems='center' gap="10px" padding='15px' borderBottom='#EDEDED 1px solid' justifyContent='start'>
                    <CustomImage
                      image={token.image}
                      width='50px'
                      height='50px'
                    />
                    <S.SymbolText>
                      {token.symbol}
                    </S.SymbolText>
                    <S.TokenMark>
                      {token.tokenName}
                    </S.TokenMark>
                  </FlexBox>
                  <FlexBox gap="10px" direction='column' padding='15px'>
                    <S.TokenPrice>
                      ${token.price}
                    </S.TokenPrice>
                    <S.TokenPercent>
                      {token.percent}
                    </S.TokenPercent>
                  </FlexBox>

                </FlexBox>
              )
            })
          }
        </FlexBox>

      </S.Container>
    </S.Wrapper>

  )
}

export default TopCurrencies