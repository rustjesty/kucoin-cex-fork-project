import { useState } from "react";
import styled from "styled-components";
import { FlexBox } from "../../common/FlexBox";

interface ICategoryTab {
  text: string;
}

const data: ICategoryTab[] = [
  {
    text: "Overview",
  },
  {
    text: "Analysis",
  },
  {
    text: "About",
  }
]

const CategoryTabStyle = styled.div`
  padding: 10px 16px;
  border-radius: 8px;
  background: rgba(221, 221, 221, 0.15);

  color: #55535B;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  &:hover{
    scale: 1.1;
  }
  &.active{
    background: rgba(51, 196, 172, 0.10);
    color: #33C4AC;
    font-weight: 600;
  }
`


const CategoryTab = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <FlexBox smDirection="row" justifyContent="start" gap = " 10px">
      {
        data.map((tab: ICategoryTab, index: number) => {
          return (
            <CategoryTabStyle
              key={index}
              className={index === activeTab ? 'active' : ''}
              onClick={() => { setActiveTab(index) }}
            >
              {tab.text}
            </CategoryTabStyle>
          )
        })
      }
    </FlexBox>
  )
}

export default CategoryTab