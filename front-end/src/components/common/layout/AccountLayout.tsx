import Footer from "./Footer"

import styled from "styled-components"
import Header from "./Header"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"
import { FlexBox } from "../FlexBox"
import { Toaster } from "react-hot-toast"

const AccountLayoutStyle = styled.div`
  min-height: 100%;
`

const AccountLayout = () => {

  return (
    <AccountLayoutStyle>
      <Header />
      <FlexBox smDirection="row">
        <Sidebar />
        <FlexBox padding="30px 50px 300px 50px" bgColor="white">
          <Outlet />
        </FlexBox>
      </FlexBox>
      <Footer />
      <Toaster />
    </AccountLayoutStyle>
  )
}

export default AccountLayout