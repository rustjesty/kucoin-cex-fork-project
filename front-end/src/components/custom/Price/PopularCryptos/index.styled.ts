import styled from "styled-components";
import { COLORS_CONSTANT } from "../../../../constants/colrs.constant";
import { Link } from "react-router-dom";

const BuyConvertBox = styled.div`
  border-radius: 10px;
  border: 1px solid rgba(221, 221, 221, 0.50);
  background: #FFF;
  backdrop-filter: blur(10.116731643676758px);

  display: flex;
  max-width: 591px;
  width: 100%;
  padding: 10px 20px 10px 32px;
  justify-content: space-between;
  align-items: center;
`

const CryptoPairBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const CryptoLink = styled(Link)`
  color: #18171C;
  font-family: Aeroport;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  text-transform: uppercase;
  span{
    color: #ddd;
  }
`

const BuyButton = styled.button`
  border: none;
  color: ${COLORS_CONSTANT.secondary};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  background-color: white;
  display: flex;
  gap: 5px;
  align-items: center;
  &:hover{
    scale: 1.1;
  }
`

export {
  BuyConvertBox,
  CryptoPairBox,
  CryptoLink,
  BuyButton
}