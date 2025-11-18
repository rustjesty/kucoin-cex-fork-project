import styled from "styled-components"
import CustomImage from "../../CustomImage"
import { COLORS_CONSTANT } from "../../../../constants/colrs.constant"
import { useRef, useState } from "react"
import { FlexBox } from "../../FlexBox"
import CustomButton from "../../CustomButton"
import CustomBorderButton from "../../CustomBorderButton"
import HideButton from "../../../button/HideButton"
import CustomText from "../../CustomText"
import { globalFonts } from "../../../../constants/fonts.constant"
import { BalanceText, SymbolText, USDBalanceText } from "../../text"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../../../hooks"
import useOutsideAlerter from "../../../../hooks/useOutsideAlerter"

const ProfileDropdownFlex = styled.div`
  position: relative;
  z-index: 10;
`

const SubjectText = styled.div`
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  font-size: ${globalFonts.Roboto};
  color: white;
  font-weight: 500;
`

const DropdownBox = styled.div`
  position: absolute;
  background-color: ${COLORS_CONSTANT.secondary};
  width: 369px;
  padding: 20px;
  border: #55535B 1px solid;
  border-radius: 5px;
  margin-top: 10px;
  left: -300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const DropDownLink = styled(Link)`  
  text-decoration: none;
  font-size: 15px;
  line-height: 30px;
  font-family: ${globalFonts.Poppins};
  color: white;
  font-weight: 400;
  width: 100%;
  padding: 10px;
  
  display: flex;
  gap: 12px;
  align-items: center;
  &:hover{
    background-color: #2f2d38;
  }
`

interface ILink {
  text: string;
  link: string;
  image: string;
}
const links: ILink[] = [
  {
    text: "Wallet Overview",
    link: "/wallet",
    image: "/assets/images/icons/sidebar/wallet-overview_green.svg",
  },
  {
    text: "Spot",
    link: "/wallet/spot",
    image: "/assets/images/icons/sidebar/wallet-spot_green.svg",
  },
  {
    text: "Deposit",
    link: "/wallet/deposit",
    image: "/assets/images/icons/sidebar/wallet-deposit_green.svg",
  },
  {
    text: "Withdraw",
    link: "/wallet/withdraw",
    image: "/assets/images/icons/sidebar/wallet-withdraw_green.svg",
  },
  {
    text: "History",
    link: "/wallet/history",
    image: "/assets/images/icons/sidebar/wallet-history_green.svg",
  },
  {
    text: "Addressbook",
    link: "/wallet/addressbook",
    image: "/assets/images/icons/sidebar/wallet-addressbook_green.svg",
  }
]


const WalletDropdown = () => {
  const [show, setShow] = useState(false);
  const isHidden = useAppSelector(state => state.auth.isBalanceHidden)
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setShow(false));

  return (
    <ProfileDropdownFlex ref={wrapperRef}>
      <SubjectText onClick={() => {
        setShow(!show)
      }}>
        Wallet
      </SubjectText>
      {
        show &&
        <DropdownBox>
          <FlexBox
            borderRadius="8px"
            bgColor="#242327"
            padding="25px"
            direction="column"
            gap="16px"
          >
            <FlexBox gap="10px" alignItems="center" justifyContent="start">
              <CustomText
                text="Estimated balance"
                fontSize="14px"
                lineHeight="30px"
                color="white"
                fontFamily={globalFonts.Poppins}
              />
              <HideButton />
            </FlexBox>
            <FlexBox justifyContent="start" gap="5px">
              <BalanceText color="white">
                {
                  isHidden ? '********' : 0.13443
                }
              </BalanceText>
              <SymbolText color="white">
                BTC
              </SymbolText>
            </FlexBox>
            <USDBalanceText color="white">
              {
                isHidden ? '********' : '≈' + '15, 2842' + 'USD'
              }
            </USDBalanceText>
          </FlexBox>
          <FlexBox gap="10px">
            <CustomButton
              text="Deposit"
              fontSize="14px"
              lineHeight="24px"
              height="40px"
              width="156px"
            />
            <CustomBorderButton
              text="Withdraw"
              fontSize="14px"
              lineHeight="24px"
              height="40px"
              width="156px"
              color="white"
            />
          </FlexBox>
          <FlexBox
            bgColor="#55535B"
            height="1px"
          />
          <FlexBox direction="column" gap="10px">
            {
              links.map((link: ILink, index: number) => {
                return (
                  <DropDownLink to={link.link} key={index}>
                    <CustomImage
                      image={link.image}
                      width="24px"
                      height="24px"
                    />
                    <span>{link.text}</span>
                  </DropDownLink>
                )
              })
            }


          </FlexBox>
        </DropdownBox>
      }
    </ProfileDropdownFlex>
  )
}

export default WalletDropdown