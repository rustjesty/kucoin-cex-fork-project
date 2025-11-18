import Footer from "./Footer"

import styled from "styled-components"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import { FlexBox } from "../FlexBox"
import OrderSidebar from "./Sidebar/OrderSidebar"
import { Toaster } from "react-hot-toast"

const OrderLayoutStyle = styled.div`
  min-height: 100%;
`

const OrderLayout = () => {

  return (
    <OrderLayoutStyle>
      <Header />
      <FlexBox smDirection="row">
        <OrderSidebar />
        <FlexBox padding="30px 50px 300px 50px" bgColor="white" direction="column">
          <Outlet />
          {/* <FAQs /> */}
        </FlexBox>
      </FlexBox>

      <Footer />
      <Toaster />
    </OrderLayoutStyle>
  )
}

export default OrderLayout