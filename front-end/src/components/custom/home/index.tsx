import CustomImage from '../../common/CustomImage'
import { FlexBox } from '../../common/FlexBox'
import Title from '../../common/text/Title'
import InclusiveTrading from './InclusiveTrading'
import WhatIsOXFX from './WhatIsOXFX'
import * as S from './index.styled'
import parse from 'html-react-parser';

const HomeElement = () => {
  return (
    <S.HomeElementStyle>
      <CustomImage
        image="/assets/images/pattern1.svg"
        position='absolute'
        right='0px'
        top='0px'
        smWidth='60vw'
      />
      <CustomImage
        image="/assets/images/pattern2.svg"
        position='absolute'
        bottom='0px'
        left='0px'
        rotate="0.13deg"
        smDisplay='none'
        zIndex='1'
      />
      <CustomImage
        image="/assets/images/pattern_char1.svg"
        position='absolute'
        top="100px"
        left="150px"
        smLeft='0px'
        smTop='150px'
        rotate="13.94deg"
      />
      <S.Container>
        <S.LeftFlex>
          <FlexBox direction='column' gap="64px" smGap='24px'>
            <FlexBox direction='column' gap="32px" smGap='11px'>
              <Title
                textAlign='left'
                text="<span>Secure and reliable </span>crypto trading with every transaction"
                smTextAlign='left'
              />
              <S.SignupForm>
                <S.SignUpText>
                  {
                    parse(`<span> <img src="/assets/images/stars1.svg" /><span className ="bold">Sign up&nbsp;</span>with OXFX now and &nbsp;<span className ="bold">receive 100 USDT&nbsp;</span> in rewards </span>`)
                  }
                </S.SignUpText>

                <S.SignupFormFlex>
                  <S.EmailInput
                    placeholder='Email / Phone'
                  />
                  <S.TryOxfxButton>
                    Try OXFX
                  </S.TryOxfxButton>

                </S.SignupFormFlex>

              </S.SignupForm>
            </FlexBox>

            <S.SignUpChoice>
              <span>Or sign up with:</span>
              <FlexBox justifyContent='start' gap="16px" smDirection='row'>
                <CustomImage
                  image="/assets/images/icons/google-login.svg"
                  cursor='pointer'
                />
                <CustomImage
                  image="/assets/images/icons/apple-login.svg"
                  cursor='pointer'
                />
              </FlexBox>
            </S.SignUpChoice>
          </FlexBox>
        </S.LeftFlex>
        <CustomImage
          image="/candle1.svg"
          width='588px'
          height='516px'
          smWidth='95vw'
          smHeight='350px'
          zIndex='5'
        />
      </S.Container>


      <InclusiveTrading />
      <WhatIsOXFX />
    </S.HomeElementStyle>
  )
}

export default HomeElement