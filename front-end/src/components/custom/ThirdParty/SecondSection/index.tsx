import Title from '../../../common/text/Title'
import { Container, Wrapper } from "../../../../styles/globalStyles"
import { FlexBox } from '../../../common/FlexBox'
import CustomImage from '../../../common/CustomImage'
import styled from 'styled-components'
import { BUY_CRYPTO_STEPS_DATA } from '../../../../constants/document/buyCryptoSteps.constant'
import { globalFonts } from '../../../../constants/fonts.constant'
import { COLORS_CONSTANT } from '../../../../constants/colrs.constant'


const BuyCryptoStep = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px 32px;
  
  border-radius: 16px;
  max-width: 352px;
  /* width: 100%; */
  height: 292px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  /* justify-content: center; */
  align-items: center;
  h5, h6{
    text-align: center;
  }
  h5{
    font-family: ${globalFonts.Poppins};
    color: ${COLORS_CONSTANT.secondary};
    font-size: 24px;
    line-height: 1.5;
    font-weight: 600;
  }
  &:nth-child(odd){
    background-color: white;
  }
`

const SecondSection = () => {
  return (
    <Wrapper bgColor="#F9FAFB">
      <Container maxWidth="1512px" paddingTop="200px" paddingBottom="200px">
        <FlexBox direction='column' alignItems='center' justifyContent='center' gap="32px">
          <Title
            text="How to buy crypto through payment gateways"
          />
          <CustomImage
            image='/assets/images/steps.svg'
          />
          <FlexBox gap="30px">
            {
              BUY_CRYPTO_STEPS_DATA.map((item: { title: string, content: string }, index: number) => {
                return (
                  <BuyCryptoStep key={index}>
                    <CustomImage
                      image="/assets/images/place-order.svg"
                      width='60px'
                      height='60px'
                    />
                    <h5>{item.title}</h5>
                    <h6>{item.content}</h6>
                  </BuyCryptoStep>
                )
              })
            }
          </FlexBox>
        </FlexBox>
      </Container>
    </Wrapper>
  )
}

export default SecondSection