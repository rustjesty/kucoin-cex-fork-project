import styled from "styled-components";
import { globalFonts } from "../../constants/fonts.constant";

const H1 = styled.h1`
  font-size: 50px;
  line-height: 65px;
  font-family: ${globalFonts.Poppins};
  font-weight: 700;
`
const H2 = styled.h2`
  font-size: 32px;
  line-height: 1.5;
  font-family: ${globalFonts.Poppins};
  font-weight: 600;
`
const H3 = styled.h3`
  font-size: 20x;
  line-height: 1.5;
  font-family: ${globalFonts.Poppins};
  font-weight: 600;
`
const B1 = styled.h3`
  font-size: 18px;
  line-height: 24px;
  font-family: ${globalFonts.Roboto};
  font-weight: 400;
`
const B2 = styled.h3`
  font-size: 16px;
  line-height: 24px;
  font-family: ${globalFonts.Poppins};
  font-weight: 400;
`
const B3 = styled.h3`
  font-size: 14px;
  line-height: 24px;
  font-family: ${globalFonts.Poppins};
  font-weight: 400;
`


export{
  H1,
  H2,
  H3,
  B1,
  B2,
  B3
}