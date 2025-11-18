// import { useState } from "react"
import api from "../../../api/api"
import { useAppSelector } from "../../../hooks"
import { Container, Wrapper } from "../../../styles/globalStyles"
import { H3 } from "../../Typography"
import { FlexBox } from "../../common/FlexBox"
import Title from "../../common/text/Title"
import MarketStatBox from "./MarketStatBox"
import MarketTable from "./MarketTable"
import * as S from './index.styled'
import { useEffect, useState } from "react"

const tabs = [
  "Favourites",
  "All",
  "USDT",
  "BTC",
  "ETH"
]

const Markets = () => {
  const [activeTab, setActiveTab] = useState<string>("USDT");
  // const [favPairs, setFavPairs] = useState<string[]>([]);
  const [tableData, setTableData] = useState<any[]>()
  // const [activeSubjectTab, setActiveSubjectTab] = useState<number>(0)

  const marketData = useAppSelector((state) => state.global.marketData)


  useEffect(() => {
    getFavoritePairs();
  }, [])

  useEffect(() => {
    if (marketData && marketData.length > 0) {
      if (activeTab === "All") {
        const transformedData = marketData
          .map(({ base, quote, price, change_in_price, low_24hr, high_24hr, base_volume }: any) => ({ pair: base + "/" + quote, price, change_in_price, low_24hr, high_24hr, base_volume }));
        console.log("transformedData", transformedData)
        setTableData(transformedData)
      } else {
        const transformedData = marketData
          .filter((item: any) => item.quote === activeTab)
          .map(({ base, quote, price, change_in_price, low_24hr, high_24hr, base_volume }: any) => ({ pair: base + "/" + quote, price, change_in_price, low_24hr, high_24hr, base_volume }));
        console.log("transformedData", transformedData)
        setTableData(transformedData)
      }
    }
  }, [activeTab, marketData])

  const getFavoritePairs = async () => {
    try {
      const { data } = await api.authenticatedInstance.get("/api/Customer_Favourite_Pairs");
      if (data.status == "Success") {
        // setFavPairs(data.data)
      }
    } catch (err) {
      console.log("err", err)
    }
  }

  return (
    <>
      <Wrapper bgColor="#ffffff" >
        <Container paddingTop="80px" paddingBottom="80px" paddingRight="150px" paddingLeft="150px">
          <FlexBox direction="column" gap="50px">
            {/* 
            <div>
              <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
              >
                Increment
              </button>
              <span>{count}</span>
              <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
              >
                Decrement
              </button>
            </div> */}

            {/** Markets Overview */}
            <Title
              text="Markets Overview"
              maxWidth="465px"
            />
            <FlexBox gap="30px">
              <MarketStatBox />
              <MarketStatBox />
              <MarketStatBox />
            </FlexBox>

            <H3>
              OXFX cryptocurrency markets
            </H3>
            <FlexBox justifyContent="start" gap="25px">
              {
                tabs.map((tab: string, index: number) => {
                  return (
                    <S.MarketTab
                      key={index}
                      className={tab === activeTab ? 'active' : ''}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </S.MarketTab>
                  )
                })
              }
            </FlexBox>
            {
              tableData &&
              <MarketTable
                mockData={
                  tableData
                }
              />
            }
          </FlexBox>
        </Container>
      </Wrapper>
    </>
  )
}

export default Markets