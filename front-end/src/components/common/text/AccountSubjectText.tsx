import styled from 'styled-components'
import { globalFonts } from '../../../constants/fonts.constant'
import { COLORS_CONSTANT } from '../../../constants/colrs.constant'

interface ITextStyle {
  color?: string;
  text?: string;
}

const TextStyle = styled.div<ITextStyle>`
  font-family: ${globalFonts.Poppins};
  font-weight: 600;
  font-size: 16px;
  line-height: 14.33px;
  color: ${(props) => props.color || COLORS_CONSTANT.secondary};
`

const AccountSubjectText = ({ text, color }: ITextStyle) => {
  return (
    <TextStyle
      color={color}
    >{text}</TextStyle>
  )
}

export default AccountSubjectText