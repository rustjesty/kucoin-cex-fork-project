import styled from "styled-components"
import CustomButton from "../../../components/common/CustomButton"
import { FlexBox } from "../../../components/common/FlexBox"
import AccountSubjectText from "../../../components/common/text/AccountSubjectText"
import AccountTitleText from "../../../components/common/text/AccountTitleText"
import { globalFonts } from "../../../constants/fonts.constant"
import { COLORS_CONSTANT } from "../../../constants/colrs.constant"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../../hooks"

const PasswordInput = styled.input`
  width: 100%;
  border-radius: 8px;
  padding: 12px 20px;
  border: 1px solid #DEE1E1;
  height: 48px;
  background-color: #fafafb;
  font-size: 16px;
  outline: none;
  &::placeholder{
    font-family: ${globalFonts.Poppins};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #C6C6C6;
  }
`

const LabelText = styled.div`
  text-transform: uppercase;
  font-family: ${globalFonts.Poppins};
  font-weight: 600;
  font-size: 10px;
  line-height: 14.33px;
  color: #55535B;
`

const InfoText = styled.div`
  font-family: ${globalFonts.Poppins};
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #55535B;
  span{
    font-weight: 600;
    color: ${COLORS_CONSTANT.secondary}
  }
`

const DintReceiveLink = styled(Link)`
  font-family: ${globalFonts.Poppins};
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: ${COLORS_CONSTANT.secondary};
`

const ChangePassword = () => {
  const profile = useAppSelector((state) => state.profile);
  return (
    <FlexBox direction="column" gap="30px">
      <AccountTitleText
        text="Change password"
      />
      <FlexBox justifyContent="center" alignItems="center">
        <FlexBox width="548px" border="1px solid #DDDDDD" borderRadius="12px" padding="20px" direction="column" gap="20px">
          <AccountSubjectText
            color="#55535B"
            text="Password"
          />
          <LabelText>old password</LabelText>
          <PasswordInput
            placeholder="Enter your old password"
          />
          <LabelText>New password</LabelText>
          <PasswordInput
            placeholder="Enter your new password"
          />
          <LabelText>Confirm new password</LabelText>
          <PasswordInput
            placeholder="Confirm your new password"
          />
          <AccountSubjectText
            color="#55535B"
            text="Verification Code"
          />

          <LabelText>
            Email Verification Code
          </LabelText>
          <InfoText>
            We’ll send a verification code to <span>{profile?.data?.email}</span>
          </InfoText>
          <DintReceiveLink
            to="/"
          >
            Didn’t receive the email?
          </DintReceiveLink>
          <CustomButton
            text="Submit"
            width="100%"
            height="40px"
            fontSize="14px"
          />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  )
}

export default ChangePassword