import styled from "styled-components";
import { globalFonts } from "../../../../constants/fonts.constant";
import { COLORS_CONSTANT } from "../../../../constants/colrs.constant";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CustomImage from "../../CustomImage";
import { FlexBox } from "../../FlexBox";
import api from "../../../../api/api";

interface IWalletSidebarItem {
  text: string;
  link: string;
  activeIcon: string;
  unactiveIcon: string;
}

const topItems: IWalletSidebarItem[] = [
  {
    text: "Wallet Overview",
    link: "/wallet",
    activeIcon: "/assets/images/icons/sidebar/wallet-overview_green.svg",
    unactiveIcon: "/assets/images/icons/sidebar/wallet-overview.svg"
  },
  {
    text: "Spot",
    link: "/wallet/spot",
    activeIcon: "/assets/images/icons/sidebar/wallet-spot_green.svg",
    unactiveIcon: "/assets/images/icons/sidebar/wallet-spot.svg"
  }
]

const bottomItems: IWalletSidebarItem[] = [
  {
    text: "Deposit",
    link: "/wallet/deposit",
    activeIcon: "/assets/images/icons/sidebar/wallet-deposit_green.svg",
    unactiveIcon: "/assets/images/icons/sidebar/wallet-deposit.svg"
  },
  {
    text: "Withdraw",
    link: "/wallet/withdraw",
    activeIcon: "/assets/images/icons/sidebar/wallet-withdraw_green.svg",
    unactiveIcon: "/assets/images/icons/sidebar/wallet-withdraw.svg"
  },
  {
    text: "History",
    link: "/wallet/history",
    activeIcon: "/assets/images/icons/sidebar/wallet-history_green.svg",
    unactiveIcon: "/assets/images/icons/sidebar/wallet-history.svg"
  },
  {
    text: "Addressbook",
    link: "/wallet/addressbook",
    activeIcon: "/assets/images/icons/sidebar/wallet-addressbook_green.svg",
    unactiveIcon: "/assets/images/icons/sidebar/wallet-addressbook.svg"
  }
]

const WalletSidebarStyle = styled.div`
  background-color: #fdfdfd;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 2px #F4F7FE solid;
`;
const WalletSidebarItem = styled(Link)`
  width: 212px;
  height: 46px;
  border-radius: 8px;
  
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;

  padding-left: 12px;
  cursor: pointer;

  text-decoration: none;
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
  font-family: ${globalFonts.Poppins};
  color: ${COLORS_CONSTANT.secondary};
  &.active{
    background-color: #e9f8f5;
    &:hover{
      scale: 1;
    }
  }
  &:hover{
    scale: 1.05;
  }
`

const WalletSidebar = () => {
  const router = useLocation()
  const getBalances = async () => {
    console.log("calling getBalances func")
    const res = await api.authenticatedInstance({
      url: "/api/GetBalance",
      method: "POST",
      data: {
        currency: 'ALL',
      },
    })
    console.log("res======>", res)
  }
  useEffect(() => {
    getBalances()
  }, [])

  return (
    <WalletSidebarStyle>
      <FlexBox direction="column">
        {
          topItems.map((item: IWalletSidebarItem, index: number) => {
            return (
              <WalletSidebarItem
                key={index}
                to={item.link}
                className={router.pathname === item.link ? 'active' : ''}
              >
                <CustomImage
                  image={router.pathname === item.link ? item.activeIcon : item.unactiveIcon}
                  width="24px"
                  height="24px"
                />
                {
                  item.text
                }
              </WalletSidebarItem>
            )
          })
        }
        <FlexBox
          height="1px" bgColor="#F4F7FE"
          marginTop="20px"
          marginBottom="20px"
        />
        {
          bottomItems.map((item: IWalletSidebarItem, index: number) => {
            return (
              <WalletSidebarItem
                key={index}
                to={item.link}
                className={router.pathname === item.link ? 'active' : ''}
              >
                <CustomImage
                  image={router.pathname === item.link ? item.activeIcon : item.unactiveIcon}
                  width="24px"
                  height="24px"
                />
                {
                  item.text
                }
              </WalletSidebarItem>
            )
          })
        }
      </FlexBox>
    </WalletSidebarStyle>
  )
}

export default WalletSidebar