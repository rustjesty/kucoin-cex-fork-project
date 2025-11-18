import { useState } from "react";
import { FlexBox } from "../../../components/common/FlexBox"
import AccountTitleText from "../../../components/common/text/AccountTitleText"
import OpenOrdersTable from "./OpenOrdersTable"
import { CustomSelect } from "../../../components/common/CustomSelect";

const pairOptions = [
  { value: 'all', label: 'ALL' },
  { value: 'sell', label: 'ADA / USDT' },
  { value: 'buy', label: 'ETH / USDT' },
];

const typeOptions = [
  { value: 'all', label: 'ALL' },
  { value: 'sell', label: 'SELL' },
  { value: 'buy', label: 'Buy' },
];

const sideOptions = [
  { value: 'all', label: 'ALL' },
  { value: 'limit-order', label: 'LIMIT ORDER' },
  { value: 'market-order', label: 'MARKET ORDER' },
  { value: 'stop-limit-order', label: 'STOP LIMIT ORDER' },
  { value: 'stop-market-order', label: 'STOP MARKET ORDER' },
  { value: 'oco-order', label: 'Trailing Stop Market' },
];

const OpenOrders = () => {
  const [selectedPair, setSelectedPair] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedSide, setSelectedSide] = useState(null);

  const handlePairChange = (selectedOption: any) => {
    setSelectedPair(selectedOption);
  };

  const handleTypeChange = (selectedOption: any) => {
    setSelectedType(selectedOption);
  };

  const handleSideChange = (selectedOption: any) => {
    setSelectedSide(selectedOption);
  };

  return (
    <FlexBox direction="column" gap="30px">
      <AccountTitleText
        text="Open Orders"
      />

      <FlexBox justifyContent="start" gap="10px">
        <CustomSelect
          defaultValue={selectedPair}
          onChange={handlePairChange}
          options={pairOptions}
          placeholder="Pair..."
        />
        <CustomSelect
          defaultValue={selectedSide}
          onChange={handleSideChange}
          options={sideOptions}
          placeholder="Side..."
        />
        <CustomSelect
          defaultValue={selectedType}
          onChange={handleTypeChange}
          options={typeOptions}
          placeholder="Type..."
        />
      </FlexBox>

      <OpenOrdersTable
        mockData={
          [
            {
              date: "2024-03021 13:04:01 +11",
              pair: "ADA/USDT",
              type: "Stop Limit",
              side: "Sell",
              price: 0.6137,
              stop: 0.6316,
              pending: 123,
              total: 123,
            },
            {
              date: "2024-03021 13:04:01 +11",
              pair: "ADA/USDT",
              type: "Stop Limit",
              side: "Buy",
              price: 0.6137,
              stop: 0.6316,
              pending: 123,
              total: 123,
            }
          ]
        }
      />
    </FlexBox>
  );
};

export default OpenOrders;
