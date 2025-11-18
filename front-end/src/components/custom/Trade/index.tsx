import { useCallback, useEffect, useState } from "react"
import { useAppSelector } from "../../../hooks"
import { Container, Wrapper } from "../../../styles/globalStyles"
import CustomImage from "../../common/CustomImage"
import { FlexBox } from "../../common/FlexBox"
import CoinSelectModal from "../../modal/CoinSelectModal"
import * as S from './index.styled'
import CustomText from "../../common/CustomText"
import api from "../../../api/api"
import { TOKEN_DROPDOWN_DATA } from "../../../constants/tokens.constants"

const quoteTokens: string[] =
  [
    "ETH", "USDT", "ADA"
  ]

const Trade = () => {
  const accessToken = useAppSelector((state) => state.auth.accessToken)
  const [show1, setShow1] = useState<boolean>(false)
  const [show2, setShow2] = useState<boolean>(false)
  // const [pairs, setPairs] = useState<any[]>();
  const [token1, setToken1] = useState<string>("ADA")

  const [token2, setToken2] = useState<string>("ETH")
  // const [baseTokens, setBaseTokens] = useState<string[]>([
  //   "ADA",
  //   "USDT"
  // ])
  // const [quoteTokens, setQuoteTokens] = useState<string[]>([
  //   "ETH", "USDT", "ADA"
  // ]);
  useEffect(() => {
    getInstaPairs()
  }, [])

  useEffect(() => {

  }, [token2])

  const getInstaPairs = useCallback(async () => {
    try {
      const { data } = await api.instance("/api/get_insta_pairs");
      console.log("pairs data", data)
      if (data.status === "Success") {
        // setPairs(data.data);
      }
    } catch (error) {
      console.error("Error fetching insta pairs:", error);
    }
  }, []);

  const swapTokens = () => {
    if (token1 !== token2) {
      const temp = token1;
      setToken1(token2);
      setToken2(temp);
    }
  };

  return (
    <Wrapper>
      <Container>
        <FlexBox alignItems="center" justifyContent="center" padding="100px 16px" smPadding = "50px 16px">
          <S.TradeBox>
            <FlexBox justifyContent="space-between" smDirection="column" smGap="5px">
              <S.ConvertCryptoText>
                Convert crypto
              </S.ConvertCryptoText>
              <S.BalanceBox>
                Available balance: 0 USD
              </S.BalanceBox>
            </FlexBox>

            <S.MainBox>
              <FlexBox direction="column" gap="8px">
                <S.TradeSubject>
                  Payment Amount
                </S.TradeSubject>
                <S.TokenInputFlex>
                  <S.TokenInputBox
                    placeholder="0,0000000"
                  />
                  <S.CoinSelectButton onClick={() => { setShow1(true) }}>
                    <CustomText
                      text={TOKEN_DROPDOWN_DATA[token1].currency}
                      fontSize="12.5px"
                      fontWeight="500"
                      fontFamily="Poppins"
                      color="#1E1E1E"
                    />
                    <CustomImage
                      image={TOKEN_DROPDOWN_DATA[token1].iconUrl}
                      width="28.65px"
                      height="28.65px"
                    />
                    <CustomImage
                      image="/assets/images/icons/arrow-down.svg"
                    />
                  </S.CoinSelectButton>

                </S.TokenInputFlex>

                <S.TradeContentText>
                  Spend between 0.01 and 1 ETH
                </S.TradeContentText>
              </FlexBox>
              <S.SwapButton onClick={() => {
                swapTokens()
              }}>
                <CustomImage
                  image="/assets/images/icons/swap.svg"
                  width="35px"
                  height="35px"
                />
              </S.SwapButton>
              <FlexBox direction="column" gap="8px">
                <S.TradeSubject>
                  Total Received
                </S.TradeSubject>
                <S.TokenInputFlex>
                  <S.TokenInputBox
                    placeholder="0,0000000"
                  />
                  <S.CoinSelectButton onClick={() => setShow2(true)}>
                    <CustomText
                      text={TOKEN_DROPDOWN_DATA[token2].currency}
                      fontSize="12.5px"
                      fontWeight="500"
                      fontFamily="Poppins"
                      color="#1E1E1E"
                    />
                    <CustomImage
                      image={TOKEN_DROPDOWN_DATA[token2].iconUrl}
                      width="28.65px"
                      height="28.65px"
                    />
                    <CustomImage
                      image="/assets/images/icons/arrow-down.svg"
                    />
                  </S.CoinSelectButton>

                </S.TokenInputFlex>
                <S.TradeContentText>
                  This amount is an estimate after fees are collected
                </S.TradeContentText>
              </FlexBox>
            </S.MainBox>
            <S.EstPrice>
              Roughly equals: 1 USDT ≈ 0,00002399 BTC
            </S.EstPrice>
            <S.TradeButton>
              {
                accessToken
                  ?
                  'Buy'
                  :
                  <>
                    <S.LoginRegisterLink to="/sign-in">
                      Log in
                    </S.LoginRegisterLink>
                    or
                    <S.LoginRegisterLink to="/sign-up">
                      Register
                    </S.LoginRegisterLink>
                    to trade
                  </>
              }
            </S.TradeButton>
          </S.TradeBox>
        </FlexBox>
      </Container>
      <CoinSelectModal
        activeToken={token1}
        setToken={setToken1}
        show={show1}
        onClose={() => { setShow1(false) }}
        tokens={quoteTokens}
      />
      <CoinSelectModal
        activeToken={token2}
        setToken={setToken2}
        show={show2}
        onClose={() => { setShow2(false) }}
        tokens={quoteTokens}
      />
    </Wrapper>
  )
}

export default Trade