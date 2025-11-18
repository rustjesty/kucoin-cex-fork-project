import CustomImage from '../../../common/CustomImage'
import { FlexBox } from '../../../common/FlexBox'
import * as S from './index.styled'

const data: string[] = ['', '', '']

const MarketStatBox = () => {
  return (
    <S.MarketStatBox>
      <S.MarketStatBoxHeader>
        <CustomImage
          image="/assets/images/icons/trending.svg"
        />
        Trending
      </S.MarketStatBoxHeader>
      <S.MarketStatBoxBody>
        {
          data.map(() => {
            return (
              <FlexBox smDirection='row' justifyContent='space-between' cursor='pointer' padding='10px 0px' hoverBgColor='#ccc'>
                <FlexBox alignItems='center' smDirection='row' gap="8px" justifyContent='start'>
                  <CustomImage
                    image='/assets/images/icons/tokens/IRL.svg'
                  />
                  <S.TokenSymbol>
                    MKR
                  </S.TokenSymbol>
                </FlexBox>

                <FlexBox alignItems='center' smDirection='row' gap="20px" justifyContent='end'>
                  <S.TokenSymbol>
                    $1,301.37
                  </S.TokenSymbol>
                  <S.PriceRising>
                    +0.33%
                  </S.PriceRising>
                </FlexBox>
              </FlexBox>
            )
          })
        }

      </S.MarketStatBoxBody>
      <S.MarketStatBoxFooter>
        MORE <CustomImage image="/assets/images/icons/link-external.svg" />
      </S.MarketStatBoxFooter>
    </S.MarketStatBox>
  )
}

export default MarketStatBox