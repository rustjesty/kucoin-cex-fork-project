import styled from "styled-components";
import { useAppSelector } from "../../hooks";

const OrderbookStyle = styled.div`
  width: 100%;
  max-width: 320px;
  padding: 0px 16px;
`

const Header = styled.div`
  width: 100%;
  max-width: 320px;
  color: #848E9C;

  font-family: Arial;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  padding: 6px 0px;
  div{
    width: 33.33% !important;
    padding: 2px;
  }
`

const AskRow = styled.div`
  display: flex;
  font-family: Arial;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;  
  div{
    width: 33.33% !important;
    padding: 2px;
    &:nth-child(1){
      color: #F6465D;
    }
    &:nth-child(2){
      color: #B7BDC6;
    }
  }
`
const BidRow = styled.div`
  display: flex;
  font-family: Arial;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;  
  div{
    width: 33.33% !important;
    padding: 2px;
    &:nth-child(1){
      color: #45EFD2;
    }
    &:nth-child(2){
      color: #B7BDC6;
    }
  }
`

const Orderbook = ({ pair }: {
  pair: string
}) => {
  const { asks, bids } = useAppSelector((state) => state.global.orderbookData);

  return (
    <OrderbookStyle>
      <Header>
        <div>Price({pair.split("_")[1]})</div>
        <div>Amount({pair.split("_")[0]})</div>
        <div>Total</div>
      </Header>

      {
        asks && asks.length > 0 && asks.map((ask: [string, string], index: number) => (
          <AskRow key={index}>
            <div>{ask[0]}</div>
            <div>{ask[1]}</div>
            <div></div>
          </AskRow>
        ))
      }
      {
        bids && bids.length > 0 && bids.map((ask: [string, string], index: number) => (
          <BidRow key={index}>
            <div>{ask[0]}</div>
            <div>{ask[1]}</div>
            <div></div>
          </BidRow>
        ))
      }
    </OrderbookStyle>
  );
};

export default Orderbook;
