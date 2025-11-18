import styled from "styled-components"
import CustomImage from "../common/CustomImage"

const ButtonStyle = styled.a`
  color: var(--primary-text, #33C4AC);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 128.571% */
  text-decoration-line: underline;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`

const ViewAllButton = () => {
  return (
    <ButtonStyle href = "/view-all">
      View All
      <CustomImage
        image="/assets/images/icons/green-arrow-right.svg"
        width="16px"
        height="16px"
      />
    </ButtonStyle>
  )
}

export default ViewAllButton