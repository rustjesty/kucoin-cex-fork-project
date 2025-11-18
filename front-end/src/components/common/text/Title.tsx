import styled from "styled-components"
import parse from 'html-react-parser';

interface ITitle {
  text?: any;
  maxWidth?: string;
  textAlign?: string;
  smTextAlign?: string;
}

const Style = styled.div<ITitle>`
  color: #18171C;
  font-size: 50px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  line-height: 65px;
  width: 100%;
  font-weight: 700;
  max-width: ${(props) => props.maxWidth || '717px'};
  text-align: ${(props) => props.textAlign || 'center'};
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
    text-align: left;
    text-align: ${(props) => props.smTextAlign || 'center'};
  }
`


const Title = (
  { text, maxWidth, textAlign, smTextAlign }: ITitle // Add curly braces around the parameter
) => {
  return (
    <Style
      maxWidth={maxWidth}
      textAlign = {textAlign}
      smTextAlign = {smTextAlign}
    >
      {parse(text) ? parse(text) : ''}
    </Style>
  );
};
export default Title