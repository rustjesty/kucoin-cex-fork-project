import { Outlet, useLocation } from "react-router-dom"
import Footer from "./Footer"

import styled from "styled-components"
import Header from "./Header"
import FAQs from "../faq"
import { Toaster } from "react-hot-toast"

const LayoutStyle = styled.div`
  min-height: 100%;
`

const Layout = () => {
  const url = useLocation();
  return (
    <LayoutStyle>
      <Header />
      <Outlet />
      {
        url.pathname !== "/sign-in" && url.pathname !== "/sign-up"  && url.pathname !== "/convert" && url.pathname !== "/spot" && url.pathname !== "*"  &&
        <FAQs />
      }

      <Footer />
      <Toaster />
    </LayoutStyle>
  )
}

export default Layout