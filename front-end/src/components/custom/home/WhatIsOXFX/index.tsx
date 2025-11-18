import { Container, Wrapper } from '../../../../styles/globalStyles';
import CustomButton from '../../../common/CustomButton';
import { FlexBox } from '../../../common/FlexBox';
import * as S from './index.styled'

const WhatIsOXFX = () => {
  return (
    <Wrapper>
      <Container>
        <FlexBox justifyContent='center' padding='84px 15px' smPadding='50px 15px'>
          <S.Main>
            <S.Title>
              What is OXFX?
            </S.Title>
            <S.SubTitle>
              Learn what powers OXFX and why investing and trading crypto currency with OXFX is the best option for you
            </S.SubTitle>
            <CustomButton
              text="Try OXFX"
              width='161px'
              smHeight='40px'
              smWidth='161px'
            />
          </S.Main>
        </FlexBox>
      </Container>
    </Wrapper>
  )
}

export default WhatIsOXFX;