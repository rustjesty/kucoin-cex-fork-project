import { useMedia } from 'react-use';
import { FACEBOOK_ICON_IMAGE, INSTAGRAM_ICON_IMAGE, LINKEDIN_ICON_IMAGE, LOGO_WHITE_IMAGE, TWITTER_ICON_IMAGE, YOUTUBE_ICON_IMAGE } from '../../../../constants/image.constants';
import CustomImage from '../../CustomImage';
import { FlexBox } from '../../FlexBox'
import * as S from './index.styled'

interface ISocialIcon {
  image: string;
  link: string;
}

const socialIcons: ISocialIcon[] = [
  {
    image: FACEBOOK_ICON_IMAGE,
    link: ""
  },
  {
    image: INSTAGRAM_ICON_IMAGE,
    link: ""
  },
  {
    image: LINKEDIN_ICON_IMAGE,
    link: ""
  },
  {
    image: TWITTER_ICON_IMAGE,
    link: ""
  },
  {
    image: YOUTUBE_ICON_IMAGE,
    link: ""
  }
]

const Footer = () => {
  const isMobile = useMedia('(max-width: 768px)');

  return (
    <S.FooterStyle>
      <S.Container>
        <FlexBox justifyContent='space-between' gap="10px" smGap="30px" paddingTop='60px' paddingBottom='34px'>
          <CustomImage
            image={LOGO_WHITE_IMAGE}
            marginRight='54px'
            smWidth='137px'
            smHeight='30px'
          />
          <FlexBox smGap="22px" smDirection='column'>
            <FlexBox direction='column' gap="24px">
              <S.Subject> Lorem ipsum </S.Subject>
              <S.LinkButton> Lorem ipsum </S.LinkButton>
              <S.LinkButton> Lorem ipsum </S.LinkButton>
              <S.LinkButton> Lorem ipsum </S.LinkButton>
              <S.LinkButton> Lorem ipsum </S.LinkButton>
              <S.LinkButton> Lorem ipsum </S.LinkButton>
            </FlexBox>
            <FlexBox direction='column' gap="24px">
              <S.Subject> Lorem ipsum </S.Subject>
              <S.LinkButton> Lorem ipsum </S.LinkButton>
              <S.LinkButton> Lorem ipsum </S.LinkButton>
              <S.LinkButton> Lorem ipsum </S.LinkButton>
              <S.LinkButton> Lorem ipsum </S.LinkButton>
              <S.LinkButton> Lorem ipsum </S.LinkButton>
            </FlexBox>
            <FlexBox direction='column' gap="24px">
              <S.Subject> Lorem ipsum </S.Subject>
              <S.LinkButton> Lorem ipsum </S.LinkButton>
              <S.LinkButton> Lorem ipsum </S.LinkButton>
              <S.LinkButton> Lorem ipsum </S.LinkButton>
              <S.LinkButton> Lorem ipsum </S.LinkButton>
              <S.LinkButton> Lorem ipsum </S.LinkButton>
            </FlexBox>
            <FlexBox direction='column' gap="24px">
              <S.Subject> Lorem ipsum </S.Subject>
              <S.LinkButton> Lorem ipsum </S.LinkButton>
              <S.LinkButton> Lorem ipsum </S.LinkButton>
              <S.LinkButton> Lorem ipsum </S.LinkButton>
              <S.LinkButton> Lorem ipsum </S.LinkButton>
              <S.LinkButton> Lorem ipsum </S.LinkButton>
            </FlexBox>
          </FlexBox>

        </FlexBox>
        {
          !isMobile &&
          <S.HorizontalLine />
        }
        <FlexBox justifyContent='space-between' alignItems='center' paddingTop='30px' paddingBottom='32px' smJustifyContent='start' smAlignItems='start' smMarginTop='24px' smDirection='column-reverse' smGap='24px'>
          <S.CopyRight>
            Copyright © {new Date().getFullYear()}
          </S.CopyRight>
          <FlexBox gap="12px" maxWidth='210px' smDirection='row'>
            {
              socialIcons.map((icon: ISocialIcon, key: number) => {
                return (
                  <S.SocialIconLink href={icon.link} key={key}>
                    <CustomImage
                      image={icon.image}
                    />
                  </S.SocialIconLink>
                )
              })
            }

          </FlexBox>
        </FlexBox>
      </S.Container>

    </S.FooterStyle>
  )
}

export default Footer