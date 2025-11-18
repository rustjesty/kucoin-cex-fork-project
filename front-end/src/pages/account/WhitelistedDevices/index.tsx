import { FlexBox } from "../../../components/common/FlexBox"
import AccountTitleText from "../../../components/common/text/AccountTitleText"
import { instance } from "../../../api"
import { useAppSelector } from "../../../hooks"
import { useEffect, useState } from "react"
import WhiteListTable from "./WhitelistTable"

const WhitelistedDevices = () => {
  const token = useAppSelector((state) => state.auth.accessToken)

  const [history, setHistory] = useState<any>();

  useEffect(() => {
    if (token && token !== '') {
      getData()
    }
  }, [token])

  const getData = async () => {
    try {
      const { data } = await instance({
        url: '/api/list-whitelisted-devices',
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
      <AccountTitleText
        text="Whitelisted Devices"
      />
      {
        history &&
        <WhiteListTable
          mockData={history}
        />
      }
    </FlexBox>
  )
}

export default WhitelistedDevices