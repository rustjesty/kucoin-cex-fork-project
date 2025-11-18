import React from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { FlexBox } from '../../common/FlexBox';
import CustomText from '../../common/CustomText';
import { globalFonts } from '../../../constants/fonts.constant';
import CustomImage from '../../common/CustomImage';

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

const ChainName = styled.div`
  color: rgba(85, 83, 91, 0.50);

  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const NetworkName = styled.div`
  color: #1E1E1E;

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
  selectedNetwork: any,
  setSelectedNetwork: any,
  networks: any
}

const SelectNetworkModal = ({ show, onClose, selectedNetwork, setSelectedNetwork, networks }: IProps) => {

  return (
    <StyledModal show={show} onHide={onClose} centered contentClassName="connect-success-content">
      <ModalHeader closeButton>
        Select Network
      </ModalHeader>
      <ModalBody>
        <FlexBox direction='column' gap="20px" justifyContent='start'>
          <FlexBox
            border="1px solid #EBF5AF"
            borderRadius='8px'
            bgColor='#F7FFC6'
            padding='16px'
            gap="5px"
          >
            <CustomImage
              image="/assets/images/icons/info.svg"
            />
            <CustomText
              text="Ensure that the selected deposit network is the same as the withdrawal network. Otherwise, your assets could be lost."
              fontSize='12px'
              fontWeight='500'
              color="#55535B"
              fontFamily={globalFonts.Poppins}
              letterSpacing='-0.24px'
            />
          </FlexBox>
          <TokenData>
            {networks.map((network: any, index: number) => {
              if (network !== selectedNetwork)
                console.log("ok")
              return (
                (
                  <Token key={index} onClick={() => { setSelectedNetwork(network); onClose(); }}>
                    <FlexBox direction="column" gap="2px">
                      <NetworkName>{network.label}</NetworkName>
                      <ChainName>{network.chain}</ChainName>
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

export default React.memo(SelectNetworkModal);