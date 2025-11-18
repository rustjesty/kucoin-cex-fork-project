import styled from "styled-components";
const FooterStyle = styled.div`
  background-color: #18171c;
`

const Container = styled.div`
  max-width: 1112px;
  width: 100%;
  margin: auto;
  /* padding: 16px 197px 16px 197px; */
  
  @media screen and (max-width: 768px) {
    padding: 50px 21px
  }
`

const CopyRight = styled.div`
  color: #8b8b8d;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`

const SocialIconLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  &:hover{
    scale: 1.1;
  }
`

const HorizontalLine = styled.div`
  width: 1112px;
  height: 1px;
  opacity: 0.1;
  background: #FFF;
`

const Subject = styled.div`
  color: #FFF;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`

const LinkButton = styled.a`
  color: #8b8b8d;
  text-decoration: none;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  cursor: pointer;
`


export {
  FooterStyle,
  Container,
  CopyRight,
  SocialIconLink,
  HorizontalLine,
  Subject,
  LinkButton
}