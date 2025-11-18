import styled from 'styled-components';
import { device } from '../../styles/Breakpoints';

interface FlexBoxStyleType {
  gap?: string;
  justifyContent?: string;
  direction?: string;
  alignItems?: string;
  marginBottom?: string;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  width?: string;
  padding?: string;
  paddingRight?: string;
  paddingLeft?: string;
  paddingTop?: string;
  paddingBottom?: string;
  height?: string;
  flexWrap?: string;
  position?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  maxWidth?: string;
  maxHeight?: string;
  border?: string;
  borderRadius?: string;
  bgColor?: string;
  borderTop?: string;
  borderLeft?: string;
  borderBottom?: string;
  borderRight?: string;
  boxShadow?: string;
  textAlign?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
  top?: string;
  right?: string;
  display?: string;
  bgImage?: string;
  color?: string;
  cursor?: string;
  alignSelf?: string;
  className?: string;
  hoverBgColor?: string;

  lgMaxWidth?: string;
  lgDisplay?: string;
  lgGap?: string;
  lgJustifyContent?: string;

  smDirection?: string;
  smMarginBottom?: string;
  smMarginTop?: string;
  smGap?: string;
  smFontSize?: string;
  smLineHeight?: string;
  smFontWeight?: string;
  smJustifyContent?: string;

  smPaddingRight?: string;
  smPaddingLeft?: string;
  smPaddingTop?: string;
  smPaddingBottom?: string;
  smPadding?: string;
  smHeight?: string;
  smPosition?: string;
  smWidth?: string;
  smBorderRight?: string;
  smAlignItems?: string;
  smBorderBottom?: string;
  smBorderTop?: string;
  smBorderLeft?: string;
  smBgColor?: string;
  smTop?: string;
  zIndex?: number;
}


export const FlexBox = styled.div<FlexBoxStyleType>`
  display: ${(props) => props.display ? props.display : 'flex'};
  z-index: ${(props) => props.zIndex};
  top: ${(props) => props.top || ''};
  text-align: ${(props) => props.textAlign};
  right: ${(props) => props.right || ''};
  position: ${(props) => props.position || ''};
  width: ${(props) => props.width || '100%'};
  max-width: ${(props) => props.maxWidth};
  align-items: ${(props) => props.alignItems || 'start'};
  flex-wrap: ${(props) => props.flexWrap || ''};
  justify-content: ${(props) => props.justifyContent || 'center'};
  flex-direction: ${(props) => props.direction || 'row'};
  gap: ${(props) => props.gap || '0px'};
  height: ${(props) => props.height};
  color: ${(props) => props.color || 'black'};
  max-height: ${(props) => props.maxHeight};
  box-shadow: ${(props) => props.boxShadow};
  margin-bottom: ${(props) => props.marginBottom || '0px'};
  margin-top: ${(props) => props.marginTop || '0px'};
  margin-left: ${(props) => props.marginLeft || '0px'};
  margin-right: ${(props) => props.marginRight || '0px'};
  padding: ${(props) => props.padding};
  padding-right: ${(props) => props.padding ? props.padding : props.paddingRight};
  padding-left: ${(props) => props.padding ? props.padding : props.paddingLeft};
  padding-bottom: ${(props) => props.padding ? props.padding : props.paddingBottom};
  padding-top: ${(props) => props.padding ? props.padding : props.paddingTop};
  font-weight: ${(props) => props.fontWeight || '700'};
  font-size: ${(props) => props.fontSize || '28px'};
  line-height: ${(props) => props.lineHeight || '41px'};
  border-top: ${(props) => props.border ? props.border : props.borderTop};
  border-right: ${(props) => props.border ? props.border : props.borderRight};
  border-left: ${(props) => props.border ? props.border : props.borderLeft};
  border-bottom: ${(props) => props.border ? props.border : props.borderBottom};
  border-radius: ${(props) => props.borderRadius};
  border-top-left-radius: ${(props) => props.borderRadius ? props.borderRadius : props.borderTopLeftRadius};
  border-bottom-left-radius: ${(props) => props.borderRadius ? props.borderRadius : props.borderBottomLeftRadius};
  border-top-right-radius: ${(props) => props.borderRadius ? props.borderRadius : props.borderTopRightRadius};
  border-bottom-right-radius: ${(props) => props.borderRadius ? props.borderRadius : props.borderBottomRightRadius};
  background-color: ${(props) => props.bgColor};
  background-image: ${(props) => props.bgImage};
  cursor: ${(props) => props.cursor};
  align-self: ${(props) => props.alignSelf};
  &.disabled{
    pointer-events: none;
    /* optional: prevents text selection */
    user-select: none;
    cursor: not-allowed;
  }
  &:hover{
    background-color: ${(props) => props.hoverBgColor};;
  }
  @media ${device.lg} {
    max-width: ${(props) => props.lgMaxWidth};
    gap: ${(props) => props.lgGap};
    display: ${(props) => props.lgDisplay};
    justify-content:  ${(props) => props.lgJustifyContent};
    width: 100%;
  }

  @media ${device.sm} {
    top: ${(props) => props.smTop};
    flex-direction: ${(props) => props.smDirection || 'column'};
    margin-bottom: ${(props) => props.smMarginBottom || props.marginBottom};
    margin-top: ${(props) => props.smMarginTop || props.marginTop};
    gap: ${(props) => props.smGap || props.gap};
    font-weight: ${(props) => props.smFontWeight || props.fontWeight};
    font-size:${(props) => props.smFontSize || '18px'};
    line-height: ${(props) => props.smLineHeight || '26px'};
    justify-content: ${(props) => props.smJustifyContent || 'center'};
    padding-right: ${(props) => props.smPaddingRight || '0px'};
    padding-left: ${(props) => props.smPaddingLeft || '0px'};
    padding-bottom: ${(props) => props.smPaddingBottom || '0px'};
    padding-top: ${(props) => props.smPaddingTop || '0px'};
    height: ${(props) => props.smHeight};
    max-width: ${(props) => props.smWidth};
    width: 100%;
    position: ${(props) => props.smPosition || 'relative'};
    align-items: ${(props) => props.smAlignItems};
    padding: ${(props) => props.smPadding};
    background-color: ${(props) => props.smBgColor};
    border-top: ${(props) => props.smBorderTop};
    border-right: ${(props) => props.smBorderRight};
    border-left: ${(props) => props.smBorderLeft};
    border-bottom: ${(props) => props.smBorderBottom};
  }
`
