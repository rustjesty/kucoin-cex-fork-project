import styled from 'styled-components';
interface CustomTextLinkType {
  text?: string;
  link?: string;
  width?: string;
  maxWidth?: string;
  bgColor?: string;
  onClick?: () => void;
  onSubmit?: () => void;
  color?: string;
  marginBottom?: string;
  type?: string;
  cursor?: string;
  display?: string;
  disabled?: boolean;
  height?: string;
  fontFamily?: string;
  marginTop?: string;
  smWidth?: string;
  smHeight?: string;
  borderRadius?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  smFontSize?: string;
  justifyContent?: string;
  className?: string;
  hoverColor?: string;
  hoverBgColor?: string;
  smLineHeight?: string;
  smFontWeight?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderBottom?: string;
  textAlign?: string;
  alignItems?: string;
  smMarginTop?: string;
}


const CustomTextLinkStyle = styled.a<CustomTextLinkType>`
    cursor: ${(props) => props.cursor || 'pointer'};
    /* border: #7E88CA solid 1px; */
    max-width: ${(props) => props.maxWidth};
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height};
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 41px;
    letter-spacing: 0.105px;    
    font-family: ${(props) => props.fontFamily || 'Open Sans'};
    text-align: ${(props) => props.textAlign || 'start'};
    text-wrap: nowrap;
    font-weight: ${(props) => props.fontWeight || '400'};
    font-size: ${(props) => props.fontSize || '21px'};
    line-height: ${(props) => props.lineHeight || '41px'};
    color: ${(props) => props.color || 'black'};
    margin-top: ${(props) => props.marginTop || '0px'};
    margin-bottom: ${(props) => props.marginBottom || '0px'};
    border-radius: ${(props) => props.borderRadius || '4px'};
    display: ${(props) => props.display || 'flex'};
    align-items: ${(props) => props.alignItems || 'center'};
    justify-content: ${(props) => props.justifyContent || 'start'};
    text-decoration: none;
    border-right: ${(props) => props.borderRight};
    border-left: ${(props) => props.borderLeft};
    border-top: ${(props) => props.borderTop};
    border-bottom: ${(props) => props.borderBottom};
    &:hover{
      color: ${(props) => props.hoverColor || '#6073f6'};
    }
    &:active{
      background: '#6b6b6b';
    }
    &.three-dots{
    
      white-space: nowrap;
      overflow: hidden!important;
      text-overflow: ellipsis;
    } 
    &:disabled{
        cursor: not-allowed; 
        background-color: #767676;
        /* opacity: 0.5;  */
    }
    @media screen and (max-width: 768px) {
        max-width: ${(props) => props.smWidth || '100%'};
        height: ${(props) => props.smHeight};
        margin-top: ${(props) => props.smMarginTop || '0px'};
        font-style: normal;
        font-weight: ${(props) => props.smFontWeight};
        font-size:${(props) => props.smFontSize || '18px'};
        line-height: ${(props) => props.smLineHeight || '26px'};
    }
`

const CustomTextLink = ({
  text,
  link, width, bgColor, color, onClick, onSubmit, cursor,
  disabled, height, marginTop, smHeight, smWidth, borderRadius,
  fontWeight,
  fontSize,
  lineHeight,
  smFontSize,
  justifyContent,
  className,
  hoverColor,
  hoverBgColor,
  smLineHeight,
  smFontWeight,
  borderTop,
  borderLeft,
  borderBottom,
  borderRight,
  textAlign,
  alignItems,
  fontFamily,
  maxWidth,
  display,
  marginBottom,
  smMarginTop
}: CustomTextLinkType) => {
  return (
    <CustomTextLinkStyle
      smLineHeight={smLineHeight}
      href={link}
      width={width}
      color={color}
      onClick={onClick}
      bgColor={bgColor}
      display={display}
      marginBottom={marginBottom}
      onSubmit={onSubmit}
      cursor={cursor}
      height={height}
      maxWidth={maxWidth}
      marginTop={marginTop}
      disabled={disabled}
      smHeight={smHeight}
      smWidth={smWidth}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      smFontSize={smFontSize}
      justifyContent={justifyContent}
      className={className}
      hoverBgColor={hoverBgColor}
      hoverColor={hoverColor}
      smFontWeight={smFontWeight}
      borderTop={borderTop}
      borderBottom={borderBottom}
      borderRight={borderRight}
      borderLeft={borderLeft}
      textAlign={textAlign}
      alignItems={alignItems}
      fontFamily={fontFamily}
      smMarginTop={smMarginTop}
    // target='_blank'
    >
      {text}
    </CustomTextLinkStyle>
  )
}

export default CustomTextLink;