import styled from "styled-components"
import { globalFonts } from "../../../constants/fonts.constant"
import { COLORS_CONSTANT } from "../../../constants/colrs.constant";

interface IBalanceText{
  color?: string;
}
const BalanceText = styled.span<IBalanceText>`
  color: ${(props) => props.color || COLORS_CONSTANT.secondary};
  font-family: ${globalFonts.Poppins};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 125% */
  letter-spacing: -0.48px;
`

interface ISymbolText{
  color?: string;
}
const SymbolText = styled.span<ISymbolText>`
  color: ${(props) => props.color || COLORS_CONSTANT.secondary};
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 166.667% */
  letter-spacing: -0.36px;
`

interface IUSDBalanceText{
  color?: string;
}
const USDBalanceText = styled.span<IUSDBalanceText>`
  color: ${(props) => props.color || '#55535B'};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 214.286% */
  letter-spacing: -0.28px;
`

export{
  BalanceText,
  SymbolText,
  USDBalanceText
}