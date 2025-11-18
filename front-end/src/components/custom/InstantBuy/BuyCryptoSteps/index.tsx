import { Container, Wrapper } from '../../../../styles/globalStyles'
import Title from '../../../common/text/Title'
import { FlexBox } from '../../../common/FlexBox'
import * as S from './index.styled'
import { CRYPTO_STEPS_DATA } from '../../../../constants/document/cryptosteps.constant'
import SubTitle from '../../../common/text/SubTitle'

const BuyCryptoSteps = () => {
  return (
    <Wrapper bgColor="#f7f7f7" overflowY='hidden' height='1016px'>
      <Container maxWidth="1342px" paddingTop="150px" paddingBottom="0px" paddingLeft='15px' paddingRight='15px'>
        <S.MainFlex>
          <FlexBox direction='column' gap="70px" maxWidth='682px' smGap='24px'>
            <FlexBox direction='column' gap="16px" smGap='8px'>
              <Title
                text="Buy crypto in a <span>few steps</span>"
                textAlign='left'
                smTextAlign='left'
                maxWidth='553px'
              />
              <SubTitle
                maxWidth='682px'
                text="Buy Bitcoin and many other cryptocurrencies on OXF with a selection a variety of payment methods, including credit and debit cards, bank transfers, fiat deposits, simplex and more"
              />
            </FlexBox>
            <S.InfoGraphicImage
              src="/assets/images/info-graphic.svg"
            />
          </FlexBox>
          <S.StepFlex>
            {
              CRYPTO_STEPS_DATA.map((step: any, index: number) => {
                return (
                  <S.CryptoStep key={index}>
                    <h4>0{index + 1}</h4>
                    <FlexBox direction='column' gap="12px">
                      <h5>{step.title}</h5>
                      <h6>{step.content}</h6>
                    </FlexBox>
                  </S.CryptoStep>
                )
              })
            }
          </S.StepFlex>
        </S.MainFlex>
      </Container>
    </Wrapper>
  )
}

export default BuyCryptoSteps