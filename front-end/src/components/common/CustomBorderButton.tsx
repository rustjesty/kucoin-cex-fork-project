import styled from 'styled-components';
import { globalFonts } from '../../constants/fonts.constant';
import parse from 'html-react-parser';
interface CustomBorderButtonType {
  text?: string;
  link?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  onClick?: () => void;
  color?: string;
  type?: string;
  disabled?: boolean;
  borderRadius?: string;
  smWidth?: string;
  smHeight?: string;
  fontSize?: string;
  smFontSize?: string;
  smLineHeight?: string;
  lineHeight?: string;
  fontWeight?: string;
  smFontWeight?: string;
  hoverColor?: string;
  border?: string;
  fontFamily?: string;
  marginTop?: string;
  hoverBorder?: string;
}

interface CustomBorderButtonStyleType {
  width?: string;
  height?: string;
  bgColor?: string;
  hoverColor?: string;
  color?: string;
  disabled?: boolean;
  borderRadius?: string;
  smWidth?: string;
  smHeight?: string;
  fontSize?: string;
  smFontSize?: string;
  smLineHeight?: string;
  lineHeight?: string;
  fontWeight?: string;
  smFontWeight?: string;
  border?: string;
  fontFamily?: string;
  marginTop?: string;
  hoverBorder?: string;
}

const CustomBorderButtonStyle = styled.button<CustomBorderButtonStyleType>`
    cursor: pointer;
    max-width: ${(props) => props.width || '147px'};
    width: 100%;
    height: ${(props) => props.height || '48px'};
    font-style: normal;
    font-weight: ${(props) => props.fontWeight || '600'};
    font-size: ${(props) => props.fontSize || '14px'};
    line-height: ${(props) => props.lineHeight || '24px'}; 
    color: ${(props) => props.disabled ? '#aaaaaa' : (props.color ? props.color : '#18171C')};
    font-family: ${(props) => props.fontFamily ? props.fontFamily : globalFonts.Poppins};

    background: ${(props) => props.bgColor || 'none'};
    border-radius: ${(props) => props.borderRadius || '8px'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.color || '#ffffff'};
    border: ${(props) => props.disabled ? '1px solid #DDDDDD' : (props.border ? props.border : '#33C4AC 1px solid')};

    margin-top: ${props => props.marginTop};
  
    &:hover{
      color: ${(props) => props.disabled ? '#8c8b8e' : (props.hoverColor || '#edfefb')};
      /* background-color: #edfefb; */
      border: ${(props) => props.disabled ? '1px solid #DDDDDD' : (props.hoverBorder ? props.hoverBorder : '1px solid #DDDDDD')};
    }
    &:disabled{
        cursor: not-allowed; 
        opacity: 0.5; 
    }
    @media screen and (max-width: 991px) {
        font-size: 24px;
        line-height: 41px;
        // margin-left: 54px;
    }
    @media screen and (max-width: 768px) {
        max-width: ${(props) => props.smWidth || '98px'};
        height: ${(props) => props.smHeight || '42px'};
        font-style: normal;
        font-weight: ${(props) => props.smFontWeight || '600'};
        font-size:${(props) => props.smFontSize || '16px'};
        line-height: ${(props) => props.smLineHeight || '26px'};

    }
`
const CustomBorderButton = ({ text, width, bgColor, color, onClick, disabled, smHeight, smWidth, borderRadius, height, fontSize, smFontSize, fontWeight, smLineHeight, smFontWeight, hoverColor, border, fontFamily, marginTop, hoverBorder }: CustomBorderButtonType) => {
  return (

    <CustomBorderButtonStyle
      width={width} color={color} onClick={onClick} bgColor={bgColor} disabled={disabled} borderRadius={borderRadius} height={height}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={smLineHeight}
      smFontSize={smFontSize}
      smHeight={smHeight}
      smWidth={smWidth}
      smFontWeight={smFontWeight}
      smLineHeight={smLineHeight}
      hoverColor={hoverColor}
      border={border}
      fontFamily={fontFamily}
      marginTop={marginTop}
      hoverBorder={hoverBorder}
    >
      {text && parse(text)}
    </CustomBorderButtonStyle>
  )
}

export default CustomBorderButton;
