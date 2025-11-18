import styled from "styled-components"
import parse from 'html-react-parser';
import { COLORS_CONSTANT } from "../../../constants/colrs.constant";

interface ITitle {
  text?: any;
  maxWidth?: string;
  textAlign?: string;
}

const Style = styled.div<ITitle>`
  color: ${COLORS_CONSTANT.greyText};
  max-width: ${(props) => props.maxWidth};
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
  text-align: ${(props) => props.textAlign || 'left'};
  span{
    color: #33C4AC;
  }
  @media screen and (max-width: 1191px) {

  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    font-size: 16px;
    line-height: 24px;
  }
`

const SubTitle = (
  { text, maxWidth, textAlign }: ITitle) => {
  return (
    <Style
      maxWidth={maxWidth}
      textAlign={textAlign}
    >
      {parse(text) ? parse(text) : ''}
    </Style>
  );
};
export default SubTitle