import styled from "styled-components"
import CustomImage from "../common/CustomImage"

const ExportButtonStyle = styled.button`
  display: flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 8px;
  border: 1px solid var(--primary-text, #33C4AC);
  color: #18171C;

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;

  background-color: white;
`
const ExportButton = () => {
  return (
    <ExportButtonStyle>
      Export Address
      <CustomImage
        image="/assets/images/icons/export.svg"
        width='20px'
        height='20px'
      />

    </ExportButtonStyle>
  )
}

export default ExportButton