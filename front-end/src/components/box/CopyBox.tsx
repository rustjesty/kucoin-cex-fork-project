import styled from "styled-components";
import CustomImage from "../common/CustomImage";
import { handleCopyToClipboard } from "../../utils/helpers";
import { successAlert } from "../../utils/alert";
import { COLORS_CONSTANT } from "../../constants/colrs.constant";

interface ICopyBoxStyle {
  text?: string;
  border?: string;
  color?: string;
}

const CopyBoxStyle = styled.div<ICopyBoxStyle>`
  border-radius: 100px;
  border: ${(props) => props.border || '1px solid rgba(85, 83, 91, 0.20)'};

  background: rgba(0, 0, 0, 0.01);
  display: flex;
  padding: 5px 10px 5px 8px;
  justify-content: center;
  align-items: center;
  gap: 5px; 

  color: ${(props) => props.color || COLORS_CONSTANT.secondary};
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

const CopyBox = ({
  text, border, color
}: ICopyBoxStyle) => {
  return (
    <CopyBoxStyle
      border={border}
      color={color}
    >
      <span>{text}</span>
      <CustomImage
        image="/assets/images/icons/copy.svg"
        cursor="pointer"
        onClick={() => {
          handleCopyToClipboard(text)
          successAlert("Copied!!")
        }}
      />
    </CopyBoxStyle>
  );
};

export default CopyBox;
