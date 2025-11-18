import Title from '../../../common/text/Title'
import { Container, Wrapper } from '../../../../styles/globalStyles'
import { FlexBox } from '../../../common/FlexBox'
import SubTitle from '../../../common/text/SubTitle'
import styled from 'styled-components'
import React from 'react'
import { COLORS_CONSTANT } from '../../../../constants/colrs.constant'
import parse from 'html-react-parser';
import CustomImage from '../../../common/CustomImage'

const Tab = styled.div`
  color: #55535B;
  font-size: 16px; // Rounded font size value
  font-style: normal;
  font-weight: 600;
  line-height: 28px; // Adjusted line-height
  display: flex;
  /* width: 171px; */
  width: 100%;
  height: 48px;
  padding: 6px 12px; // Rounded padding values
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover{
    scale: 1.1;
  }
  &.active{
    color: ${COLORS_CONSTANT.greenText};
    border-radius: 10px;
    border: 1px solid rgba(51, 196, 172, 0.20); // Corrected border width
    background: #EBFAF7;
    &:hover{
      scale: 1;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 27.8px;
    height: 34px;
  }
`

const ContentTitle = styled.div`
  color: #18171C;
  font-family: Poppins;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;

  text-align: left;
  max-width: 422px;
  span{
    color: #33C4AC;
    font-weight: 700;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`


interface ITab {
  tabName: string;
  title: string;
  image: string;
  imgHeight: string;
  imgWidth: string;
}

const tabs: ITab[] = [
  {
    tabName: "Convert",
    title: "<span>Convert</span> crypto with one click",
    image: "/assets/images/pages/home/convert.svg",
    imgHeight: "418.17px",
    imgWidth: "460.85px",
  },
  {
    tabName: "Spot",
    title: "Grow your assets with <span>Spot</span> trading",
    image: "/assets/images/pages/home/spot.svg",
    imgHeight: "353.19px",
    imgWidth: "662px",
  },
  {
    tabName: "Futures",
    title: "Leverage your capital up to 50x with <span>Futures</span> trading, coming soon",
    image: "/assets/images/pages/home/futures.svg",
    imgHeight: "353.19px",
    imgWidth: "662px",
  },
]

const InclusiveTrading = () => {
  const [activeTab, setActiveTab] = React.useState<number>(0)
  return (
    <Wrapper bgColor='#f7f7f7'>
      <Container maxWidth='1162px'>
        <FlexBox direction='column' padding='100px 15px' smPadding='50px 16px'>
          <FlexBox gap="32px">
            <FlexBox direction='column' alignItems='center' justifyContent='center'>
              <FlexBox direction='column' alignItems='center' justifyContent='center' gap = "16px">
                <Title
                  text="An inclusive trading platform"
                  maxWidth='754px'
                />
                <SubTitle
                  text="A platform for all levels of crypto knowledge"
                />
              </FlexBox>
              <FlexBox marginTop='32px' borderRadius='10px' padding='4px' bgColor='white' maxWidth='466px' smDirection='row' smPadding='4px' smMarginTop='25px'>
                {
                  tabs.map((tab: ITab, index: number) => {
                    return (
                      <Tab key={index} className={activeTab === index ? 'active' : ''} onClick={() => setActiveTab(index)}>{tab.tabName}</Tab>
                    )
                  })
                }
              </FlexBox>
              <FlexBox alignItems='center' justifyContent='space-between' marginTop='44px' smGap='40px' smDirection='column-reverse'>
                <ContentTitle>{parse(tabs[activeTab].title)}</ContentTitle>
                <CustomImage
                  image={tabs[activeTab].image}
                  width = {tabs[activeTab].imgWidth}
                  height = {tabs[activeTab].imgHeight}
                  smWidth='100%'
                  smHeight='100%'
                />
              </FlexBox>

            </FlexBox>
          </FlexBox>
        </FlexBox>
      </Container>
    </Wrapper>
  )
}

export default InclusiveTrading
