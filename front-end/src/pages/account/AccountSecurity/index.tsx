import styled from "styled-components"
import CustomButton from "../../../components/common/CustomButton"
import { FlexBox } from "../../../components/common/FlexBox"
import AccountCommonText from "../../../components/common/text/AccountCommonText"
import AccountSubjectText from "../../../components/common/text/AccountSubjectText"
import AccountTitleText from "../../../components/common/text/AccountTitleText"
import { globalFonts } from "../../../constants/fonts.constant"
import { instance } from "../../../api"
import { useAppSelector } from "../../../hooks"
import { useEffect, useState } from "react"
// import QRCode from "react-qr-code"
import CustomImage from "../../../components/common/CustomImage"
import { handleCopyToClipboard } from "../../../utils/helpers"
import { successAlert } from "../../../utils/alert"

const HintText = styled.div`
  font-family: ${globalFonts.Poppins};
  font-weight: 600;
  font-size: 10px;
  line-height: 14.33px;
  color: #55535B;
  text-transform: uppercase;
`

const AuthCodeInput = styled.input`
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

const SecretKeyBox = styled.div`
  span{
    max-width: 408px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  background-color: #fafafb;
  border: 1px solid #DEE1E1;
  border-radius: 8px;
  padding: 10px 6px 10px 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #C6C6C6;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AccountSecurity = () => {
  const token = useAppSelector((state) => state.auth.accessToken)

  const [authCode, setAuthCode] = useState<any>();

  useEffect(() => {
    if (token && token !== '') {
      getAuthCode()
    }
  }, [token])

  const getAuthCode = async () => {
    try {
      const { data } = await instance({
        url: '/api/GAuth_Enable_Request',
        method: 'GET',
        headers: {
          'Authorization': token
        }
      });
      if (data.status === "Success") {
        console.log("history data", data.data)
        setAuthCode(data.data);
      }

    } catch (err) {
      console.error("err", err)
    }
  }
  return (
    <FlexBox direction="column" gap="30px">
      <AccountTitleText
        text="Security"
      />
      <FlexBox padding="20px" borderRadius="8px" bgColor="#FBFBFB" direction="column" gap="40px">
        <AccountSubjectText
          text="Two-Factor Authentication"
        />
        <AccountCommonText
          text={`Two-factor authentication (2fa) greatly increases security by requiring both your password and another form of authentication. 
Modulus Demo implements 2fa utilizing Google Authenticator. To enable this feature simply download Google Authenticator on your mobile device and scan the QRCode. enable this feature simply download Google Authenticator on your mobile device and scan the ORcode.

Once you have linked the Authenticator with Modulus Demo, enter the 6 digit code provided.`}
          className="grey"
          lineHeight="21px"
        />
      </FlexBox>
      <AccountSubjectText
        text="Enable Google Authenticator"
      />

      {/* <div style={{ height: "auto", margin: "0 auto", maxWidth: 352, width: "100%" }}>
      
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={authCode && authCode.pairingCode}
          viewBox={`0 0 256 256`}
        />
      </div> */}
      <FlexBox justifyContent="center" alignItems="center" direction="column" gap="25px">
        {
          authCode &&
          <CustomImage image={authCode.qR_Code} width="352px" height="352px" />
        }

        <FlexBox direction="column" gap="20px" maxWidth="548px">
          <AccountSubjectText
            text="Secret Key"
          />
          <HintText>
            Account.security.secretKeyHelp
          </HintText>
          {
            authCode &&
            <SecretKeyBox>
              <span>{
                authCode.pairingCode
              }</span>

              <CustomButton
                text="Copy"
                fontSize="14px"
                width="102px"
                height="40px"
                scale="1.05"
                onClick={() => {
                  handleCopyToClipboard(authCode.pairingCode)
                  successAlert("Security code is Copied!")
                }}
              />
            </SecretKeyBox>
          }
          <AuthCodeInput
            placeholder="Input your 6 digit authenticator code"
          />
          <CustomButton
            text="Enable 2FA"
            fontSize="14px"
            width="100%"
            height="40px"
            scale="1"
          />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  )
}

export default AccountSecurity