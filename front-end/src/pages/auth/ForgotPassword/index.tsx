import CustomImage from "../../../components/common/CustomImage"
import { FlexBox } from "../../../components/common/FlexBox"
import { Wrapper } from "../../../styles/globalStyles"
import EmailInformation from "./EmailInformation"

const ForgotPassword = () => {
  return (
    <Wrapper>
      <FlexBox>
        <CustomImage
          image="/assets/images/background/signin.svg"
          width="45vw"
        />
        <FlexBox justifyContent="center" height="100%" paddingTop="168px">
          <EmailInformation />
        </FlexBox>
      </FlexBox>
    </Wrapper>
  )
}

export default ForgotPassword