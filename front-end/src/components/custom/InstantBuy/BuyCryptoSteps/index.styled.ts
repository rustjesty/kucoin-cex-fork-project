import styled from "styled-components"
import { globalFonts } from "../../../../constants/fonts.constant"
import { COLORS_CONSTANT } from "../../../../constants/colrs.constant"

const SubTitle = styled.div`
  color: #55535B;
  max-width: 682px;
  width: 100%;
  font-size: 18px;
  line-height: 1.5;
  font-family: Roboto;
  font-weight: 400;
`

// right part
const CryptoStep = styled.div`
  max-width: 416px;
  width: 100%;
  height: 350px;
  border-radius: 16px;
  padding: 40px 32px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4{
    color: "#051B13";
    border-radius: 100px;
    border: #F2F4F7 solid 1px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--Black-Gaze, #051B13);
    /* Text Sizes/Regular */
    font-family: ${globalFonts.NeueMontreal};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 155%; 
  }
  h5{
    font-family: ${globalFonts.Poppins};
    font-weight: 600;
    font-size: 24px;
    line-height: 1.5;
    color: ${COLORS_CONSTANT.secondary}
  }
  h6{
    font-family: ${globalFonts.Roboto};
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    font-style: normal;
    color: ${COLORS_CONSTANT.greyText}
  }
`
// right part
const StepFlex = styled.div`
  max-width: 416px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const MainFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  gap: 70px;
  padding-left: 100px;
  @media screen and (max-width: 1298px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media screen and (max-width: 900px) {
    padding-left: 0px;
    gap: 32px;
  }
`

const InfoGraphicImage = styled.img`
  max-width: 677px;
  width: 100%;
  height: 366px;
`

export{
  SubTitle,
  StepFlex,
  CryptoStep,
  MainFlex,
  InfoGraphicImage
}