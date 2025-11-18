import styled from 'styled-components'
import { globalFonts } from '../../../constants/fonts.constant'
import { COLORS_CONSTANT } from '../../../constants/colrs.constant'

const TextStyle = styled.div`
  font-family: ${globalFonts.Poppins};
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  color: ${COLORS_CONSTANT.secondary};
`

const AccountTitleText = ({text}: {text: string}) => {
  return (
    <TextStyle>{text}</TextStyle>
  )
}

export default AccountTitleText