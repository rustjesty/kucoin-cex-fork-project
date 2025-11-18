
import styled from 'styled-components';

interface CustomInputStyleType {
  className?: string;
  placeholder?: string;

  value?: string | number;
  onChange?: any;
  type?: string;
  checked?: boolean;

  gap?: string;
  color?: string;
  justifyContent?: string;
  direction?: string;
  alignItems?: string;
  marginBottom?: string;
  marginTop?: string;
  maxWidth?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  smDirection?: string;
  smMarginBottom?: string;
  smMarginTop?: string;
  smGap?: string;
  smFontSize?: string;
  smLineHeight?: string;
  smFontWeight?: string;
  padding?: string;
  smPadding?: string;
  border?: string;
  borderRadius?: string;
  bgColor?: string;
  height?: string;
  maxLength?: number;
  disabled?: boolean;
  min?: number;
  max?: number;
  textAlign?: string;

  colorMode?: string;

  name?: string;
}


export const CustomInputStyle = styled.input<CustomInputStyleType>`
  max-width: ${(props) => props.maxWidth};
  width: 100%;
  color: ${(props) => props.colorMode ? (props.colorMode === 'light' ? '#767676' : '#b6b6b6') : '#1E1E1E'};
  flex-direction: ${(props) => props.direction || 'row'};
  gap: ${(props) => props.gap || '0px'};
  margin-bottom: ${(props) => props.marginBottom || '0px'};
  margin-top: ${(props) => props.marginTop || '0px'};
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || '12px'};
  line-height: ${(props) => props.lineHeight || 'normal'};
  padding: ${(props) => props.padding || '12px 20px'};
  border: ${(props) => props.border || '1px solid #DEE1E1'};
  border-radius: ${(props) => props.borderRadius || '8px'};
  background: ${(props) => props.colorMode ? (props.colorMode === 'light' ? (props.bgColor ? props.bgColor : '#fafafb') : '#4f4f4f') : '#fafafb'};
  height: ${(props) => props.height};
  text-align: ${(props) => props.textAlign || 'left'};
  font-family: 'Poppins';
  outline: none;
  &::placeholder{
    color: #C6C6C6;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  &.three-dots{
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: ${(props) => props.smMarginBottom || '0px'};
    margin-top: ${(props) => props.smMarginTop || '0px'};
    height: 48px;
    gap: ${(props) => props.smGap || props.gap};
    font-weight: ${(props) => props.smFontWeight || '400'};
    font-size:${(props) => props.smFontSize || '18px'};
    line-height: ${(props) => props.smLineHeight || '26px'};
    padding: ${(props) => props.smPadding};
  }
`
const CustomInput = ({
  placeholder,
  maxWidth,
  color,
  direction,
  justifyContent,
  alignItems,
  gap,
  marginBottom,
  marginTop,
  fontWeight,
  fontSize,
  lineHeight,
  smMarginBottom,
  smMarginTop,
  smGap,
  smFontWeight,
  smFontSize,
  smLineHeight,
  className,
  type,
  value,
  onChange,
  border,
  borderRadius,
  padding,
  smPadding,
  bgColor,
  height,
  checked,
  maxLength,
  disabled,
  min,
  max,
  textAlign,
  name
}: CustomInputStyleType) => {
  const colorMode = "light"
  return (
    <CustomInputStyle
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      maxWidth={maxWidth}
      color={color}
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      marginBottom={marginBottom}
      marginTop={marginTop}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      smMarginBottom={smMarginBottom}
      smMarginTop={smMarginTop}
      smGap={smGap}
      smFontWeight={smFontWeight}
      smFontSize={smFontSize}
      smLineHeight={smLineHeight}
      className={className}
      border={border}
      borderRadius={borderRadius}
      padding={padding}
      smPadding={smPadding}
      bgColor={bgColor}
      height={height}
      checked={checked}
      disabled={disabled}
      min={min}
      max={max}
      textAlign={textAlign}
      colorMode={colorMode}
      name = {name}
    />
  )
}

export default CustomInput;