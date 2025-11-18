import styled from "styled-components";
import { globalFonts } from "../../../constants/fonts.constant";

const OverviewCard = styled.div`

`

const MarketTab = styled.div`
  color: #55535B;
  font-family: ${globalFonts.Poppins};
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
  &.active{
    color: black;
    font-weight: 600;
    &:after {
      content: ""; /* This is necessary for the pseudo element to work. */ 
      display: block; /* This will put the pseudo element on its own line. */
      margin: 0 auto; /* This will center the border. */
      width: 100%; 
      padding-top: 10px; 
      border-bottom: 2px solid black;
    }
  }
  &:hover{
    color: black;
    font-weight: 600;
    &:after {
      content: ""; /* This is necessary for the pseudo element to work. */ 
      display: block; /* This will put the pseudo element on its own line. */
      margin: 0 auto; /* This will center the border. */
      width: 100%; 
      padding-top: 10px; 
      border-bottom: 2px solid black;
    }
  }
`

const SubjectTab = styled.div`
  border: #DDDDDD 1px solid;
  border-radius: 100px;
  padding: 8px 16px;
  font-size: 14px;
  line-height: 1.5;
  cursor: pointer;
  color: #55535B;
  background-color: #fcfcfc;
  &.active{
    color: #33C4AC;
    font-family: ${globalFonts.Poppins};
    font-weight: 600;
    background-color: #ebfaf7;
    border: #33C4AC 1px solid;
  }
  &:hover{
    color: #33C4AC;
    font-family: ${globalFonts.Poppins};
    font-weight: 600;
    background-color: #ebfaf7;
    border: #33C4AC 1px solid;
  }
`

export{
  OverviewCard,
  MarketTab,
  SubjectTab,
}