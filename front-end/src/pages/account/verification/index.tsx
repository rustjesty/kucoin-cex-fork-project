import CustomButton from "../../../components/common/CustomButton"
import { FlexBox } from "../../../components/common/FlexBox"
import AccountCommonText from "../../../components/common/text/AccountCommonText"
import AccountSubjectText from "../../../components/common/text/AccountSubjectText"
import AccountTitleText from "../../../components/common/text/AccountTitleText"

const AccountVerification = () => {
  return (
    <FlexBox direction="column" gap="30px">
      <AccountTitleText
        text="Identification"
      />
      
      {/** Advanced KYC */}
      <FlexBox border="#e8e8e8 1px solid" borderRadius="12px" padding="20px" direction="column" gap = "25px">
        <FlexBox justifyContent="space-between">
          <FlexBox direction="column" gap="15px">
            <AccountSubjectText
              text="Advanced KYC"
            />
            <AccountCommonText
              text="Increase your 24-hour withdrawal limit to 200 BTC"
              className="grey"
            />
          </FlexBox>
          <CustomButton
            text="Verify"
            width="142px"
            height="40px"
            fontSize="14px"
          />
        </FlexBox>

        <FlexBox direction="column" gap="10px">
          <AccountCommonText
            text="Personal information"
            className="grey"
          />
          <AccountCommonText
            text="Facial recognition"
            className="grey"
          />
        </FlexBox>
      </FlexBox>

      {/** Primary KYC */}
      <FlexBox border="#e8e8e8 1px solid" borderRadius="12px" padding="20px" direction="column" gap = "25px">
        <FlexBox justifyContent="space-between">
          <FlexBox direction="column" gap="15px">
            <AccountSubjectText
              text="Primary KYC"
            />
            <AccountCommonText
              text="Increase your 24-hour withdrawal limit to 80 BTC"
              className="grey"
            />
          </FlexBox>
          <CustomButton
            text="Verify"
            width="142px"
            height="40px"
            fontSize="14px"
          />
        </FlexBox>

        <FlexBox direction="column" gap="10px">
          <AccountCommonText
            text="Personal information"
            className="grey"
          />
        </FlexBox>
      </FlexBox>

      {/** No KYC */}
      <FlexBox border="#e8e8e8 1px solid" borderRadius="12px" padding="20px" direction="column" gap = "25px">
        <FlexBox justifyContent="space-between">
          <FlexBox direction="column" gap="15px">
            <AccountSubjectText
              text="No KYC"
            />
            <AccountCommonText
              text="Currently you 24-hour withdrawal limit is 30 BTC"
              className="grey"
            />
          </FlexBox>
          <CustomButton
            text="Verify"
            width="142px"
            height="40px"
            fontSize="14px"
          />
        </FlexBox>

        <FlexBox direction="column" gap="10px">
          <AccountCommonText
            text="Personal information"
            className="grey"
          />
        </FlexBox>

      </FlexBox>
    </FlexBox>
  )
}

export default AccountVerification