import { useState } from "react";
import styled from "styled-components";

interface ITimeTab {
  text: string;
}

// interface ITimeTabStyle{
//   active: boolean;
// }

const data: ITimeTab[] = [
  {
    text: "1h",
  },
  {
    text: "24h",
  },
  {
    text: "1W",
  },
  {
    text: "1M",
  },
  {
    text: "1Y",
  },
  {
    text: "3Y",
  },
]



const TimeTabStyle = styled.span`
  color: #55535B;
  font-family: Aeroport;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  cursor: pointer;
  padding: 5px 8px;
  &:hover{
    /* scale: 1.3; */
  }
  &.active{
    color: #33C4AC;
  }

  &:not(:last-child){
    border-right: 1px solid var(--line, #DDD);
  }
`

const TimeTab = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <>
      {
        data.map((tab: ITimeTab, index: number) => {
          return (
            <TimeTabStyle
              className={index === activeTab ? 'active' : ''}
              onClick={() => { setActiveTab(index) }}
              key={index}
            >
              {tab.text}
            </TimeTabStyle>
          )
        })
      }
    </>
  )
}

export default TimeTab