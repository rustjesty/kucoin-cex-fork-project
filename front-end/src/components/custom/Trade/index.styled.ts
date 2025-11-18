import styled from "styled-components";
import { COLORS_CONSTANT } from "../../../constants/colrs.constant";
import { globalFonts } from "../../../constants/fonts.constant";
import { Link } from "react-router-dom";

const TradeBox = styled.div`
  border-radius: 14.327px;
  border: 1px solid #DDD;
  background: #FFF;
  padding: 20px;
  max-width: 447px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 16px;
  @media screen and (max-width: 768px) {
    padding: 20px 16px;
  }
`

const ConvertCryptoText = styled.div`
  color: black;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const BalanceBox = styled.div`
  border-radius: 89.545px;
  border: 0.895px solid #E6E6E6;
  display: flex;
  padding: 4.477px 13.432px;
  justify-content: center;
  align-items: center;
  gap: 4.477px;

  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: ${globalFonts.Poppins};
  font-size: 12.536px;
  font-style: normal;
  font-weight: 400;
  line-height: 21.491px;
  @media screen and (max-width: 768px) {
    margin: auto;
  }
`

const TradeButton = styled.button`
  display: flex;
  padding: 12px 63px;
  justify-content: center;
  gap: 10px;
  width: 100%;

  border-radius: 4px;
  border: 0.5px solid rgba(69, 239, 210, 0.50);
  background: #E2FFFA;
  padding: 12px 63px;
  color:  #55535B;
  text-align: center;
  font-family: Arial;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`

const LoginRegisterLink = styled(Link)`
  color: ${COLORS_CONSTANT.greenText};
  text-align: center;
  font-family: Arial;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; 
  text-decoration: none;
  &:hover{
    scale:1.1;
  }
`

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const TradeSubject = styled.div`
  color: #55535B;
  font-family: ${globalFonts.Poppins};
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 14.327px; /* 143.272% */
  text-transform: uppercase;
`

const TradeContentText = styled.div`
  color: rgba(21, 25, 32, 0.50);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17.909px;
`

const EstPrice = styled.div`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Poppins;
  font-size: 12.536px;
  font-style: normal;
  font-weight: 400;
  line-height: 21.491px;
  text-align: center;
`

const SwapButton = styled.div`
  margin: auto;
  cursor: pointer;
  &:hover{
    scale: 1.1;
  }
`

const TokenInputFlex = styled.div`
  display: flex;
  width: 100%;
  padding: 6px 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: #FAFAFB;
  @media screen and (max-width: 768px) {
    padding: 4px 16px;
  }
`

const TokenInputBox = styled.input`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: #FAFAFB;
  color: ${COLORS_CONSTANT.secondary};
  
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 35.818px;
  text-align: left;
  border: none;
  outline: none;
  &::placeholder{
    color: #C6C6C6;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const CoinSelectButton = styled.div`
  cursor: pointer;
  display: flex;
  gap: 8.95px;
`

export {
  TradeBox,
  TradeButton,
  LoginRegisterLink,
  ConvertCryptoText,
  BalanceBox,
  MainBox,
  TradeSubject,
  TradeContentText,
  EstPrice,
  SwapButton,
  TokenInputFlex,
  TokenInputBox,
  CoinSelectButton
}