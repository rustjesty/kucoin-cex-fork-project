import RegularLogin from "../../components/custom/auth/RegularLogin"
import TwoFactorLogin from "../../components/custom/auth/TwoFactorLogin"
import { useAppSelector } from "../../hooks"

const SignIn = () => {
  const tempAuthToken = useAppSelector((state) => state.auth.tempAuthToken)
  return (
    <>
      {

        tempAuthToken === ''
          ?
          <RegularLogin />
          :
          <TwoFactorLogin />
      }
    </>

  )
}

export default SignIn