import styled from "styled-components";
import { useMedia } from "react-use";
import { COLORS_CONSTANT } from "../../../../constants/colrs.constant";
import { Wrapper } from "../../../../styles/globalStyles";
import { FlexBox } from "../../../common/FlexBox";
import CustomImage from "../../../common/CustomImage";
import { resendOtpToken, twoFactorLogin } from "../../../../api/auth";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../hooks";
import LabelText from "../../../common/text/LabelText";
import CustomText from "../../../common/CustomText";
import { globalFonts } from "../../../../constants/fonts.constant";
import { ChangeEvent, useEffect, useState } from "react";
import { updateTempAuthToken } from "../../../../features/auth/authSlice";
import ErrorText from "../../../text/ErrorText";

const WelcomeBackText = styled.div`
  color: ${COLORS_CONSTANT.secondary};
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: left;
  width: 100%;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const BackLink = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #55535b;
  text-decoration: none;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 14.4px */
  text-transform: uppercase;
`;

const InputFlex = styled.div`
  border-radius: 8px;
  border: 1px solid #dee1e1;
  background: #fafafb;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 14px 20px;
`;

const CustomInput = styled.input`
  border: none;
  outline: none;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 240% */
  text-transform: uppercase;
  color: ${COLORS_CONSTANT.secondary};
  background: none;
  max-width: 140px;
  width: 100%;
  &::placeholder {
    color: rgba(85, 83, 91, 0.50);
  }
`;

const TimeRemainText = styled.div`
  color: ${COLORS_CONSTANT.secondary};
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 14.327px; /* 143.272% */
  text-transform: uppercase;
  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
  }
`;


const TwoFactorLogin: React.FC = () => {
  const [countDown, setCountDown] = useState<number>(300);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [oneTimePassword, setOneTimePassword] = useState<string>("");
  const dispatch = useDispatch();
  const tempAuthToken = useAppSelector((state) => state.auth.tempAuthToken);
  const isMobile = useMedia("(max-width: 768px)");

  useEffect(() => {
    const handleTokenCountdown = setInterval(() => {
      setCountDown((prevCountDown) => {
        if (prevCountDown === 0) {
          clearInterval(handleTokenCountdown);
          return prevCountDown;
        }
        return prevCountDown - 1;
      });
    }, 1000);

    return () => clearInterval(handleTokenCountdown);
  }, []);

  // const handleSubmit = async () => {
  //   if (oneTimePassword.length === 6) {
  //     console.log("Form submitted:", oneTimePassword);
  //     await twoFactorLogin(dispatch, {
  //       tempAuthToken: tempAuthToken,
  //       oneTimePassword: oneTimePassword,
  //     });
  //     setFormSubmitted(true);
  //   }
  // };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setOneTimePassword(value);
    if (value.length === 6) {
      console.log("tempAuthToken", tempAuthToken, value)
      await twoFactorLogin(dispatch, {
        tempAuthToken: tempAuthToken,
        oneTimePassword: value,
      });
    }
    setFormSubmitted(false); // Reset formSubmitted when input changes
  };

  // const validationSchema = Yup.object().shape({
  //   oneTimePassword: Yup.string()
  //     .required("One Time Password is required")
  //     .min(6, "One Time Password must be at least 6 characters long"),
  // });

  const goBack = () => {
    dispatch(updateTempAuthToken(""));
  };

  const resendCode = async () => {
    await resendOtpToken(tempAuthToken);
  };

  const formatCountDown = (countDown: number): string => {
    const minutes = Math.floor(countDown / 60);
    const seconds = ("0" + Math.floor(countDown % 60)).slice(-2);
    return `${minutes}:${seconds}`;
  };

  return (
    <Wrapper>
      <FlexBox>
        {!isMobile && (
          <CustomImage
            image="/assets/images/background/signin.svg"
            width="45vw"
          />
        )}

        <FlexBox paddingTop="158px" height="100%">
          <FlexBox direction="column" gap="50px" maxWidth="420px" justifyContent="center">
            <BackLink onClick={() => goBack()}>
              <CustomImage image="/assets/images/icons/arrow-left.svg" />
              <span>Go Back</span>
            </BackLink>
            <FlexBox direction="column" gap="20px">
              <WelcomeBackText>Enter your 6-Digit Email Verification Code</WelcomeBackText>
              <LoginForm>
                {/* <Formik
                  initialValues={{
                    oneTimePassword: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched }) => (
                    <Form> */}
                <FlexBox direction="column" gap="8px">
                  <LabelText text="6 DIGIT EMAIL Verification Code" />
                  <InputFlex>
                    <CustomInput
                      type="text"
                      name="oneTimePassword"
                      placeholder="Enter your one time password"
                      value={oneTimePassword}
                      onChange={handleChange}
                    />
                    <CustomText
                      borderLeft="#DEE1E1 1px solid"
                      height="25px"
                      color="#33C4AC"
                      fontFamily={globalFonts.Poppins}
                      fontSize="14px"
                      fontWeight="500"
                      lineHeight="24px"
                      paddingLeft="12px"
                      text="Resend Code"
                      cursor="pointer"
                      onClick={resendCode}
                    />
                  </InputFlex>
                  <ErrorText
                    text={oneTimePassword && oneTimePassword.length !== 6 && 'The one-time password must be six characters long'}
                  />

                  <TimeRemainText>
                    Time remaining:&nbsp;
                    <span>{formatCountDown(countDown)}</span>
                  </TimeRemainText>
                </FlexBox>
                {formSubmitted && <p>Form submitted automatically!</p>}
                {/* </Form>
                  )}
                </Formik> */}
              </LoginForm>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Wrapper>
  );
};

export default TwoFactorLogin;
