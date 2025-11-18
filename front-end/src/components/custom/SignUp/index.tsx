import { useAppSelector } from "../../../hooks"
import { Wrapper } from "../../../styles/globalStyles"
import CustomImage from "../../common/CustomImage"
import { FlexBox } from "../../common/FlexBox"
import MainSignUp from "./MainSignUp"
import SignUpSuccess from "./SignupSuccess"

const SignUp = () => {
  const registerSuccess = useAppSelector((state) => state.auth.registerSuccess)
  return (
    <Wrapper>
      <FlexBox>
        <CustomImage
          image="/assets/images/background/signin.svg"
          width="45vw"
        />
        {
          registerSuccess
            ?
            <SignUpSuccess />
            :
            <MainSignUp />
        }
      </FlexBox>
    </Wrapper>

  )
}

export default SignUp