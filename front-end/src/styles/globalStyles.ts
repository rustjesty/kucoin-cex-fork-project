import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  overflow-x: hidden;
  body {
    margin: 0;
    padding: 0;
    background-color: white;
  }
  
  strong{
    color: red !important;
    font-size: 12px;
  }
`;

export default GlobalStyle;

/** Page Container */
interface ContainerType {
  maxWidth?: string;
  marginTop?: string;
  padding?: string;
  bgColor?: string;
  smBgColor?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  smPaddingTop?: string;
  smPaddingBottom?: string;
  smPaddingLeft?: string;
  smPaddingRight?: string;
  borderRadius?: string;
  marginBottom?: string;
  smTop?: string;
  smMarginTop?: string;
  smMarginBottom?: string;
  smPadding?: string;
}

export const Container = styled.div<ContainerType>`
  margin: auto;
  overflow-x: hidden;
  max-width: ${(props) => props.maxWidth || '1512px'}; // Corrected '1141x' to '1141px'
  margin-top: ${(props) => props.marginTop || '0px'};
  padding: ${(props) => props.padding};
  padding-left: ${(props) => props.paddingLeft || '0px'};
  padding-right: ${(props) => props.paddingRight || '0px'};
  padding-top: ${(props) => props.paddingTop || '0px'};
  padding-bottom: ${(props) => props.paddingBottom || '0px'};
  border-radius: ${(props) => props.borderRadius};
  margin-bottom: ${(props) => props.marginBottom};
  position: relative;
  background-color: ${(props) => props.bgColor && props.bgColor};
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: ${(props) => props.smPadding};
    padding-top: ${(props) => props.smPaddingTop || '0px'};
    padding-bottom: ${(props) => props.smPaddingBottom || '0px'};
    padding-left: ${(props) => props.smPaddingLeft};
    padding-right: ${(props) => props.smPaddingRight};
    top: ${(props) => props.smTop};
    margin-top: ${(props) => props.smMarginTop};
    margin-bottom: ${(props) => props.smMarginBottom};
    background-color: ${(props) => props.smBgColor && props.smBgColor};
  }
`

interface IPageWrapper {
  colorMode?: string;
  bgColor?: string;
  height?: string;
  overflowX?: string;
  overflowY?: string;
}

export const Wrapper = styled.div<IPageWrapper>`
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.bgColor && props.bgColor};
  height: ${(props) => props.height && props.height};
  overflow-x: ${(props) => props.overflowX || 'hidden'};
  overflow-y: ${(props) => props.overflowY && props.overflowY};
`