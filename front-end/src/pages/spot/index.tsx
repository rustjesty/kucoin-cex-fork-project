// import styled from "styled-components";
// import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import styled from "styled-components";
import { FlexBox } from "../../components/common/FlexBox";
import { useLocation, useParams } from "react-router-dom"
import TradeData from "../../containers/TradeData";
import Orderbook from "./Orderbook";
import TradeBook from "./TradeBook";


const SpotStyle = styled.div`
  width: 100%;
  background-color: #161a1e;
`

const Spot = () => {
  const params = useParams();
  const location = useLocation();

  console.log("location", location, params)
  return (
    <SpotStyle>
      {/* <AdvancedRealTimeChart theme="dark" autosize height="500px"></AdvancedRealTimeChart> */}
      <FlexBox width="100%">
        <FlexBox width="50%"></FlexBox>
      </FlexBox>
      {
        params && params.pair &&
        <TradeData
          pair={params.pair}
        />
      }
      <FlexBox justifyContent="start">
        {
          params && params.pair &&
          <Orderbook
            pair={params.pair}
          />
        }
        {
          params && params.pair &&
          <TradeBook
          />
        }
      </FlexBox>
    </SpotStyle>
  )
}

export default Spot