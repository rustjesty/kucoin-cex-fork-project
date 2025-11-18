import styled from "styled-components"

import { COLORS_CONSTANT } from "../../../constants/colrs.constant"
import { FlexBox } from "../../common/FlexBox"
import { useEffect, useState } from "react"
import { signUp } from "../../../api/auth"
import { Formik, Field, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../../hooks"
import Select from 'react-select'
import NumberCircleButton from "../../button/NumberCircleButton"
import SubmitButton from "../../button/SubmitButton"
import ErrorText from "../../text/ErrorText"
import { Link } from "react-router-dom"
import { encryptStringWithRsaPublicKey } from "../../../utils/helpers"

const SignUpText = styled.div`
  color: ${COLORS_CONSTANT.secondary};
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: left;
  width: 100%;
`

const SignUpForm = styled.div`
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
  line-height: 14.327px; /* 143.272% */
  text-transform: uppercase;
`

const SignUpInput = styled.input`
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

const LoginLink = styled.a`
  color: ${COLORS_CONSTANT.greenText};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 157.143% */
  text-decoration-line: underline;
  &:hover{
    scale: 1.03;
  }
`

const Error = styled.div`
  color: red;
  font-family: Poppins;
  font-size: 12px;
  line-height: 14px;
`

const CountrySelect = styled(Select)`
  width: 100%;
  border-radius: 8px;
  /* border: 1px solid #DEE1E1; */

  z-index: 10;

  background: #FAFAFB;
  outline: none;

  color: #C6C6C6;

  height: 48px;

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  .css-13cymwt-control{
    height: 48px;
    
  }
  input{
    outline: none;
    border: none;
  }
`

const AgreementText = styled.span`
  color: var(--Neutral-Gray-1, #303030);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; 
  a{
    color: black;
  }
`

interface ICountry {
  value: string;
  label: string;
}

const MainSignUp = () => {
  const [step, setStep] = useState<number>(1);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState<ICountry>({
    value: '',
    label: ''
  });

  const [firstFormValues, setFirstFormValues] = useState<any>()

  const dispatch = useDispatch();
  const registerError = useAppSelector((state) => state.auth.registerError)

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  const handleSubmit = (values: any) => {
    console.log("first values", values);
    setFirstFormValues(values)
    setStep(2)
  }

  const handleSubmit2 = (values: any) => {
    console.log("values", values);
    const _firstFormValues = firstFormValues;

    const encrypted = encryptStringWithRsaPublicKey(
      values.password
    );
    console.log("encrypted", encrypted)
    
    const finalValues = {
      "country": selectedCountry.value,
      "email": _firstFormValues.email,
      "firstname": _firstFormValues.firstname,
      "lastname": _firstFormValues.lastname,
      "middlename": _firstFormValues.middlename,
      "mobile": "",
      "password": "P20ZDfeZxkEXud5sjZZTvrT5ypN/HcI/sufYqWuFNwFYEyaBJOE4nkAFiDqdRxtLlB9+wPaTeFnvuPfHt8nGmPu7AbQIh+lUqWN3CbrFzqFmuqBDlKPXfaRe/5RY7xpBgdouG2FANJUk0SbInE5MxkDea03UI9o2nx2+NrtKzXjK5gHeE1NS1ThkynWpr86MPVHf2329RL0uV8kkJNcYyVgYjCM0AibbNljSaZ9axPNGmsp+OQORvqyoD2OQ8H4n7Bke7042gzUoh7lX9V9elZ2mLQ93nmDtMBdyKnEudkXWnP1Irv0ssCBDElpp6InofJfjEeZ/kXU+NXtA4gi/8ivXo3cX6EYEYb7MBSYR7japRPZCxKuOywBzKdAXLmPetmjkTu7zzNJef2bjEgn0UCcojH/MkEKZe69j9djuwUMd2rdLV+eciBexiDpvEHrAOxaLGVAFUCMEBJ09Db2ZorVyubgXRf47Tb3vGrk4GxfCy7OsajR41iDWCHmNZoU5feulaIl7rxXgT6AH5yPDI/kSklQZJqDxLHk6RXMtHdH9jE7zUCC4jgmg6tuThnmLGSiFiAp/XeMFikMYs+OQ9S7jpDzz/yD0Y6dVEjSWKlrIUSYrYCqBzSy51/GBvlJMsYcOfqrrPr1OKZmdglrkaJAz/Myxy/eCBsd10fBoX7E=",
      "referralId": values.referralId
    }
    console.log("finalValues", finalValues)
    signUp(dispatch, finalValues)
  }

  const signUpValidationSchema2 = () => {
    return Yup.object().shape({
      password: Yup.string()
        .required("Password is required")
      // .test('regex', t('forms.validations.password'), val => {
      //   let regExp = new RegExp(passwordStrength);
      //   return regExp.test(val);
      // })
      ,
      // passwordConfirm: Yup.string()
      //   .oneOf(
      //     // @ts-ignore
      //     [Yup.ref('password'), null],
      //     t('forms.validations.passwordMatch'),
      //   )
      //   .required(),
      referralId: Yup.string(),
      agreed: Yup.bool()
        .oneOf([true], 'You need to accept the terms and conditions'),
      // .matches(
      //   /^[A-Za-z0-9 ]+$/,
      //   t('forms.validations.referralId'),
      // ),
      // agree: Yup.bool().oneOf([true], t('forms.signUp.agree.validation')),
    });
  };

  const signUpValidationSchema = () => {
    return Yup.object().shape({
      firstname: Yup.string()
        .strict(false)
        .trim('No spaces allowed.')
        .min(2)
        .max(70)
        .required("First name is required"),
      middlename: Yup.string()
        .min(1)
        .max(70),
      lastname: Yup.string()
        .strict(false)
        .trim('No spaces allowed.')
        .min(2)
        .max(70)
        .required("Last name is required"),
      email: Yup.string()
        .email()
        .required("Email is required"),
      // country: Yup.string(),
    });
  };

  return (
    <FlexBox paddingTop="68px" height="100%">
      {
        registerError !== ''
          ?
          <div>This Email is already existing</div>
          :
          <FlexBox direction="column" gap="32px" maxWidth="420px" justifyContent="center">
            <SignUpText>
              Sign Up
            </SignUpText>
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
            <SignUpForm>
              {
                step === 1 &&
                <Formik
                  initialValues={{
                    email: '',
                    // country: '',
                    firstname: '',
                    middlename: '',
                    lastname: '',
                  }}
                  onSubmit={(values) => handleSubmit(values)}
                  validationSchema={signUpValidationSchema}
                >
                  {({ errors, touched }) => (
                    <FormikForm>
                      <FlexBox direction="column" gap="20px">
                        <FlexBox direction="column" gap="8px">
                          <LabelText>
                            FIRST NAME <strong>*</strong>
                          </LabelText>
                          <Field
                            as={SignUpInput}
                            name="firstname"
                            placeholder="First Name"
                            type="firstname"
                            error={errors.firstname && touched.firstname}
                          />
                          <ErrorText
                            text={errors.firstname && touched.firstname && errors.firstname}
                          />

                        </FlexBox>
                        <FlexBox direction="column" gap="8px">
                          <LabelText>
                            MIDDLE NAME
                          </LabelText>
                          <Field
                            as={SignUpInput}
                            name="middlename"
                            placeholder="Middle Name"
                            type="middlename"
                            error={errors.middlename && touched.middlename}
                          />
                          <ErrorText
                            text={errors.middlename && touched.middlename && errors.middlename}
                          />
                        </FlexBox>
                        <FlexBox direction="column" gap="8px">
                          <LabelText>
                            LAST NAME
                          </LabelText>
                          <Field
                            as={SignUpInput}
                            name="lastname"
                            placeholder="Last Name"
                            type="lastname"
                            error={errors.lastname && touched.lastname}
                          />
                          <ErrorText
                            text={errors.lastname && touched.lastname && errors.lastname}
                          />
                        </FlexBox>
                        <FlexBox direction="column" gap="8px">
                          <LabelText>
                            EMAIL <strong>*</strong>
                          </LabelText>
                          <Field
                            as={SignUpInput}
                            name="email"
                            placeholder="Email"
                            error={errors.email && touched.email}
                          />
                          <ErrorText
                            text={errors.email && touched.email && errors.email}
                          />
                        </FlexBox>
                        <FlexBox direction="column" gap="8px">
                          <LabelText>
                            COUNTRY <strong>*</strong>
                          </LabelText>
                          <CountrySelect
                            options={countries}
                            value={selectedCountry}
                            onChange={(selectedOption: any) => setSelectedCountry(selectedOption)}
                          />

                          {/* <Error>
                            {errors.country && touched.country && <div>{errors.country}</div>}
                          </Error> */}
                        </FlexBox>
                        <SubmitButton
                          text="Continue"
                        />

                      </FlexBox>
                    </FormikForm>
                  )}
                </Formik>
              }
              {
                step === 2 &&
                <Formik
                  initialValues={{
                    password: '',
                    referralId: '',
                    agreed: false
                  }}
                  onSubmit={(values) => handleSubmit2(values)}
                  validationSchema={signUpValidationSchema2}
                >
                  {({ errors, touched }) => (
                    <FormikForm>
                      <FlexBox direction="column" gap="20px">
                        <FlexBox direction="column" gap="8px">
                          <LabelText>
                            PASSWORD <strong>*</strong>
                          </LabelText>
                          <Field
                            as={SignUpInput}
                            name="password"
                            placeholder="Password"
                            type="password"
                            error={errors.password && touched.password}
                          />
                          <Error>
                            {errors.password && touched.password && <div>{errors.password}</div>}
                          </Error>
                        </FlexBox>
                        <FlexBox direction="column" gap="8px">
                          <LabelText>
                            REFERRAL CODE
                          </LabelText>
                          <Field
                            as={SignUpInput}
                            name="referralId"
                            placeholder="Referral Code"
                            type="referralId"
                            error={errors.referralId && touched.referralId}
                          />
                          <Error>
                            {errors.referralId && touched.referralId && <div>{errors.referralId}</div>}
                          </Error>
                        </FlexBox>
                        <FlexBox direction="column" gap="8px">
                          <FlexBox justifyContent="start" gap="10px" alignItems="center">
                            <Field
                              type="checkbox"
                              name="agreed"
                            />
                            <AgreementText>
                              I agree to <Link to="/">Privacy Policy</Link> and <Link to="/">Terms & Conditions</Link>
                            </AgreementText>

                          </FlexBox>
                          <Error>
                            {errors.agreed && touched.agreed && <div>{errors.agreed}</div>}
                          </Error>
                        </FlexBox>
                        <SubmitButton
                          text="Submit"
                        />
                      </FlexBox>
                    </FormikForm>
                  )}
                </Formik>
              }
            </SignUpForm>
            <FlexBox direction="column" gap="16px">
              <FlexBox smDirection="row" gap="5px">
                <JoinYetText>
                  Already have an account?
                </JoinYetText>
                <LoginLink href="/sign-in">
                  Log In
                </LoginLink>
              </FlexBox>
            </FlexBox>
          </FlexBox>

      }


    </FlexBox>
  )
}

export default MainSignUp