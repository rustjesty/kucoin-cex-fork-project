import styled from "styled-components"
import { globalFonts } from "../constants/fonts.constant"

const PrevNextButton = styled.button`
  width: 16px;
  height: 16px;
  background-color: white;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NumberButton = styled.div`
  border: none;
  cursor: pointer;
  color: var(--Text, #55535B);
  text-align: center;
  font-family: ${globalFonts.Roboto};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  &.active{
    border-radius: 8px;
    background: #33C4AC;
    width: 32px;
    padding: 4px 11px 4px 12px;

    color: #ffffff;
    text-align: center;
    font-family: ${globalFonts.Poppins};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
`

export{
  PrevNextButton,
  NumberButton
}