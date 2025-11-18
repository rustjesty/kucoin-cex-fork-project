import styled from "styled-components"

const MarketStatBox = styled.div`
  border-radius: 8px;
  border: 1px solid var(--Grey, #D0D0D0);
  background: white;
  display: flex;
  flex-direction: column;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  max-width: 383px;
  width: 100%;

  cursor: pointer;

`

const MarketStatBoxHeader = styled.div`
  padding: 8px 16px;
  color: #19191E;
  font-family: Aeroport;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  display: flex;
  gap: 8px;
  align-items: center;
  background: #f8f8f8;
  border-radius: 8px 8px 0px 0px;
`

const MarketStatBoxBody = styled.div`
  background-color: white;
  padding: 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const MarketStatBoxFooter = styled.div`
  border-radius: 0px 0px 8px 8px;
  border-top: 1px solid rgba(208, 208, 208, 0.39);
  background: rgba(221, 221, 221, 0.10);
  cursor: pointer;
  color: #55535B;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  text-transform: uppercase;

  padding: 10px;
  display: flex;
  gap: 10px;
  justify-content: center;

`

const TokenSymbol = styled.div`
  color: #19191E;
  font-family: Aeroport;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
`

const PriceRising = styled.div`
  color: #33C4AC;
  font-family: Aeroport;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
`

export{
  MarketStatBox,
  MarketStatBoxHeader,
  MarketStatBoxBody,
  MarketStatBoxFooter,
  TokenSymbol,
  PriceRising
}