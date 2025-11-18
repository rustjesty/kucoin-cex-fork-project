import styled from "styled-components"
import CustomImage from "../../common/CustomImage"
import { FlexBox } from "../../common/FlexBox"
import CustomLinkButton from "../../common/CustomLinkButton"

const SuccessText = styled.div`
  color: var(--Secondary, #18171C);
  text-align: center;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const SubText = styled.div`
  color: var(--Neutral-Gray-1, #303030);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
`

const SignUpSuccess = () => {
  return (
    <FlexBox direction="column" gap="20px" alignItems="center" height="100%">
      <CustomImage
        image="/assets/images/register-success-mark.svg"
      />
      <SuccessText>
        Registration successful
      </SuccessText>
      <SubText>
        Verification link has been send to your email
      </SubText>
      <CustomLinkButton
        link="/sign-in"
        text="Log in here"
        width="242px"
      />
    </FlexBox>
  )
}

export default SignUpSuccess