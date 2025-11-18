import styled from "styled-components"
import CustomImage from "../../../components/common/CustomImage"
import { FlexBox } from "../../../components/common/FlexBox"
import AccountTitleText from "../../../components/common/text/AccountTitleText"
import { BITCOIN_ICON_IMAGE } from "../../../constants/image.constants"
import { globalFonts } from "../../../constants/fonts.constant"
import { COLORS_CONSTANT } from "../../../constants/colrs.constant"
import AccountSubjectText from "../../../components/common/text/AccountSubjectText"
import RecentLoginHistory from "./RecentLoginHistory"
import { useAppSelector } from "../../../hooks"
import { useEffect, useState } from "react"
import CopyBox from "../../../components/box/CopyBox"
import { Link } from "react-router-dom"
import api from "../../../api/api"

const SubSubjectText = styled.span`
  color: #55535B;
  font-family: ${globalFonts.Aeroport};
  font-size: 12px;
  line-height: 14.4px;
  font-weight: 500;
`

const AccountCommonText = styled.span`
  color: ${COLORS_CONSTANT.secondary};
  font-family: ${globalFonts.Poppins};
  font-size: 14px;
  line-height: 16.8px;
  font-weight: 500;
  &.grey{
    color: #55535B;
  }
`

const PrimaryKYCLink = styled.div`
  color: ${COLORS_CONSTANT.greenText};
  font-family: ${globalFonts.Poppins};
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
`

const PriceText = styled.div`
  color: ${COLORS_CONSTANT.secondary};
  font-family: ${globalFonts.Poppins};
  font-weight: 600;
  font-size: 24px;
  line-height: 30px; 
  margin-top: 20px;
`

const FunctionalButton = styled(Link)`
  border: #d6d7db 1px solid;
  border-radius: 8px;
  background-color: #f6f7fb;
  padding: 8px 24px;
  color: ${COLORS_CONSTANT.secondary};
  font-family: ${globalFonts.Poppins};
  font-weight: 600;
  font-size: 14px;
  line-height: 24px; 
  text-decoration: none;
`

interface ILoginHistory {
  startedOn: string;
  ip: string;
  os: string;
  browser: string;
  location: string;
}


const AccountOverview = () => {
  const token = useAppSelector((state) => state.auth.accessToken)
  console.log("account overview page / token", token)

  const { data } = useAppSelector((state) => state.profile)
  const profile = data;
  const [loginHistory, setLoginHistory] = useState<ILoginHistory[]>([])

  useEffect(() => {
    if (token && token !== '') {
      getLoginHistory()
    }
  }, [token])

  const getLoginHistory = async () => {
    try {
      const { data } = await api.authenticatedInstance({
        url: '/api/LoginHistory',
        method: 'GET',
      });
      if (data.status === "Success") {
        console.log("history data", data.data)
        setLoginHistory(data.data);
      }

    } catch (err) {
      console.error("err", err)
    }
  }

  return (
    <FlexBox direction="column" gap="30px">
      {/** Account Main Info */}
      <FlexBox padding="20px" borderRadius="8px" bgColor="#FBFBFB" direction="column">
        <FlexBox gap="15px" justifyContent="start" alignItems="center">
          <CustomImage
            image={BITCOIN_ICON_IMAGE}
            width="40px"
            height="40px"
          />
          <AccountTitleText
            text={
              profile && (profile.firstName + profile.lastName)
            }
          />
        </FlexBox>
        <FlexBox paddingLeft="50px" justifyContent="start" gap="40px" marginTop="20px">
          <FlexBox direction="column" width="default" gap="5px">
            <SubSubjectText>
              Account
            </SubSubjectText>
            <AccountCommonText>
              {profile && profile.email}
            </AccountCommonText>
          </FlexBox>
          <FlexBox direction="column" width="default" gap="5px">
            <SubSubjectText>
              UID
            </SubSubjectText>
            <AccountCommonText>
              {profile && profile.customerID}
            </AccountCommonText>
          </FlexBox>
          <FlexBox direction="column" width="default" gap="5px">
            <SubSubjectText>
              sign-up Time
            </SubSubjectText>
            <AccountCommonText>
              {profile && profile.joinedOn}
            </AccountCommonText>
          </FlexBox>
          <FlexBox direction="column" width="default" gap="5px">
            <SubSubjectText>
              Last login
            </SubSubjectText>
            <AccountCommonText>
              {
                loginHistory && loginHistory[0] && loginHistory[0].startedOn
              }
            </AccountCommonText>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      {/** Identification */}
      <FlexBox gap="20px">
        <FlexBox border="#e8e8e8 1px solid" borderRadius="12px" padding="20px" direction="column" justifyContent="space-between" height="171px">
          <FlexBox direction="column" justifyContent="start" gap="20px">
            <AccountSubjectText
              text="Identification"
            />
            <AccountCommonText className="grey">
              Current Withdrawal Limit: 30 BTC in 24 hours
            </AccountCommonText>

            <AccountCommonText className="grey">
              Complete identify verification to enhance your security level and withdrawal limit
            </AccountCommonText>
          </FlexBox>
          <PrimaryKYCLink>
            Primary KYC
          </PrimaryKYCLink>
        </FlexBox>
        <FlexBox border="#e8e8e8 1px solid" borderRadius="12px" padding="20px" direction="column" justifyContent="space-between" height="171px">
          <FlexBox direction="column" gap="30px">
            <AccountSubjectText
              text="Referral"
            />
            <AccountCommonText className="grey">
              Invite friends for more commisions
            </AccountCommonText>
          </FlexBox>
          <CopyBox
            text={`https://demo.modulusexchange.com/signup?ref=${profile && profile.customerID}`}
          />
        </FlexBox>
      </FlexBox>

      {/** Total Assets */}
      <FlexBox border="#e8e8e8 1px solid" borderRadius="12px" padding="20px" direction="column">
        <AccountCommonText className="grey">
          Total  Assets
        </AccountCommonText>
        <PriceText>
          23,466.27816579
        </PriceText>

        <FlexBox justifyContent="space-between" alignItems="center">
          <AccountCommonText className="grey">
            ≈ 23,487.39 USD
          </AccountCommonText>
          <FlexBox gap="10px" justifyContent="end" width="default" >
            <FunctionalButton to="/trade">
              Buy
            </FunctionalButton>
            <FunctionalButton to="/wallet/deposit">
              Deposit
            </FunctionalButton>
            <FunctionalButton to="/wallet/withdraw">
              Withdraw
            </FunctionalButton>
            <FunctionalButton to="/wallet/history">
              History
            </FunctionalButton>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      {/** Recent Login History */}
      <RecentLoginHistory
        mockData={loginHistory}
      />
    </FlexBox>
  )
}

export default AccountOverview