import styled from "styled-components"
import CustomImage from "../common/CustomImage"
import { FlexBox } from "../common/FlexBox"

const CardStyle = styled.div`
  border-radius: 8px;
  border: 1px solid var(--Grey, #D0D0D0);
  background: rgba(255, 255, 255, 0.10);
  width: 100%;
  background-color: #f8f8f8;
`

const CardHeader = styled.div`
  padding: 8px 16px;
  display: flex;
  gap: 8px;
  color: #19191E;
  /* number */
  font-family: Aeroport;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  align-items: center;
  width: 100%;
  
`

const CardBody = styled.div`
  border-radius: 8px;
  background-color: white;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  span{
    color: var(--Black, #19191E);
    font-family: Aeroport;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }
`

interface IReferralTierCard {
  header: string;
  fee: number;
  referral: number;
}

const ReferralTierCard = ({
  header,
  fee,
  referral
}: IReferralTierCard) => {
  return (
    <CardStyle>
      <CardHeader>
        <CustomImage
          image="/assets/images/icons/star.svg"
        />
        {header}
      </CardHeader>
      <CardBody>
        <FlexBox justifyContent="space-between">
          <span>Fee Share</span>
          <span>{fee}</span>
        </FlexBox>
        <FlexBox justifyContent="space-between">
          <span>Fee Share</span>
          <span>{referral}</span>
        </FlexBox>
      </CardBody>
    </CardStyle>
  )
}

export default ReferralTierCard