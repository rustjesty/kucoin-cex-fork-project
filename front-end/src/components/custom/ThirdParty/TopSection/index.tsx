import { Container, Wrapper } from "../../../../styles/globalStyles"
import CustomImage from "../../../common/CustomImage"
import { FlexBox } from "../../../common/FlexBox"
import SubTitle from "../../../common/text/SubTitle"
import Title from "../../../common/text/Title"

const TopSection = () => {
  return (
    <Wrapper bgColor="#ffffff">
      <Container maxWidth="1512px" paddingTop="80px" paddingBottom="100px">
        <FlexBox direction="column" justifyContent="center" alignItems="center" gap="50px">
          <FlexBox direction="column" gap="16px" alignItems="center">
            <Title
              text="Buy Crypto on OXFX"
            />
            <SubTitle
              text="OXFX offers fast abd secure crypto purchases through third party payment gateways."
              maxWidth="520px"
              textAlign="center"
            />

          </FlexBox>
          <CustomImage
            image="/assets/images/buysell-converter.svg"
          />
        </FlexBox>
      </Container>
    </Wrapper>
  )
}

export default TopSection