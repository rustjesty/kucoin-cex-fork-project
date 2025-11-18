import styled from "styled-components";

const Style = styled.div`
  background-color: white;
  width: 100%;
  padding: 80px 0px;
`


const Main = styled.div`
  background-color: #18171C;
  max-width: 952px;
  width: 100%;
  margin: auto;
  padding: 84px 15px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`

const Title = styled.div`
  font-family: Poppins;
  font-weight: bold;
  font-size: 50px;
  line-height: 65px;
  color: white;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 28px;
    line-height: 40px;
  }
`

const SubTitle = styled.div`
  color: white;
  max-width: 616px;
  width: 100%;
  margin: auto;
  color: #FFF;

  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
  @media screen and (max-width: 768px) {
    color: #FFF;

    text-align: center;
    /* B3 */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`

export{
  Style,
  Main,
  Title,
  SubTitle
}