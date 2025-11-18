import { FlexBox } from "../../../components/common/FlexBox"
import AccountCommonText from "../../../components/common/text/AccountCommonText"
import AccountTitleText from "../../../components/common/text/AccountTitleText"
import AccountSubjectText from "../../../components/common/text/AccountSubjectText"
import { useEffect, useState } from "react"
import { instance } from "../../../api"
import { useAppSelector } from "../../../hooks"
import CustomImage from "../../../components/common/CustomImage"
import ReferralTierCard from "../../../components/card/ReferralTierCard"
import RaffleEarningsCard from "../../../components/card/ReferralEarningsCard"
import CopyBox from "../../../components/box/CopyBox"


const Affiliates = () => {
  const token = useAppSelector((state) => state.auth.accessToken)

  const [affiliatesData, setAffiliatesData] = useState<any>();

  useEffect(() => {
    if (token && token !== '') {
      getProfile()
    }
  }, [token])

  const getProfile = async () => {
    try {
      const { data } = await instance({
        url: '/api/Affiliate_Summary',
        method: 'GET',
        headers: {
          'Authorization': token
        }
      });
      if (data.status === "Success") {
        console.log("affiliatesData ===>", data.data)
        setAffiliatesData(data.data);
      }

    } catch (err) {
      console.error("err", err)
    }
  }
  return (
    <FlexBox direction="column" gap="30px">
      <AccountTitleText
        text="Affiliates Commission"
      />

      {/*** Referral Links */}
      <FlexBox borderRadius="8px" bgColor="#FBFBFB" direction="column">
        <FlexBox direction="column">
          <FlexBox borderBottom="1px dashed rgba(85, 83, 91, 0.20);" direction="column" gap="10px" padding="25px 25px 20px 25px">
            <FlexBox justifyContent="start" smDirection="row" gap="30px" alignItems="center">
              <AccountCommonText
                text="Referral Link"
                className="grey"
              />
              {
                affiliatesData &&
                <CopyBox text={affiliatesData.referralLink} />
              }
            </FlexBox>
            <FlexBox justifyContent="start" smDirection="row" gap="30px" alignItems="center">
              <AccountCommonText
                text="Referral Code"
                className="grey"
              />
              {
                affiliatesData &&
                <CopyBox text={affiliatesData.referralID} />
              }
            </FlexBox>
          </FlexBox>
          <FlexBox direction="column" gap="16px" padding="25px 25px 20px 25px">
            <FlexBox gap="5px" smDirection="row" justifyContent="start" alignItems="center">
              <CustomImage
                image="/assets/images/icons/info.svg"
              />
              <AccountCommonText
                text="Copy and share this affiliates link with your friends when they sign up to earn bonus coins!"
                className="grey"
              />
            </FlexBox>
            <FlexBox gap="5px" smDirection="row" justifyContent="start" alignItems="center">
              <CustomImage
                image="/assets/images/icons/info.svg"
              />
              <AccountCommonText
                text="When your referrals invite other users to the platform you will earn a percentage of their trading fees as well!"
                className="grey"
              />
            </FlexBox>

          </FlexBox>
        </FlexBox>
      </FlexBox>

      {/*** Referral Tiers */}
      <FlexBox direction="column" gap="16px">
        <AccountSubjectText
          text="Referral Tiers"
        />
        <FlexBox gap="20px" >
          <ReferralTierCard
            header="R-Level 1"
            fee={5}
            referral={0}
          />
          <ReferralTierCard
            header="R-Level 1"
            fee={5}
            referral={0}
          />
          <ReferralTierCard
            header="R-Level 1"
            fee={5}
            referral={0}
          />
        </FlexBox>
      </FlexBox>
      {/*** Referral Earnings */}
      <FlexBox direction="column" gap="16px">
        <AccountSubjectText
          text="Referral Earnings"
        />
        <FlexBox gap="20px">
          <RaffleEarningsCard header="All Time" />
          <RaffleEarningsCard header="Last 60 Days" />
          <RaffleEarningsCard header="Account.affiliates.90d" />
          <RaffleEarningsCard header="Last 120 Days" />
        </FlexBox>
      </FlexBox>

      {/*** Commission */}
      <AccountSubjectText
        text="Commission"
      />

      {/*** Users Referred */}
      <AccountSubjectText
        text="Users Referred"
      />
    </FlexBox>
  )
}

export default Affiliates