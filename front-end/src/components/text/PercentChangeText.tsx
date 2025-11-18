import styled from "styled-components";
import { COLORS_CONSTANT } from "../../constants/colrs.constant";

interface IPercentChangeText {
  text: string;
}

const PercentChangeTextStyle = styled.span<IPercentChangeText>`
  color: ${(props) =>
    parseFloat(props.text) > 0
      ? COLORS_CONSTANT.greenText
      : COLORS_CONSTANT.redText};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

const PercentChangeText = ({ text }: IPercentChangeText) => {
  return (
    <PercentChangeTextStyle text={text}>
      {text}%
    </PercentChangeTextStyle>
  );
};

export default PercentChangeText;