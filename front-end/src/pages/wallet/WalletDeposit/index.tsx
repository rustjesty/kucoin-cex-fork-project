import styled from "styled-components"
import ViewAllButton from "../../../components/button/ViewAllButton"
import { FlexBox } from "../../../components/common/FlexBox"
import AccountSubjectText from "../../../components/common/text/AccountSubjectText"
import AccountTitleText from "../../../components/common/text/AccountTitleText"
import { useEffect, useState } from "react"
import BadgeText from "../../../components/text/BadgeText"
import AccountCommonText from "../../../components/common/text/AccountCommonText"
import CustomButton from "../../../components/common/CustomButton"
import CustomImage from "../../../components/common/CustomImage"
import LabelText from "../../../components/common/text/LabelText"
import CustomInput from "../../../components/common/CustomInput"
import CustomText from "../../../components/common/CustomText"
import { generateDepositAddress, getDepositData } from "../../../api/wallet"
import { COLORS_CONSTANT } from "../../../constants/colrs.constant"
import { useAppSelector } from "../../../hooks"
import WalletDepositTable from "./WalletDepositTable"
import { handleCopyToClipboard } from "../../../utils/helpers"
import { successAlert } from "../../../utils/alert"
import CoinSelectModal2 from "../../../components/modal/CoinSelectModal2"
import SelectNetworkModal from "../../../components/modal/SelectNetworkModal"

const DepositTab = styled.div`
  cursor: pointer;
  width: 143px;
  height: 37px;
  color: var(--Text, #55535B);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;

  display: flex;
  justify-content: center;
  align-items: center;
  &.active{
    border-radius: 8px;
    border: 1px solid rgba(51, 196, 172, 0.20);
    background: #EBFAF7;

    color: var(--Text, #33C4AC);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }
`

const QRCodeBox = styled.div`
  border-radius: 16px;
  background: var(--Shade-01, #FFF);
  position: absolute;
  width: 253px;
  height: 333px;
  bottom:50px;
  right: 0px;
`

const DepositAddrText = styled.span`
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${COLORS_CONSTANT.secondary};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`

const SearchDefaultBox = styled.div`
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #DEE1E1;
  background: #FAFAFB;
  width: 100%;

  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div{
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    span{
      color: #1E1E1E;
      &.coin-name{
        color: #DDD;
      }
    }
  }
`

const networkOptions = [
  {
    value: 'erc',
    label: 'ERC20',
    chain: 'Ethereum(eth)'
  },
  {
    value: 'trc',
    label: 'TRC20',
    chain: 'Tron(trx)'
  },
  {
    value: 'trc',
    label: 'SOL',
    chain: 'Solana(sol)'
  },
  {
    value: 'trc',
    label: 'ALGO',
    chain: 'Algorand(algo)'
  },
  {
    value: 'trc',
    label: 'EOS',
    chain: 'eos(eos)'
  },

]

