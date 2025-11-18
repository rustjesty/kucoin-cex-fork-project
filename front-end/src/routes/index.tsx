import { Route, Routes, redirect } from 'react-router-dom'
import Layout from '../components/common/layout'
import Home from '../pages/home'
import InstantBuy from '../components/custom/InstantBuy'
import ThirdParty from '../components/custom/ThirdParty'
import Markets from '../components/custom/Markets'
import Price from '../pages/price'
import Coin from '../pages/price/coin'
import Trade from '../components/custom/Trade'
import SignUp from '../components/custom/SignUp'
import Error404 from '../pages/404'
import AccountVerification from '../pages/account/verification'
import IPWhiteList from '../pages/account/IPWhiteList'
import AccountLayout from '../components/common/layout/AccountLayout'
import ChangePassword from '../pages/account/ChangePassword'
import WhitelistedDevices from '../pages/account/WhitelistedDevices'
import ApiKeys from '../pages/account/ApiKeys'
import Affiliates from '../pages/account/Affiliates'
import AccountSecurity from '../pages/account/AccountSecurity'
import AccountOverview from '../pages/account/AccountOverview'
import OrderLayout from '../components/common/layout/OrderLayout'
import { OpenOrders } from '../pages/orders'
import OrderHistory from '../pages/orders/OrderHistory'
import ConvertHistory from '../pages/orders/ConvertHistory'
import TradeHistory from '../pages/orders/TradeHistory'
import WalletLayout from '../components/common/layout/WalletLayout'
import WalletHistory from '../pages/wallet/WalletHistory'
import WalletDeposit from '../pages/wallet/WalletDeposit'
import Spot from '../pages/spot'
import SignIn from '../pages/auth/signin'
import Test from '../pages/test'
import { useAppSelector } from '../hooks'
import ForgotPassword from '../pages/auth/ForgotPassword'
import WalletSpot from '../pages/wallet/WalletSpot'
import WalletOverview from '../pages/wallet/WalletOverview'
import MarketData from '../containers/MarketData'
import WalletWithdraw from '../pages/wallet/WalletWithdraw'
import WalletAddressBook from '../pages/wallet/WalletAddressBook'

const MainRouter = () => {
  const accessToken = useAppSelector((state) => state.auth.accessToken)
  console.log("accessToken", accessToken)
  if (accessToken === '') {
    redirect("/sign-in");
  }

  return (
    <>
      <Routes>
        <Route element={<AccountLayout />}>
          <Route path="/account/verification" element={<AccountVerification />} />
          <Route path="/account/white-list" element={<IPWhiteList />} />
          <Route path="/account/overview" element={<AccountOverview />} />
          <Route path="/account/security" element={<AccountSecurity />} />
          <Route path="/account/affiliates" element={<Affiliates />} />
          <Route path="/account/api-keys" element={<ApiKeys />} />
          <Route path="/account/change-password" element={<ChangePassword />} />
          <Route path="/account/whitelisted-devices" element={<WhitelistedDevices />} />
        </Route>
        <Route element={<OrderLayout />}>
          <Route path="/deposit/open-orders" element={<OpenOrders />} />
          <Route path="/deposit/order-history" element={<OrderHistory />} />
          <Route path="/deposit/trade-history" element={<TradeHistory />} />
          <Route path="/deposit/convert-history" element={<ConvertHistory />} />
        </Route>
        <Route element={<WalletLayout />}>
          <Route path="/wallet" element={<WalletOverview />} />
          <Route path="/wallet/spot" element={<WalletSpot />} />
          <Route path="/wallet/deposit" element={<WalletDeposit />} />
          <Route path="/wallet/withdraw" element={<WalletWithdraw />} />
          <Route path="/wallet/history" element={<WalletHistory />} />
          <Route path="/wallet/addressbook" element={<WalletAddressBook />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/instant-buy" element={<InstantBuy />} />
          <Route path="/third-party" element={<ThirdParty />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/price" element={<Price />} />
          <Route path="/price/:coin" element={<Coin />} />
          <Route path="/convert" element={<Trade />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/trade/:pair" element={<Spot />} />
          <Route path="/test" element={<Test />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
      <MarketData />

    </>
  )
}

export default MainRouter