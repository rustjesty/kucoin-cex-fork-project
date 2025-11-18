import styled from "styled-components";
import { useAppSelector } from "../../hooks";

const TradeBookStyle = styled.div`
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
  &.red{
    color: #F6465D;
  }
  &.green{
    color: #45EFD2;
  }
  div{
    width: 33.33% !important;
    padding: 2px;
  }
`

const TradeBook = () => {
  const tradingBookData = useAppSelector((state) => state.global.tradeData);

  return (
    <TradeBookStyle>
      <Header>
        <div>Price</div>
        <div>Size</div>
        <div>Time</div>
      </Header>

      {
        tradingBookData && tradingBookData.length > 0 && tradingBookData.slice(0, 50).map((data: any, index: number) => {
          const time = new Date(data.timestamp)
          return (
            <AskRow key={index} className={data.execution_side === 'SELL' ? 'red' : 'green'}>
              <div>{data.rate}</div>
              <div>{data.volume}</div>
              <div>{time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()}</div>
            </AskRow>
          )
        })
      }

    </TradeBookStyle>
  );
};

export default TradeBook;