const WalletDeposit = () => {
  const accessToken = useAppSelector((state) => state.auth.accessToken)

  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedToken, setSelectedToken] = useState<string>('usdt');
  const [depositAddr, setDepositAddr] = useState<string>();
  const [depositHistory, setDepositHistory] = useState<any[]>([])
  const [showQRCode, setShowQRCode] = useState<boolean>(false)
  const [showCoinModal, setShowCoinModal] = useState<boolean>()
  const [showNetworkModal, setShowNetworkModal] = useState<boolean>(false)
  const [selectedNetwork, setSelectedNetwork] = useState<any>(networkOptions[0])

  const coinStatsData = useAppSelector(state => state.global.coinStats)

  const tabs: string[] = ["Deposit Crypto", "Deposit Fiat"]
  useEffect(() => {
    console.log("selectedToken", selectedToken)
    const fetchData = async () => {
      if (accessToken === null || accessToken === '') return;
      try {
        const addr = await generateDepositAddress(selectedToken.toLowerCase(), accessToken);
        if (addr) {
          setDepositAddr(addr);
        }
      } catch (error) {
        // Handle any errors that occur during address generation or setting
        console.error("Error fetching deposit address:", error);
      }
    };

    fetchData();

  }, [selectedToken]);

  useEffect(() => {
    const fetchData = async () => {
      if (accessToken === null || accessToken === '') return;
      try {
        const data = await getDepositData(selectedToken.toLowerCase(), accessToken);
        console.log("fetch deposit data", data)
        setDepositHistory(data)
      } catch (error) {
        // Handle any errors that occur during address generation or setting
        console.error("Error fetching deposit address:", error);
      }
    };

    fetchData();

  }, [selectedToken])


  return (
    <FlexBox direction="column" gap="30px">
      <FlexBox justifyContent='space-between' alignItems='center'>
        <AccountTitleText
          text="Deposit"
        />
        <FlexBox width="default" padding="4px" border="1px solid rgba(85, 83, 91, 0.10)" borderRadius="10px">
          {
            tabs.map((item: string, index: number) => {
              return (
                <DepositTab key={index} className={index === activeTab ? 'active' : ''} onClick={() => setActiveTab(index)}>
                  {item}
                </DepositTab>
              )
            })
          }
        </FlexBox>
      </FlexBox>

      {
        activeTab === 0 &&
        <FlexBox>
          <FlexBox maxWidth="360px" direction="column" gap="24px">
            <FlexBox direction='column' gap="8px">
              <LabelText
                text="Select coin"
              />
              {
                coinStatsData && !coinStatsData.loading && coinStatsData.data &&
                <SearchDefaultBox onClick={() => setShowCoinModal(true)}>
                  <div>
                    <CustomImage
                      image={coinStatsData.data[selectedToken]?.image}
                      width="20px"
                      height="20px"
                    />
                    <span>
                      {
                        coinStatsData.data[selectedToken]?.exchangeTicker
                      }
                    </span>
                    <span className="coin-name">
                      {
                        coinStatsData.data[selectedToken]?.coinName
                      }
                    </span>

                  </div>
                  <CustomImage
                    image="/assets/images/icons/arrow-down.svg"
                  />
                </SearchDefaultBox>
              }

              <FlexBox justifyContent='start' gap="8px">
                {/* <BadgeText text="BITCOIN" onClick={() => setSelectedToken('btc')} /> */}
                <BadgeText text="ETH" onClick={() => setSelectedToken('eth')} />
                <BadgeText text="BTC" onClick={() => setSelectedToken('btc')} />
                <BadgeText text="TRX" onClick={() => setSelectedToken('usdt')} />
                <BadgeText text="ADA" onClick={() => setSelectedToken('ada')} />
              </FlexBox>
            </FlexBox>
            <FlexBox direction='column' gap="8px">
              <LabelText
                text="Select A Network"
              />
              <SearchDefaultBox onClick={() => setShowNetworkModal(true)}>

                <div>
                  {selectedNetwork.label}
                </div>
                <CustomImage
                  image="/assets/images/icons/arrow-down.svg"
                />
              </SearchDefaultBox>
              {/* <CustomSelect
                defaultValue={selectedNetwork}
                onChange={handleNetworkChange}
                options={networkOptions}
                placeholder="Select Network"
                width="100%"
                fontSize="16px"
                height="48px"
              /> */}
            </FlexBox>
            {/** Deposit Details */}
            <FlexBox direction='column' gap="8px">
              <LabelText text="DEPOSIT DETAILS" />
              <FlexBox padding="16px" borderRadius="8px" border="1px solid rgba(208, 208, 208, 0.50)" bgColor="#fafafb" direction="column" gap="15px">
                <FlexBox direction="column">
                  <FlexBox justifyContent="space-between">
                    <LabelText text="ADDRESS" />
                    {/* <CustomImage
                      image="/assets/images/icons/document.svg"
                    /> */}
                  </FlexBox>
                  {
                    depositAddr && depositAddr !== '' &&
                    <DepositAddrText
                      onClick={() => {
                        handleCopyToClipboard(depositAddr)
                        successAlert("Address copied!!!")
                      }}
                    >{depositAddr}</DepositAddrText>
                  }

                </FlexBox>
                <FlexBox gap="10px" position="relative">
                  <CustomButton
                    text="Copy"
                    height="37px"
                    fontSize="14px"
                    lineHeight="24px"
                    width="100%"
                    onClick={() => {
                      handleCopyToClipboard(depositAddr)
                      successAlert("Address copied!!!")
                    }}
                  />
                  <CustomButton
                    text={`QR code`}
                    width="100%"
                    bgColor="#33C4AC"
                    height="37px"
                    fontSize="14px"
                    lineHeight="24px"
                    hoverBgColor="#45EFD2"
                    onClick={() => {
                      setShowQRCode(!showQRCode)
                    }}
                  />
                  {
                    showQRCode &&
                    <QRCodeBox>

                    </QRCodeBox>
                  }

                </FlexBox>
                {/* <EditFlex>
                  <span>Deposit To:&nbsp;</span>
                  <span>Funding Account</span>
                  <CustomImage
                    image="/assets/images/icons/help.svg"
                    width="16px"
                    height="16px"
                  />
                  <button>Edit</button>
                </EditFlex> */}
              </FlexBox>
            </FlexBox>
            {/** Bottom Info */}
            <FlexBox direction="column" gap="10px">
              {/** Minimum Amount */}
              <FlexBox justifyContent="space-between">
                <AccountCommonText
                  text="Minimum Amount"
                  className="grey"
                />
                <AccountCommonText
                  text="1 USDT"
                  className="grey"
                />
              </FlexBox>
              {/** Deposit Confirmation */}
              <FlexBox justifyContent="space-between">
                <AccountCommonText
                  text="Deposit Confirmation"
                  className="grey"
                />
                <AccountCommonText
                  text="3 block(s)"
                  className="grey"
                />
              </FlexBox>
              {/** Withdrawal Confirmation */}
              <FlexBox justifyContent="space-between">
                <AccountCommonText
                  text="Withdrawal Confirmation"
                  className="grey"
                />
                <AccountCommonText
                  text="3 block(s)"
                  className="grey"
                />
              </FlexBox>
              {/** Contract Address */}
              {/* <FlexBox justifyContent="space-between" alignItems="center">
                <AccountCommonText
                  text="Contract Address"
                  className="grey"
                />
                <CopyBox />
              </FlexBox> */}
            </FlexBox>
          </FlexBox>
        </FlexBox>
      }

      {
        activeTab === 1 &&
        <FlexBox justifyContent="space-between" gap="100px">
          {/** Left Side */}
          <FlexBox direction="column" gap="24px">
            <LabelText
              text="Fiat"
            />
            {/** Payment method */}
            <FlexBox direction="column" gap="8px">
              <LabelText
                text="Payment method"
              />
              <FlexBox padding="12px 16px" borderRadius="8px" border="1px solid #33C4AC" bgColor="#fafafb" justifyContent="space-between" alignItems="center">
                <FlexBox width="default" gap="10px">
                  <CustomImage
                    image="/assets/images/payment/advcash.svg"
                  />
                  <FlexBox direction="column">
                    <CustomText
                      text="Advcash"
                      fontFamily="Poppins"
                      color="#1E1E1E"
                      fontSize="12px"
                      fontWeight="500"
                      lineHeight="normal"
                    />
                    <CustomText
                      text="Available 24/7"
                      fontFamily="Poppins"
                      color="#ddd"
                      fontSize="12px"
                      fontWeight="500"
                      lineHeight="normal"
                    />
                  </FlexBox>
                </FlexBox>
                <FlexBox width="default" alignItems="center" justifyContent="end" gap="5px">
                  <CustomText
                    text="1.00% Fee"
                    fontFamily="Poppins"
                    color="#33C4AC"
                    fontSize="12px"
                    fontWeight="500"
                    lineHeight="normal"
                  />
                  <CustomImage
                    image="/assets/images/icons/blue-mark.svg"
                  />
                </FlexBox>
              </FlexBox>
            </FlexBox>
            {
              /** Buy Crypto with EUR */
            }
            <FlexBox direction="column" gap="8px">
              <LabelText
                text="Buy Crypto with EUR"
              />
              <FlexBox
                cursor="pointer"
                padding="14px 20px"
                borderRadius="8px"
                border="1px solid #DEE1E1"
                bgColor="#fafafb"
                justifyContent="space-between"
                alignItems="center"
              >
                <FlexBox direction="column">
                  <AccountCommonText
                    text="Credit/Debit Card"
                    fontSize="12px"
                  />
                  <AccountCommonText
                    text="Processed instantly"
                    fontSize="12px"
                    className="grey"
                  />
                  <FlexBox justifyContent="start" gap="10px" marginTop="10px" alignItems="center">
                    <CustomImage
                      image="/assets/images/payment/visa.svg"
                    />
                    <CustomImage
                      image="/assets/images/payment/debit.svg"
                    />
                  </FlexBox>
                </FlexBox>

                <CustomImage
                  image="/assets/images/icons/grey-right-arrow.svg"
                />
              </FlexBox>
              <FlexBox
                cursor="pointer"
                padding="14px 20px"
                borderRadius="8px"
                border="1px solid #DEE1E1"
                bgColor="#fafafb"
                justifyContent="space-between"
                alignItems="center"
              >
                <FlexBox direction="column">
                  <AccountCommonText
                    text="P2P"
                    fontSize="12px"
                  />
                  <AccountCommonText
                    text="Processed instantly"
                    fontSize="12px"
                    className="grey"
                  />
                  <FlexBox justifyContent="start" gap="10px" marginTop="10px" alignItems="center">
                    <CustomImage
                      image="/assets/images/payment/advcash.svg"
                    />
                    <CustomImage
                      image="/assets/images/payment/apple-pay.svg"
                    />
                    <CustomImage
                      image="/assets/images/payment/google-pay.svg"
                    />
                    <CustomText
                      text="+32"
                      fontFamily="Poppins"
                      color="#1E1E1E"
                      fontSize="12px"
                      fontWeight="500"
                      lineHeight="normal"
                    />
                  </FlexBox>
                </FlexBox>

                <CustomImage
                  image="/assets/images/icons/grey-right-arrow.svg"
                />
              </FlexBox>


            </FlexBox>
          </FlexBox>
          {/** Payment Details */}
          <FlexBox padding="30px" border="1.5px solid #F4F7FE" borderRadius="16px" justifyContent="start" direction="column" gap="25px">
            <FlexBox borderBottom="#EDEDED dashed 1px" gap="30px" direction="column" paddingBottom="30px">
              <AccountSubjectText
                text="Payment Details"
              />
              <FlexBox gap="8px" direction="column">
                <LabelText
                  text="Deposit Amount"
                />
                <CustomInput
                  placeholder="10 - 10,000"
                />

              </FlexBox>
            </FlexBox>
            <FlexBox direction="column" gap="25px">
              <FlexBox justifyContent="space-between">
                <AccountCommonText
                  text="Fee"
                  className="grey"
                />
                <AccountCommonText
                  text="- EUR"
                />
              </FlexBox>
              <CustomButton
                width="100%"
                text="Deposit"
                fontSize="14px"
              />
              <FlexBox
                direction="column"
                gap="11px"

              >
                <FlexBox gap="5px" justifyContent="start" alignItems="center">
                  <CustomImage
                    image="/assets/images/icons/info.svg"
                  />
                  <AccountCommonText
                    text="You are leaving OXFX and will be taken to Advcash to complete your deposit"
                    className="grey"
                    fontSize="12px"
                  />
                </FlexBox>
                <FlexBox gap="5px" justifyContent="start" alignItems="center">
                  <CustomImage
                    image="/assets/images/icons/info.svg"
                  />
                  <AccountCommonText
                    text="Advcash may charge additional fees. Refer to the executed payment for the actual fees."
                    className="grey"
                    fontSize="12px"
                  />
                </FlexBox>
              </FlexBox>
            </FlexBox>

          </FlexBox>
        </FlexBox>
      }



      <FlexBox justifyContent='space-between' alignItems='center'>
        <AccountSubjectText
          text="Deposit History"
        />
        <ViewAllButton />
      </FlexBox>
      {
        depositHistory &&
        <WalletDepositTable
          mockData={
            depositHistory
          }
        />
      }
      {
        coinStatsData && !coinStatsData.loading && showCoinModal &&
        <CoinSelectModal2
          show={showCoinModal}
          onClose={() => {
            setShowCoinModal(false)
          }}
          tokens={coinStatsData.data}
          selectedToken={selectedToken}
          setSelectedToken={setSelectedToken}
        />
      }
      <SelectNetworkModal
        show={showNetworkModal}
        onClose={() => {
          setShowNetworkModal(false)
        }}
        setSelectedNetwork={setSelectedNetwork}
        selectedNetwork={selectedNetwork}
        networks={networkOptions}
      />
    </FlexBox>
  )
}

export default WalletDeposit