import styled from 'styled-components';
import parse from 'html-react-parser';
interface CustomButtonType {
  text?: any;
  width?: string;
  height?: string;
  bgColor?: string;
  onClick?: () => void;
  onSubmit?: () => void;
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
  hoverBgColor?: string;
  border?: string;
  activeBgColor?: string;
  marginTop?: string;
  marginBottom?: string;
  fontFamily?: string;
  boxShadow?: string;
  smMarginTop?: string;
  link?: string;
  scale?: string;
}

interface CustomButtonStyleType {
  width?: string;
  height?: string;
  bgColor?: string;
  hoverColor?: string;
  hoverBgColor?: string;
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
  marginTop?: string;
  marginBottom?: string;
  fontFamily?: string;
  boxShadow?: string;
  smMarginTop?: string;
  link?: string;
  scale?: string;
  type?: string;
}

const CustomButtonStyle = styled.div<CustomButtonStyleType>`
    cursor: pointer;
    max-width: ${(props) => props.width || '171px'};
    width: 100%;
    font-family: ${(props) => props.fontFamily || 'Poppins'};
    height: ${(props) => props.height || '48px'};
    font-style: normal;
    font-weight: ${(props) => props.fontWeight || '600'};
    font-size: ${(props) => props.fontSize || '14px'};
    line-height: ${(props) => props.lineHeight || '24px'}; 
    color: ${(props) => props.color || '#18171C'};
    border: ${(props) => props.border || ''};
    background: ${(props) => props.disabled ? '#99e2d6' : props.bgColor || '#45EFD2'};
    border-radius: ${(props) => props.borderRadius || '8px'};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${(props) => props.marginTop};
    box-shadow: ${(props) => props.boxShadow};
    margin-bottom: ${(props) => props.marginBottom};
    &:hover{
      /* color: ${(props) => props.hoverColor || 'white'}; */
      background: ${(props) => props.hoverBgColor || '#33c4ac'};
      scale: ${(props) => props.scale || 1};
    }
    &:disabled{
      cursor: not-allowed; 
      background-color: #99e2d6;
      color: #8c8b8e;
      /* opacity: 0.5;  */
    }

    @media screen and (max-width: 768px) {
        max-width: ${(props) => props.smWidth || '98px'};
        height: ${(props) => props.smHeight || '42px'};
        font-style: normal;
        font-weight: ${(props) => props.smFontWeight || '600'};
        font-size:${(props) => props.smFontSize || '16px'};
        line-height: ${(props) => props.smLineHeight || '26px'};
        margin-top: ${(props) => props.smMarginTop};
    }
`
const CustomButton = ({ hoverBgColor, boxShadow, fontFamily, text, width, bgColor, color, onClick, onSubmit, disabled, smHeight, smWidth, borderRadius, height, fontSize, smFontSize, fontWeight, smLineHeight, smFontWeight, hoverColor, border, marginTop, marginBottom, smMarginTop, scale, type }: CustomButtonType) => {
  return (
    <CustomButtonStyle
      width={width} color={color} onClick={onClick} bgColor={bgColor} onSubmit={onSubmit} disabled={disabled} smHeight={smHeight} smWidth={smWidth} borderRadius={borderRadius} height={height}
      fontSize={fontSize}
      smFontSize={smFontSize}
      fontWeight={fontWeight}
      smFontWeight={smFontWeight}
      lineHeight={smLineHeight}
      smLineHeight={smLineHeight}
      hoverColor={hoverColor}
      border={border}
      marginTop={marginTop}
      marginBottom={marginBottom}
      hoverBgColor={hoverBgColor}
      fontFamily={fontFamily}
      boxShadow={boxShadow}
      smMarginTop={smMarginTop}
      scale={scale}
      type = {type}
    >
      {parse(text)}
    </CustomButtonStyle>
  )
}

export default CustomButton;
