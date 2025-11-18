import Footer from "./Footer"

import styled from "styled-components"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import { FlexBox } from "../FlexBox"
import WalletSidebar from "./Sidebar/WalletSidebar"
import { Toaster } from "react-hot-toast"

const WalletLayoutStyle = styled.div`
  min-height: 100%;
`

const WalletLayout = () => {

  return (
    <WalletLayoutStyle>
      <Header />
      <FlexBox smDirection="row">
        <WalletSidebar />
        <FlexBox padding="30px 50px 300px 50px" bgColor="white" direction="column">
          <Outlet />
          {/* <FAQs /> */}
        </FlexBox>
      </FlexBox>
      <Footer />
      <Toaster />
    </WalletLayoutStyle>
  )
}

export default WalletLayout