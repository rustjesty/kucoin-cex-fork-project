import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  max-width: 1117px;
  width: 100%;
  padding: 150px 0;
`

const Title = styled.div`
  color: #18171C;
  font-size: 50px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  line-height: 65px;
  max-width: 611px;
  width: 100%;
  font-weight: 700;
  span{
    color: #33C4AC;
  }
`

const TokenBox = styled.div`

`

const SymbolText = styled.div`
  font-size: 18px;
  line-height: 1.5;
  font-weight: 600;
  font-family: Raleway;
`

const TokenMark = styled.div`
  background-color: #ECECEC;
  padding: 4px 6px;
  font-size: 12px;
  line-height: 1.5;
  font-weight: 600;
  border-radius: 4px;
`

const TokenPrice = styled.div`
  font-family: Roboto;
  font-size: 24px;
  line-height: 1.5;
  font-weight: 500;
`

const TokenPercent = styled.div`
  font-size: 18px;
  font-family: Roboto;
  font-weight: 500;
  line-height: 1.6;
  color: #B6B6B6;
`

export {
  Title,
  TokenBox,
  Wrapper,
  Container,
  SymbolText,
  TokenMark,
  TokenPrice,
  TokenPercent
}