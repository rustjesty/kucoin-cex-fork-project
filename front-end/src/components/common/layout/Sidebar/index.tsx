import styled from "styled-components";
import { globalFonts } from "../../../../constants/fonts.constant";
import { COLORS_CONSTANT } from "../../../../constants/colrs.constant";
import { Link, useLocation } from "react-router-dom";
import CustomImage from "../../CustomImage";

interface ISidebarItem {
  text: string;
  link: string;
  activeIcon: string;
  unactiveIcon: string;
}

const items: ISidebarItem[] = [
  {
    text: "Overview",
    link: "/account/overview",
    activeIcon: "/assets/images/icons/sidebar/account-overview_green.svg",
    unactiveIcon: "/assets/images/icons/sidebar/account-overview.svg"
  },
  {
    text: "Account Verification",
    link: "/account/verification",
    activeIcon: "/assets/images/icons/sidebar/account-verification_green.svg",
    unactiveIcon: "/assets/images/icons/sidebar/account-verification.svg"
  },
  {
    text: "Security",
    link: "/account/security",
    activeIcon: "/assets/images/icons/sidebar/account-security_green.svg",
    unactiveIcon: "/assets/images/icons/sidebar/account-security.svg"
  },
  {
    text: "IP Whitelisting",
    link: "/account/white-list",
    activeIcon: "/assets/images/icons/sidebar/account-whitelisting_green.svg",
    unactiveIcon: "/assets/images/icons/sidebar/account-whitelisting.svg"
  },
  {
    text: "Affiliates",
    link: "/account/affiliates",
    activeIcon: "/assets/images/icons/sidebar/account-affiliates_green.svg",
    unactiveIcon: "/assets/images/icons/sidebar/account-affiliates.svg"
  },
  {
    text: "Api Keys",
    link: "/account/api-keys",
    activeIcon: "/assets/images/icons/sidebar/account-api-keys_green.svg",
    unactiveIcon: "/assets/images/icons/sidebar/account-api-keys.svg"
  },
  {
    text: "Change Password",
    link: "/account/change-password",
    activeIcon: "/assets/images/icons/sidebar/account-change-password_green.svg",
    unactiveIcon: "/assets/images/icons/sidebar/account-change-password.svg"
  },
  {
    text: "Whitelisted Devices",
    link: "/account/whitelisted-devices",
    activeIcon: "/assets/images/icons/sidebar/account-whitelisted-devices_green.svg",
    unactiveIcon: "/assets/images/icons/sidebar/account-whitelisted-devices.svg"
  },
]

const SidebarStyle = styled.div`
  background-color: #fdfdfd;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 2px #F4F7FE solid;
`;
const SidebarItem = styled(Link)`
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

const Sidebar = () => {
  const router = useLocation()
  return (
    <SidebarStyle>
      {
        items.map((item: ISidebarItem, index: number) => {
          return (
            <SidebarItem
              key={index}
              to={item.link}
              className={router.pathname === item.link ? 'active' : ''}
            >
              <CustomImage
                image={
                  router.pathname === item.link ? item.activeIcon : item.unactiveIcon
                }
              />
              {
                item.text
              }
            </SidebarItem>
          )
        })
      }
    </SidebarStyle>
  )
}

export default Sidebar