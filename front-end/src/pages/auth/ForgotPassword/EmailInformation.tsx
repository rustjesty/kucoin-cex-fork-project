import { FlexBox } from '../../../components/common/FlexBox'
import styled from 'styled-components'
import LabelText from '../../../components/common/text/LabelText'
import CustomInput from '../../../components/common/CustomInput'
import NumberCircleButton from '../../../components/button/NumberCircleButton'
import { FC, useState } from 'react'
import { infoAlert } from '../../../utils/alert'
import { instance } from '../../../api'
import { updateForgotPasswordOTP } from '../../../features/auth/authSlice'
import { useAppSelector } from '../../../hooks'
import { useDispatch } from 'react-redux'
import SubmitButton from '../../../components/button/SubmitButton'
import { Formik, Field, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import ErrorText from '../../../components/text/ErrorText'

const TitleText = styled.div`
  color: var(--Secondary, #18171C);
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const CustomFormikForm = styled(FormikForm)`
  width: 100%;
`

const EmailInformation: FC = () => {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>('');

  const dispatch = useDispatch();
  const forgotPasswordOTP = useAppSelector((state) => state.auth.forgotPasswordOTP)

  const sendOTP = async (values: {
    email: string
  }) => {
    setStep(2);
    setEmail(values.email)
    const { data } = await instance({
      url: '/api/forgot-password-otp',
      method: 'POST',
      data: values
    });
    if (data.status === 'Success') {
      console.log("data.data.emailToken", data.data.emailToken)
      dispatch(updateForgotPasswordOTP(data.data.emailToken))
    }
  }

  const validationSchema1 = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('Email is required'),
  });

  const validationSchema2 = Yup.object().shape({
    password: Yup.string()
      .required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm password is required'),
    otp: Yup.string()
      .required('OTP is required'),
  });

  const submitForm = async (values: {
    password: string,
    confirmPassword: string,
    otp: string
  }) => {
    console.log("forgotPasswordOTP", forgotPasswordOTP)
    const { data } = await instance({
      url: '/api/forgot-password',
      method: 'POST',
      data: {
        email,
        email_otp: values.otp,
        email_token: forgotPasswordOTP,
        new_password: "NSL4ZH7/Vu/DWlggpxbDMLWHPrwc4g1Nn7NumX0dAc6WAQmz7rgRvTpvhKDWu1vDqZWQXVZsPBDNByYG0+DscbCHAqsJwl2dnTjYz4PSYsF14PRsVu3okEvURL+qFluWcXswoQGt+4jxQmO1Xv1bWHUbTvyQrFIVqSj8CKZWcs/lDz0+rznA3dz0qr+g991bXw73E8qZfDKM07xm7f+erKYmAKQW+XqtBQ9EdyZ9NWli1Vy31prg9g+PxtgfXv/QhRpaVZXk2d802ZgMIlr+TDu77BjD8qUfsv1f3wjv2veW1PrRsSgFeegiZVtQVvySp5NpnVDFfFqeL7AnzFNlA+D2OqAuj88Ui05R/L0HGLyKM75l2XhMjV6+xABgG0DYWvJsaPv8rGMTVfrNjSZCV99IxUweEE8/95tWbzWT6oShnwxkEuJyaOPNwj6HNDurEUcgMKuUrjbIeVs5wv6ou8dBZc/ERdsFxN5hIdkzPtNU6ahPWHO14piafOZst1Z6TvExB/1mItTQwtlbkAJUneRLTaHZTSXh7h7XetPGHZzY+sGhz+7PrRqJYs5mV25iFvp8N2ujTBVsnGAU2wHBuo+WKPnYXpDy+AtKsx1Ze+7OsQyU2Ivw1lw1ZrBVDQeGepty9h5ANCnATh4Ghe7RbTJaklmit+aDuuWh7SEll8M",
        sms_otp: "",
        sms_token: ""
      }
    });
    console.log("forgot password response", data)
    if (data.status === 'Success') {
      
      // if reset password is successful, automatically go to signin page
      window.location.href = "/sign-in"
    }
    if (data.status === 'Error') {
      if (data.message === 'ChangePassword_Same_Error') {
        infoAlert("Your new password cannot be the same as old password.")
      }
    }
  }

  return (
    <FlexBox justifyContent='center'>
      <FlexBox direction='column' width='420px'>
        <FlexBox direction='column' gap="20px"
          marginBottom='20px'
        >
          <TitleText>
            Reset Password
          </TitleText>
          <FlexBox justifyContent="start" alignItems="center">
            <NumberCircleButton
              onClick={() => { setStep(1) }}
              active={step === 1 ? true : false}
              text="1"
            />
            <FlexBox
              height="1px"
              bgColor="#55535B"
              width="94px"
            >
            </FlexBox>
            <NumberCircleButton
              onClick={() => { setStep(2) }}
              active={step === 2 ? true : false}
              text="2"
            />
          </FlexBox>
        </FlexBox>
        {
          step === 1 &&
          <Formik
            initialValues={{
              email: '',
            }}
            onSubmit={(values) => sendOTP(values)}
            validationSchema={validationSchema1}
          >
            {({ errors, touched }) => (
              <CustomFormikForm>
                <FlexBox direction="column" gap="32px">
                  <FlexBox direction='column' gap="20px">

                    <FlexBox direction='column' gap="8px">
                      <LabelText
                        text='Email'
                      />

                      <Field
                        as={CustomInput}
                        name="email"
                        placeholder="Email"
                        error={errors.email && touched.email}
                      />
                      <ErrorText
                        text={errors.email && touched.email && errors.email}
                      />
                    </FlexBox>
                  </FlexBox>
                  <SubmitButton
                    text="Continue"
                  // width='100%'
                  />
                </FlexBox>
              </CustomFormikForm>
            )
            }
          </Formik>
        }

        {
          forgotPasswordOTP !== '' && step === 2 &&
          <Formik
            initialValues={{
              password: '',
              confirmPassword: '',
              otp: ''
            }}
            onSubmit={(values) => submitForm(values)}
            validationSchema={validationSchema2}
          >
            {({ errors, touched }) => (
              <CustomFormikForm>
                <FlexBox direction="column" gap="32px">
                  <FlexBox direction='column' gap="20px">
                    <FlexBox direction='column' gap="8px">
                      <LabelText
                        text='ENTER YOUR NEW PASSWORD'
                      />

                      <Field
                        as={CustomInput}
                        name="password"
                        placeholder="Password"
                        type = "password"
                        error={errors.password && touched.password}
                      />
                      <ErrorText
                        text={errors.password && touched.password && errors.password}
                      />
                    </FlexBox>
                    <FlexBox direction='column' gap="8px">
                      <LabelText
                        text='CONFIRM YOUR NEW PASSWORD'
                      />
                      <Field
                        as={CustomInput}
                        placeholder='Confirm Password'
                        name="confirmPassword"
                        type = "password"
                        error={errors.confirmPassword && touched.confirmPassword}
                      />
                      <ErrorText
                        text={errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                      />
                    </FlexBox>
                    <FlexBox direction='column' gap="8px">
                      <LabelText
                        text='ENTER YOUR 6 DIGIT EMAIL OTP CODE'
                      />
                      <Field
                        as={CustomInput}
                        placeholder='OTP'
                        name="otp"

                        error={errors.otp && touched.otp}
                      />
                      <ErrorText
                        text={errors.otp && touched.otp && errors.otp}
                      />
                    </FlexBox>
                  </FlexBox>
                  <SubmitButton
                    text="Submit"
                  // width='100%'
                  />
                </FlexBox>
              </CustomFormikForm>
            )

            }
          </Formik>
        }
      </FlexBox>
    </FlexBox>
  )
}

export default EmailInformation