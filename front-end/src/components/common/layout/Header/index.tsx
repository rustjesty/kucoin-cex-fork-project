import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CustomImage from '../../CustomImage';
import { LOGO_IMAGE } from '../../../../constants/image.constants';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks';
import { FlexBox } from '../../FlexBox';
import { ORDER_LINKS } from '../../../../constants/links.constants';
import AccountDropdown from './AccountDropdown';
import WalletDropdown from './WalletDropdown';
import { useState } from 'react';
import { globalFonts } from '../../../../constants/fonts.constant';
import SelectFiatModal from '../../../modal/SelectFiatModal';
import SelectLangModal from '../../../modal/SelectLangModal';


const HeaderWrapper = styled(Navbar)`
  background-color: #18171C;
  padding: 18px 24px;
  .navbar-nav .nav-link.active, .navbar-nav .nav-link.show {
    color: #33C4AC;
    font-size: 14px;
  }

  .dropdown-menu.show {
    display: inline-flex;
    padding: 8px 0px;
    flex-direction: column;
    align-items: flex-start;

    border-radius: 8px;
    border: 0.5px solid rgba(255, 255, 255, 0.05);
    background: #18171C;
    box-shadow: 0px 0px 4px 0px rgba(255, 255, 255, 0.10) inset;
    a{
      color: #ffffff;
      
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; 
      &:hover{
        background-color: #222;
      }
    }
  }

`

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  max-width: 1512px;
  width: 100%;
`

const NavLink = styled(Nav.Link)`
  color: #FFF;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; 
  &:hover{
    color: #dddddd;
  }
`

const NavbarCollapse = styled(Navbar.Collapse)`
  display: flex;
  align-items: center;
`

const CustomNavDropdown = styled(NavDropdown)`
  a{
    color: #FFF;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    display: flex;
    gap: 10px;
    align-items: center;
    &:hover{
      color: #dddddd;
    }
    img{
      width: 34px;
      height: 34px;
      padding: 5px;
      &:not(.profile){
        border-radius: 8px;
        border: 0.5px solid rgba(255, 255, 255, 0.05);
        background: #18171C;
      }
      
      /* box-shadow: 0px 0px 4px 0px rgba(255, 255, 255, 0.10) inset; */
    }
  }
`



const CustomNav = styled(Nav)`
  display: flex;
  gap: 32px;
  margin-left: 39px;
`

const SignUpButton = styled(Link)`
  padding: 12px 24px;
  color: #45EFD2;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  border: 1px #45EFD2 solid;
  background-color: #1c2d2e;
  border-radius: 8px;
  text-decoration: none;
`

const NavDropdownItem = styled(NavDropdown.Item)`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: start;
`

const LangMark = styled.div`
  background-color: #222529;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  font-family: ${globalFonts.Roboto};
  padding: 10px;
  border-radius: 100px;
  color: white;
  cursor: pointer;
`

const FiatMark = styled.div`
  background-color: #222529;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  font-family: ${globalFonts.Roboto};
  padding: 10px;
  border-radius: 100px;
  color: white;
  cursor: pointer;
