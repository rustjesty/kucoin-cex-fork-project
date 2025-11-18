import { useEffect, useState } from "react"
import { FlexBox } from "../../../components/common/FlexBox"
import AccountTitleText from "../../../components/common/text/AccountTitleText"
import { useAppSelector } from "../../../hooks"
import { instance } from "../../../api"
import AccountSubjectText from "../../../components/common/text/AccountSubjectText"
import CustomButton from "../../../components/common/CustomButton"
import IPWhiteListTable from "./IPWhiteListTable"
import AddIPAddressModal from "../../../components/modal/AddIPAddressModal"

interface IHistory {
  cidr: string;
  addedOn: string;
  type: string;
}

const IPWhiteList = () => {
  const token = useAppSelector((state) => state.auth.accessToken)

  const [history, setHistory] = useState<IHistory[]>();
  const [showModal, setShowModal] = useState<boolean>(false)

  useEffect(() => {
    if (token && token !== '') {
      getListData()
    }
  }, [token])

  const getListData = async () => {
    try {
      const { data } = await instance({
        url: '/api/Get_IP_Whitelist',
        method: 'GET',
        headers: {
          'Authorization': token
        }
      });
      if (data.status === "Success") {
        console.log("history data", data.data)
        setHistory(data.data);
      }

    } catch (err) {
      console.error("err", err)
    }
  }
  return (
    <FlexBox direction="column" gap="30px">
      <FlexBox
        justifyContent="space-between"
      >
        <AccountTitleText
          text="IP WhiteList"
        />
        <CustomButton
          text="Add IP Address"
          width="207px"
          height="40px"
          onClick={() => {
            setShowModal(true)
          }}
        />
      </FlexBox>
      <AccountSubjectText
        text="IP Addresses"
      />
      {
        history &&
        <IPWhiteListTable
          mockData={history}
        />
      }
      <AddIPAddressModal
        show={showModal}
        onClose={() => {
          setShowModal(false)
        }}
      />
    </FlexBox>
  )
}

export default IPWhiteList