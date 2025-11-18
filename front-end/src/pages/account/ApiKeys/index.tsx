import { useEffect, useState } from "react"
import { instance } from "../../../api"
import CustomButton from "../../../components/common/CustomButton"
import { FlexBox } from "../../../components/common/FlexBox"
import AccountCommonText from "../../../components/common/text/AccountCommonText"
import AccountSubjectText from "../../../components/common/text/AccountSubjectText"
import AccountTitleText from "../../../components/common/text/AccountTitleText"
import { useAppSelector } from "../../../hooks"
import GetApiKeyModal from "../../../components/modal/GetApiKeyModal"

const ApiKeys = () => {
  const token = useAppSelector((state) => state.auth.accessToken)

  const [showModal, setShowModal] = useState<boolean>(false)
  // const [history, setHistory] = useState<any>();

  useEffect(() => {
    if (token && token !== '') {
      getListApiKeyData()
    }
  }, [token])

  const getListApiKeyData = async () => {
    try {
      const { data } = await instance({
        url: '/api/ListApiKey',
        method: 'GET',
        headers: {
          'Authorization': token,
        },
        data: { keyType: "ALL" }
      });
      if (data.status === "Success") {
        console.log("list data", data.data)
        // setHistory(data.data);
      }

    } catch (err) {
      console.error("err", err)
    }
  }

  return (
    <>
      <FlexBox direction="column" gap="30px">
        <FlexBox justifyContent="space-between">
          <AccountTitleText
            text="Api Keys"
          />
          <CustomButton
            text="Add API key"
            fontSize="14px"
            fontWeight="600"
            lineHeight="24px"
            width="191px"
            height="40px"
            onClick={() => {
              setShowModal(true)
            }}
          />
        </FlexBox>
        <AccountCommonText
          text="Use this page to manage your API keys to interact with the exchange."
          fontWeight="600"
        />
        <AccountCommonText
          text="When creating an API key be sure to store the private key somewhere safe, you will only see it once."
          className="grey"
        />

        <FlexBox border="#e8e8e8 1px solid" borderRadius="12px" padding="20px" direction="column" gap="25px" justifyContent="center" alignItems="center">
          <AccountSubjectText
            text="You must enable Google Authenticator to use this feature"
          />
          <CustomButton
            text="Enable 2FA"
            width="265px"
            height="40px"
            fontSize="14px"
          />
        </FlexBox>
      </FlexBox>
      <GetApiKeyModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  )
}

export default ApiKeys