`

function Header() {
  const accessToken = useAppSelector((state) => state.auth.accessToken)
  const globalFiat = useAppSelector((state) => state.global.fiat)
  const globalLang: ILang = useAppSelector((state) => state.global.language)

  const [showFiatModal, setShowFiatModal] = useState<boolean>(false)
  const [showLangModal, setShowLangModal] = useState<boolean>(false)
  return (
    <HeaderWrapper expand="lg">
      <NavContainer>
        <Link to="/">
          <CustomImage image={LOGO_IMAGE} width='137px' height='30px' />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse id="responsive-navbar-nav">
          <CustomNav className="me-auto">
            <CustomNavDropdown title="Buy Crypto" id="collapsible-nav-dropdown">
              <NavDropdownItem href="/instant-buy">
                <CustomImage
                  image="/assets/images/icons/header/instantbuy.svg"
                />Instant Buy
              </NavDropdownItem>
              <NavDropdownItem href="/third-party">
                <CustomImage
                  image="/assets/images/icons/header/thirdparty.svg"
                />Third Party</NavDropdownItem>
              <NavDropdownItem href="/instant-buy">
                <CustomImage
                  image="/assets/images/icons/header/fiatdeposit.svg"
                />Fiat Deposits
              </NavDropdownItem>

            </CustomNavDropdown>
            <NavLink href="/markets">Markets</NavLink>
            <CustomNavDropdown title="Trade" id="collapsible-nav-dropdown">
              <NavDropdownItem href="/instant-buy">
                <CustomImage
                  image="/assets/images/icons/header/spot.svg"
                />Spot
              </NavDropdownItem>
              <NavDropdownItem href="/third-party">
                <CustomImage
                  image="/assets/images/icons/header/convert.svg"
                />Convert
              </NavDropdownItem>
              <NavDropdownItem href="/instant-buy">
                <CustomImage
                  image="/assets/images/icons/header/margin.svg"
                />Margin
              </NavDropdownItem>
              <NavDropdownItem href="/third-party">
                <CustomImage
                  image="/assets/images/icons/header/tradingbot.svg"
                />Trading Bot
              </NavDropdownItem>
              <NavDropdownItem href="/instant-buy">
                <CustomImage
                  image="/assets/images/icons/header/apis.svg"
                />APIs
              </NavDropdownItem>
            </CustomNavDropdown>
            <CustomNavDropdown title="Futures" id="collapsible-nav-dropdown">
              <NavDropdownItem href="#action/3.1">
                <CustomImage
                  image="/assets/images/icons/header/howtobuy.svg"
                />How to buy
              </NavDropdownItem>
              <NavDropdownItem href="#action/3.1">
                <CustomImage
                  image="/assets/images/icons/header/price.svg"
                />Price
              </NavDropdownItem>
              <NavDropdownItem href="#action/3.1">
                <CustomImage
                  image="/assets/images/icons/header/securityoffunds.svg"
                />Security of funds
              </NavDropdownItem>
              <NavDropdownItem href="#action/3.1">
                <CustomImage
                  image="/assets/images/icons/header/ProofofReserves.svg"
                />Proof of Reserves
              </NavDropdownItem>
              <NavDropdownItem href="#action/3.1">
                <CustomImage
                  image="/assets/images/icons/header/listingapplication.svg"
                />Listing application
              </NavDropdownItem>
            </CustomNavDropdown>
            <NavLink href="#pricing">Earn</NavLink>
            <CustomNavDropdown title="Institutional" id="collapsible-nav-dropdown">
              <NavDropdownItem href="#action/3.1">
                <CustomImage
                  image="/assets/images/icons/header/referral.svg"
                />
                Buy Crypto
              </NavDropdownItem>
            </CustomNavDropdown>
            <NavLink href="#pricing">Learn</NavLink>
            <CustomNavDropdown title="More" id="collapsible-nav-dropdown">
              <NavDropdownItem href="#action/3.1">
                <CustomImage
                  image="/assets/images/icons/header/referral.svg"
                />Referral program
              </NavDropdownItem>
              <NavDropdownItem href="#action/3.1">
                <CustomImage
                  image="/assets/images/icons/header/currencies.svg"
                />Currencies
              </NavDropdownItem>
              <NavDropdownItem href="#action/3.1">
                <CustomImage
                  image="/assets/images/icons/header/howtobuy.svg"
                />How to buy
              </NavDropdownItem>
              <NavDropdownItem href="#action/3.1">
                <CustomImage
                  image="/assets/images/icons/header/price.svg"
                />Price
              </NavDropdownItem>
              <NavDropdownItem href="#action/3.1">
                <CustomImage
                  image="/assets/images/icons/header/securityoffunds.svg"
                />Security of funds
              </NavDropdownItem>
              <NavDropdownItem href="#action/3.1">
                <CustomImage
                  image="/assets/images/icons/header/ProofofReserves.svg"
                />Proof of Reserves
              </NavDropdownItem>
              <NavDropdownItem href="#action/3.1">
                <CustomImage
                  image="/assets/images/icons/header/listingapplication.svg"
                />Listing application
              </NavDropdownItem>
            </CustomNavDropdown>

          </CustomNav>
          {
            accessToken && accessToken !== ''
              ?
              <FlexBox alignItems='center' width='default' gap="20px">
                <WalletDropdown />
                <CustomNavDropdown title="Orders" id="collapsible-nav-dropdown">
                  {
                    ORDER_LINKS.map((link: ILink) => {
                      return (
                        <NavDropdownItem href={link.link}>
                          <CustomImage
                            image={link.headerImage}
                          />
                          {link.text}
                        </NavDropdownItem>
                      )
                    })
                  }
                </CustomNavDropdown>
                <AccountDropdown />
                <LangMark
                onClick={() => {
                  setShowLangModal(true)
                }}
                >
                  {
                    globalLang && globalLang.name
                  }
                </LangMark>
                <FiatMark
                  onClick={() => {
                    setShowFiatModal(true)
                  }}
                >
                  {
                    globalFiat && globalFiat.name
                  }
                </FiatMark>
              </FlexBox>
              :
              <FlexBox alignItems='center' gap="18px" justifyContent='end'>
                <CustomImage
                  image="/assets/images/icons/search.svg"
                />
                <NavLink href="/sign-in">Login</NavLink>
                <SignUpButton to="/sign-up">
                  Sign Up
                </SignUpButton>
                <CustomImage
                  image="/assets/images/icons/download.svg"
                />
                {/* <CustomImage
                  image="/assets/images/icons/question.png"
                /> */}
              </FlexBox>
          }


        </NavbarCollapse>
      </NavContainer>
      <SelectFiatModal
        show={showFiatModal}
        onClose={() => { setShowFiatModal(false) }}
      />
      <SelectLangModal
        show={showLangModal}
        onClose={() => { setShowLangModal(false) }}
      />
    </HeaderWrapper>
  );
}

export default Header;