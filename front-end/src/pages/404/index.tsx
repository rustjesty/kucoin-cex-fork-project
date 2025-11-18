import styled from "styled-components"
import CustomImage from "../../components/common/CustomImage"
import { FlexBox } from "../../components/common/FlexBox"
import Footer from "../../components/common/layout/Footer"
import Header from "../../components/common/layout/Header"
import SubTitle from "../../components/common/text/SubTitle"
import { Container, Wrapper } from "../../styles/globalStyles"
import CustomLinkButton from "../../components/common/CustomLinkButton"

const ErrorText = styled.div`
  color: #212121;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.6px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

const Error404 = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Container maxWidth="725px">
          <FlexBox direction="column" padding="170px 30px 230px 30px" justifyContent="center" alignItems="center"
          smPadding="100px 30px"
          >
            <CustomImage
              image={`/assets/images/background/404.svg`}
              width="100%"
            />
            <FlexBox direction="column" gap="12px" justifyContent="center" alignItems="center">
              <ErrorText>
                Oh Snap! page doesn't exist
              </ErrorText>
              <SubTitle
                text="The page you're looking for is gone temporarily or was permanently deleted"
                maxWidth="450px"
                textAlign="center"
              />
            </FlexBox>
            <CustomLinkButton
              link="/"
              text="Take me home"
              width="325px"
              marginTop="40px"
              smWidth="206px"
              smHeight="40px"
              smMarginTop="20px"
            />
          </FlexBox>
        </Container>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Error404