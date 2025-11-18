import styled from "styled-components";
import { globalFonts } from "../../../constants/fonts.constant";

const SubTitle = styled.div`
  color: #18171C;
  font-size: 50px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  line-height: 65px;
  max-width: 540px;
  width: 100%;
  font-weight: 600;
  span{
    color: #33C4AC;
  }
  @media screen and (max-width: 1191px) {
    font-size: 40px;
    line-height: 50px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    font-size: 32px;
    line-height: 1.5;
  }
`

const HomeElementStyle = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 150px 15px 100px 15px;
  @media screen and (max-width: 1191px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    justify-content: start;
    padding: 50px 15px;
  }
`

const LeftFlex = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 563px;
  padding-top: 20px;
  z-index: 200;
  @media screen and (max-width: 1191px) {
    padding: 0px 0px;
  }
  @media screen and (max-width: 1191px) {
    padding-top: 0px;
  }
`

const SignupForm = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`

const SignupFormFlex = styled.div`
  display: flex;
  gap: 15px;
  @media screen and (max-width: 768px) {
    /* justify-content: space-between; */
  }
`

const SignUpText = styled.div`
  font-weight: 300;
  color: #55535B;
  font-style: normal;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  font-family: ${globalFonts.Roboto};
  span.bold{
    font-weight: 700;
    color: #18171C;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  
`

const EmailInput = styled.input`
  border-radius: 8px;
  border: 1px solid #DEE1E1;

  color: #18171C;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 

  display: flex;
  width: 365px;
  padding: 12px 10px 12px 20px;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    max-width: 224px;
    width: 100%;
  }
`

const TryOxfxButton = styled.button`
  border: none;
  max-width: 188px;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  background-color: #45EFD2;
  // font
  font-size: 14px;
  color: #18171C;
  line-height: 24px;
  font-weight: 600;
  font-family: "Poppins";
  white-space: nowrap;

  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    scale: 1.1;
  }
  @media screen and (max-width: 768px) {
    height: 45px;
    min-width: 107px;
    max-width: 107px;
  }
`

const SignUpChoice = styled.div`
  color: #18171C;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export {
  HomeElementStyle,
  SubTitle,
  Container,
  SignupForm,
  SignUpText,
  EmailInput,
  TryOxfxButton,
  SignupFormFlex,
  LeftFlex,
  SignUpChoice
}