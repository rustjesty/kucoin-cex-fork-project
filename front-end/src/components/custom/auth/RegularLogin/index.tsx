import styled from "styled-components"
import { useMedia } from "react-use"
import { Wrapper } from "../../../../styles/globalStyles"
import { logIn } from "../../../../api/auth"
import CustomImage from "../../../common/CustomImage"
import { FlexBox } from "../../../common/FlexBox"
import { FC } from 'react';
import { useDispatch } from "react-redux"
import { Formik, Field, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import { COLORS_CONSTANT } from "../../../../constants/colrs.constant"
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom"
import CustomText from "../../../common/CustomText"
import { globalFonts } from "../../../../constants/fonts.constant"
import CheckBox from "../../../CheckBox"
import * as crypto from 'crypto-browserify';

import { Buffer } from 'buffer';
const raw = `
-----BEGIN PUBLIC KEY-----
MIICITANBgkqhkiG9w0BAQEFAAOCAg4AMIICCQKCAgBd+cTblFj92AaZJpTUAnlg
ZRN/Ng6WyqnNL1PgrihZHTo5yCrLWdp/P7wvKZZbUeI3U+rfrEqLhJ3FCjt1ofgA
xc4l4RTTV8eenFsG6+aN5FmfhgSt08yRCwVj2SwGIFX+CL1la/JOyw9bzPx70xLK
FrjskVLI96rSfAcStNhVGy1PaJrt5vHnYs+7Fc2QHgctyH5E3jzqRpNyfwEG3cBC
dTEmBMSoqIkcXAvQpKL8GsttECZBKPjA9rqYu87Ph5ivmjQWLNmdht7/AyQVDlLd
Z7JWKVzIZXuYgcT839ktN27cyOXyfAI/qT72mdgMLu2KEbnkKoguzKkQ0iaYE811
lrm/n6jVp7QvAQ2Gnf1qOO6fq0RA9GmwjKR+cDKdkfRbKjCOLpEpPiJtg5jLD6jP
gQwQlnbNON58ocSp8pvyR1nlD68RrfdzgjNi9QtPjVvOGQxmGuVya/MAb2v3CabQ
5EB39PN9BjdkdZDOnBgawR+aTNCf1ytrhDp9pVineoP5x9zzh8cq1xz5V4uoSidr
220cpglZ+d7tyZc5yF6syEl6h+2lB6PljGx1gZOct+zWbbZSePwnVOTaiZpbAHps
5srrY6LdHlQOLPBvGSutg9yAivynUtBtz0a4c2+pxWCGrOVdYy9QLFh8diKnpI2k
Ohfz/J7CoyZna3kxn/n9nwIDAQAB
-----END PUBLIC KEY-----
`


const WelcomeBackText = styled.div`
  color: ${COLORS_CONSTANT.secondary};
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  width: 100%;
`

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`

const LabelText = styled.div`
  color: ${COLORS_CONSTANT.greyText};
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 14.327px;
  text-transform: uppercase;
`

const LoginInput = styled.input`
  border-radius: 8px;
  border: 1px solid #DEE1E1;
  background: #FAFAFB;

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 100%;
  padding: 12px 16px;
  ::placeholder {
    color: #C6C6C6;
  }
`

const JoinYetText = styled.span`
  color: #8D8B95;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`

const CreateAccountLink = styled.a`
  color: ${COLORS_CONSTANT.greenText};

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  text-decoration-line: underline;
  &:hover {
    scale: 1.03;
  }
`

const OrText = styled.span`
  color: #C6C6C6;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`

const SocialLink = styled.button`
  border-radius: 10px;
  border: 1px solid #E0E0E0;
  width: 100%;
  background: #FFF;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SubmitButton = styled.button`
  border-radius: 8px;
  background: #45EFD2;
  display: flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  color: #18171C;

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  width: 100%;
  border: none;
  margin-top:32px;
`

const Error = styled.div`
  color: red;
  font-family: Poppins;
  font-size: 12px;
  line-height: 14px;
`

const ForgotPasswordLink = styled(Link)`
  color: var(--primary, #292B3B);
  text-align: right;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; 
  text-decoration: none;
`

let pemContents = '';

fetch(raw)
  .then(r => r.text())
  .then(text => {
    pemContents = text;
  });

const encryptStringWithRsaPublicKey = (toEncrypt: any, publicKey: any) => {
  console.log("calling encryptStringWithRsaPublicKey...")
  var buffer = Buffer.from(toEncrypt, 'utf16le');
  var encrypted = crypto.publicEncrypt(publicKey, buffer);
  return encrypted.toString("base64");
};

const RegularLogin: FC = () => {
  const isMobile = useMedia('(max-width: 768px)');
  const dispatch = useDispatch();

  const handleSubmit = async (values: {
    email: string;
    password: string
  }) => {
    console.log("values", values)
    let loginData: any = {};
    loginData.email = values.email;

    const encrypted = encryptStringWithRsaPublicKey(values.password, pemContents)
    console.log("encrypted---->", encrypted)
    loginData.password = "VVlgEgY3GTmcsusXQlMgU00XZfqko0fU+SPMPOzh/iRcHSJ1TwJoBabe4Kma2zhcORe1PmQXWY8n8NINAgJ/T4pzPONS6GW5ALhmGSFUqjuQ0w3e5PdfzeRUXwopMiVGWsKE+loyH+quDmMlFMEBDR9yOZ18w0z/vp+9rvG3kqEwQ5Q1+HokifmamztVIjjwzmg+vamCPSQqMLSc84gPPLP/R63VW1cpcTii+zRMAsIKu+6sRl9EUbAWjQkGcCN6ArVwxlKYrBypJXF2caAdeP8oSF50HP7r4q/IeCKjkU4QFUzEnVNE5V3yaifghmNb/Gfe2wJAstorx4uA+BODlnMeUVOcBhQSDKNc9rhJclH1vFrbGmqhSsrEQBR+FHOeKvJQcptDJqvl2c/JlGuN0HIgGMA8d1Ot8bVejkHRssHVaoKMooxpWWyRLOSZMCl8guxlgVkuFtWMqiOmChxWUqCDonQaUcGU1AD8ct7ArPFIkxYHriAIwIYO9F6V1COYghWRQbXLBIaFDJ5pgYj0IZVbl4k20a0YzT1kGurH8MDekxXMVt8FlZMhZ78GCna5WdF3h8PjaDVROlY8NOQqaPZ/c/7jdLRTcyr7ZaQxrnHEVaZhP19n4pZJJYImjl6gcyHBxQpHF0lg/EKZMpeDSWkfBrIGrBOJ2WdDYvtMJ4w=";
    if (!localStorage.getItem('deviceId')) {
      const deviceId = uuidv4();
      console.log("deviceId", deviceId)
      localStorage.setItem('deviceId', deviceId);
    }
    loginData.dvc_id = localStorage.getItem('deviceId');
    await logIn(dispatch, loginData);
  }

  const logInValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required'),
  });

  return (
    <Wrapper>
      <FlexBox>
        {!isMobile && <CustomImage image="/assets/images/background/signin.svg" width="45vw" />}

        <FlexBox alignItems="center" height="100%">
          <FlexBox direction="column" gap="32px" maxWidth="420px" justifyContent="center" padding="70px 16px" smPadding="70px 16px">
            <WelcomeBackText>Welcome Back</WelcomeBackText>
            <LoginForm>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={logInValidationSchema}
              >
                {({ errors, touched }) => (
                  <FormikForm>
                    <FlexBox direction="column" gap="20px">
                      <FlexBox direction="column" gap="8px">
                        <LabelText>EMAIL</LabelText>
                        <Field
                          as={LoginInput}
                          name="email"
                          placeholder="Email"
                          error={errors.email && touched.email}
                        />
                        <Error>{errors.email && touched.email && <div>{errors.email}</div>}</Error>

                      </FlexBox>
                      <FlexBox direction="column" gap="5px">
                        <LabelText>PASSWORD</LabelText>
                        <Field
                          as={LoginInput}
                          name="password"
                          placeholder="Password"
                          type="password"
                          error={errors.password && touched.password}
                        />
                        <Error>
                          {errors.password && touched.password && <div>{errors.password}</div>}
                        </Error>

                      </FlexBox>
                      <FlexBox justifyContent="space-between">
                        <FlexBox gap = "10px" alignItems="center" justifyContent="start" width="default">
                          <CheckBox />
                          <CustomText
                            text="Remember me"
                            fontSize="14px"
                            fontFamily={globalFonts.Poppins}
                            fontWeight="400"
                          />
                        </FlexBox>
                        <ForgotPasswordLink to="/forgot-password">Forgot Password</ForgotPasswordLink>
                      </FlexBox>
                    </FlexBox>
                    <SubmitButton type="submit">Login</SubmitButton>

                  </FormikForm>
                )}
              </Formik>
            </LoginForm>

            <FlexBox direction="column" gap="16px">
              <FlexBox smDirection="row" gap="5px">
                <JoinYetText>Haven’t joined yet?</JoinYetText>
                <CreateAccountLink href="/sign-up">Create an account</CreateAccountLink>
              </FlexBox>
              <FlexBox smDirection="row" gap="21px" alignItems="center">
                <FlexBox maxWidth="181px" bgColor="#E9EBF0" height="1px" alignItems="center" />
                <OrText>or</OrText>
                <FlexBox maxWidth="181px" bgColor="#E9EBF0" height="1px" alignItems="center" />
              </FlexBox>
              <FlexBox smDirection="row" gap="10px">
                <SocialLink>
                  <CustomImage
                    image={`/assets/images/icons/google.svg`}
                    width="24px"
                    height="24px"
                  />
                </SocialLink>
                <SocialLink>
                  <CustomImage
                    image={`/assets/images/icons/socials/apple.svg`}
                    width="24px"
                    height="24px"
                  />
                </SocialLink>
                <SocialLink>
                  <CustomImage
                    image={`/assets/images/icons/socials/telegram.svg`}
                    width="24px"
                    height="24px"
                  />
                </SocialLink>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Wrapper>
  )
}

export default RegularLogin
