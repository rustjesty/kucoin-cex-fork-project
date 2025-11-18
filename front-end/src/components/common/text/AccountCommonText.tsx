import styled from "styled-components"
import { COLORS_CONSTANT } from "../../../constants/colrs.constant"
import { globalFonts } from "../../../constants/fonts.constant"

interface IAccountCommonTextStyle{
  text?: string;
  className?: string;
  fontWeight?: string;
  lineHeight?: string;
  fontSize?: string;
}

const AccountCommonTextStyle = styled.span<IAccountCommonTextStyle>`
  color: ${COLORS_CONSTANT.secondary};
  font-family: ${globalFonts.Poppins};
  font-size: ${(props) => props.fontSize || '14px'};
  font-weight: ${(props) => props.fontWeight || '500'};
  line-height: ${(props) => props.lineHeight || '16.8px'};
  &.grey{
    color: #55535B;
  }
`
const AccountCommonText = (
  {text, className, fontWeight, lineHeight, fontSize}: IAccountCommonTextStyle
) => {
  return (
    <AccountCommonTextStyle className = {className} fontWeight = {fontWeight} lineHeight = {lineHeight} fontSize={fontSize}>
      {text}
    </AccountCommonTextStyle>
  )
}

export default AccountCommonText