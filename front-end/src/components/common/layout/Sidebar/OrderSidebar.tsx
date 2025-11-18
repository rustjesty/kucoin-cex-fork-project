import styled from "styled-components";
import { globalFonts } from "../../../../constants/fonts.constant";
import { COLORS_CONSTANT } from "../../../../constants/colrs.constant";
import { Link, useLocation } from "react-router-dom";
import CustomImage from "../../CustomImage";

interface IOrderSidebarItem {
  text: string;
  link: string;
  activeIcon: string;
  unactiveIcon: string;
}

const items: IOrderSidebarItem[] = [
  {
    text: "Open Orders",
    link: "/deposit/open-orders",
    activeIcon: "/assets/images/icons/sidebar/history-open-orders_green.svg",
    unactiveIcon: "/assets/images/icons/sidebar/history-open-orders.svg"
  },
  {
    text: "Order History",
    link: "/deposit/order-history",
    activeIcon: "/assets/images/icons/sidebar/history-order_green.svg",
    unactiveIcon: "/assets/images/icons/sidebar/history-order.svg"
  },
  {
    text: "Trade History",
    link: "/deposit/trade-history",
    activeIcon: "/assets/images/icons/sidebar/history-trade_green.svg",
    unactiveIcon: "/assets/images/icons/sidebar/history-trade.svg"
  },
  {
    text: "Convert History",
    link: "/deposit/convert-history",
    activeIcon: "/assets/images/icons/sidebar/history-convert_green.svg",
    unactiveIcon: "/assets/images/icons/sidebar/history-convert.svg"
  }
]

const OrderSidebarStyle = styled.div`
  background-color: #fdfdfd;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 2px #F4F7FE solid;
`;
const OrderSidebarItem = styled(Link)`
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

const OrderSidebar = () => {
  const router = useLocation()
  return (
    <OrderSidebarStyle>
      {
        items.map((item: IOrderSidebarItem, index: number) => {
          return (
            <OrderSidebarItem
              key={index}
              to = {item.link}
              className = {router.pathname === item.link ? 'active' : ''}
            >
              <CustomImage
                image={
                  router.pathname === item.link ? item.activeIcon : item.unactiveIcon
                }
              />
              {
                item.text
              }
            </OrderSidebarItem>
          )
        })
      }
    </OrderSidebarStyle>
  )
}

export default OrderSidebar