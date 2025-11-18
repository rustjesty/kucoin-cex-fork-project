import React, { useEffect,  useState } from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

import { FlexBox } from '../../common/FlexBox';
import CustomImage from '../../common/CustomImage';
import CustomSearchInput from '../../common/CustomSearchInput';

const StyledModal = styled(Modal)`
  .modal-dialog {
    margin: auto;
    max-width: 445px;
    width: 100%;
    background: transparent;
    border-radius: 20px;
    @media screen and (max-width: 550px) {
      max-width: 100%;
      min-height: 100vh;
    }
  }
  .modal-header {
    border-bottom: none;
  }
  .connect-success-content {
    background: white;
    border-radius: 20px;
    width: 100%;
    padding: 30px;
    overflow: hidden;
    border: none;
    @media screen and (max-width: 550px) {
      height: 100%;
    }
  }
`;

const ModalBody = styled(Modal.Body)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px;
`;

const ModalHeader = styled(Modal.Header)`
  padding: 0px;
  color: var(--Secondary, #18171C);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Token = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 5px;
  &:hover {
    background-color: #dddddd;
  }
`;

const TokenSymbol = styled.div`
  color: #1E1E1E;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TokenName = styled.div`
  color: rgba(85, 83, 91, 0.50);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TokenData = styled.div`
  width: 100%;
  max-height: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 7px; /* set width of scrollbar */
    // height: 28px;
  }
    
  &::-webkit-scrollbar-track {
    background:none; /* set background color of track */
  }
    
  &::-webkit-scrollbar-thumb {
    background-color: #1f1d1d; /* set background color of thumb */
    border-radius: 5px; /* set border radius of thumb */
    cursor: pointer;
  }
    
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* set background color of thumb on hover */
  }
`

interface IProps {
  show: boolean,
  onClose: () => void,
  selectedToken: any,
  setSelectedToken: any,
  tokens: any
}

const CoinSelectModal2 = ({ show, onClose, selectedToken, setSelectedToken, tokens }: IProps) => {
  console.log("tokens", tokens)
  const [input, setInput] = useState('');
  const [searchedData, setSearchedData] = useState<any[]>([]);

  // const memoizedTokensData = useMemo(() => TOKEN_DROPDOWN_DATA, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch(input);
    }, 300); // Adjust debounce time as needed
    return () => clearTimeout(timer);
  }, [input]);

  const handleSearch = (input: string) => {
    setSearchedData(Object.values(tokens).filter((token: any) => token.exchangeTicker.toLowerCase().includes(input.toLowerCase())));
  };

  return (
    <StyledModal show={show} onHide={onClose} centered contentClassName="connect-success-content">
      <ModalHeader closeButton>
        Coin
      </ModalHeader>
      <ModalBody>
        <FlexBox direction='column' gap="20px" justifyContent='start'>
          <CustomSearchInput input={input} setInput={setInput} />
          <TokenData>
            {searchedData.map((token: any) => {
              if (token !== selectedToken)
                console.log("ok")
              return (
                (
                  <Token key={token.currency} onClick={() => { setSelectedToken(token.exchangeTicker.toLowerCase()); onClose(); }}>
                    <CustomImage image={token.image} width="28.65px" height='28.65px' />
                    <FlexBox direction="column" gap="2px">
                      <TokenSymbol>{token.exchangeTicker}</TokenSymbol>
                      <TokenName>{token.coinName}</TokenName>
                    </FlexBox>
                  </Token>
                )
              )
            })}
          </TokenData>

        </FlexBox>
      </ModalBody>
    </StyledModal>
  );
};

export default React.memo(CoinSelectModal2);
