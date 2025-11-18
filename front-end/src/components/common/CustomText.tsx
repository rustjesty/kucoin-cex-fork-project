import styled from 'styled-components';
import parse from 'html-react-parser';
// import { useGlobalContext } from 'context/GlobalContext';
interface CustomTextStyleType {
  className?: string;
  text?: any;
  gap?: string;
  color?: string;
  justifyContent?: string;
  direction?: string;
  alignItems?: string;
  width?: string;
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
  smHeight?: string;
  maxWidth?: string;
  smMaxWidth?: string;
  textAlign?: string;
  height?: string;
  display?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  cursor?: string;
  onClick?: () => void;
  letterSpacing?: string;
  bgColor?: string;
  borderRadius?: string;
  textDecoration?: string;
  border?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderBottom?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  smBorderRight?: string;
  smAlignItems?: string;
  fontFamily?: string;
  padding?: string;
  smPadding?: string;
  boxShadow?: string;
  smDisplay?: string;
}

///
export const CustomTextStyle = styled.div<CustomTextStyleType>`
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ${(props) => props.fontFamily || 'Inconsolata'};
  max-width: ${(props) => props.maxWidth || '100%'};
  width: ${(props) => props.width};
  align-items: ${(props) => props.alignItems || 'center'};
  display: ${(props) => props.display || 'flex'};
  justify-content: ${(props) => props.justifyContent || 'start'};
  color: ${(props) => props.color || 'black'};
  box-shadow: ${(props) => props.boxShadow};
  flex-direction: ${(props) => props.direction || 'row'};
  gap: ${(props) => props.gap || '0px'};
  margin-bottom: ${(props) => props.marginBottom || '0px'};
  margin-top: ${(props) => props.marginTop || '0px'};
  font-weight: ${(props) => props.fontWeight || '700'};
  font-style: normal;
  font-size: ${(props) => props.fontSize || '28px'};
  line-height: ${(props) => props.lineHeight || 'normal'};
  text-align: ${(props) => props.textAlign || 'start'};
  height: ${(props) => props.height || ''};
  margin-top: ${(props) => props.marginTop || '0px'};
  margin-bottom: ${(props) => props.marginBottom || '0px'};
  margin-left: ${(props) => props.marginLeft || '0px'};
  margin-right: ${(props) => props.marginRight || '0px'};
  cursor: ${(props) => props.cursor};
  letter-spacing: ${(props) => props.letterSpacing || '0'};
  background: ${(props) => props.bgColor};
  border-right: ${(props) => props.borderRight};
  border-left: ${(props) => props.borderLeft};
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
  border-radius: ${(props) => props.borderRadius};
  border-top-left-radius: ${(props) => props.borderRadius ? props.borderRadius : props.borderTopLeftRadius};
  border-bottom-left-radius: ${(props) => props.borderRadius ? props.borderRadius : props.borderBottomLeftRadius};
  border-top-right-radius: ${(props) => props.borderRadius ? props.borderRadius : props.borderTopRightRadius};
  border-bottom-right-radius: ${(props) => props.borderRadius ? props.borderRadius : props.borderBottomRightRadius};
  border: ${(props) => props.border};
  text-decoration: ${(props) => props.textDecoration};
  padding: ${(props) => props.padding};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-right: ${(props) => props.paddingRight};
  padding-left: ${(props) => props.paddingLeft};
  strong{
    font-weight: 700;
  }
  a{
    text-decoration: underline;
    font-weight: 500;
  }
  &.three-dots{
    white-space: nowrap;
    overflow: hidden!important;
    text-overflow: ellipsis;
  } 
  &.word-wrap{
    word-wrap: break-word;
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => props.smDisplay || 'flex'};
    max-width: ${(props) => props.smMaxWidth || '100%'};
    margin-bottom: ${(props) => props.smMarginBottom || props.marginBottom};
    margin-top: ${(props) => props.smMarginTop || props.marginTop};
    gap: ${(props) => props.smGap || props.gap};
    font-weight: ${(props) => props.smFontWeight || props.fontWeight};
    font-size:${(props) => props.smFontSize || '18px'};
    line-height: ${(props) => props.smLineHeight || 'normal'};
    height: ${(props) => props.smHeight};
    border-right: ${(props) => props.smBorderRight};
    align-items: ${(props) => props.smAlignItems};
    padding: ${(props) => props.smPadding};
  }
`
const CustomText = ({
  text,
  width,
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
  textAlign,
  height,
  smHeight,
  maxWidth,
  smMaxWidth,
  display,
  cursor,
  onClick,
  letterSpacing,
  bgColor,
  borderRadius,
  textDecoration,
  border,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  padding,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
  smPadding,
  smBorderRight,
  smAlignItems,
  fontFamily,
  borderTop,
  borderLeft,
  borderBottom,
  borderRight,
  boxShadow,
  smDisplay
}: CustomTextStyleType) => {
  // const { colorMode } = useGlobalContext()
  let _text: any = typeof (text) === 'number' ? text.toString() : text;
  return (
    <CustomTextStyle
      text={text}
      width={width}
      // color={color ? color : (colorMode === 'light' ? 'black' : '#e7e7e7')}
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
      textAlign={textAlign}
      height={height}
      smHeight={smHeight}
      maxWidth={maxWidth}
      smMaxWidth={smMaxWidth}
      display={display}
      cursor={cursor}
      boxShadow={boxShadow}
      onClick={onClick}
      letterSpacing={letterSpacing}
      bgColor={bgColor}
      borderRadius={borderRadius}
      textDecoration={textDecoration}
      border={border}
      borderBottomLeftRadius={borderBottomLeftRadius}
      borderTopLeftRadius={borderTopLeftRadius}
      borderTopRightRadius={borderTopRightRadius}
      borderBottomRightRadius={borderBottomRightRadius}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingBottom={paddingBottom}
      paddingRight={paddingRight}
      smAlignItems={smAlignItems}
      smBorderRight={smBorderRight}
      fontFamily={fontFamily}
      borderTop={borderTop}
      borderBottom={borderBottom}
      borderRight={borderRight}
      borderLeft={borderLeft}
      padding={padding}
      smPadding={smPadding}
      smDisplay={smDisplay}
      color = {color}
    >
      {parse(_text) ? parse(_text) : ''}
    </CustomTextStyle>
  )
}

export default CustomText;