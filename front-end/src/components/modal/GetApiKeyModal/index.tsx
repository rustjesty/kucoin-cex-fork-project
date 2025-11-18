import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { device } from '../../../styles/Breakpoints';
import { FlexBox } from '../../common/FlexBox';
import CustomImage from '../../common/CustomImage';
import CopyBox from '../../box/CopyBox';


interface IStyledModalProps {
  colorMode?: string;
}
const StyledModal = styled(Modal) <IStyledModalProps>`
  .modal-dialog{
    margin: auto;
    max-width: 480px;
    width: 100%;
    background: transparent;
    border-radius: 20px;
    @media screen and (max-width: 550px) {
      max-width: 100%;
      min-height: 100vh;
    }
  }
  .modal-header{
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
  /* align-items: center;
  justify-content: start; */

  @media ${device.sm} {

  }
  &.modal-body{
  }
`

const ModalHeader = styled(Modal.Header)`
  padding: 0px;
  color: var(--Secondary, #18171C);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const SubjectText = styled.div`
  color: var(--Secondary-text, #55535B);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`

const BottomText = styled.div`  
  display: flex;
  align-items: center;
  gap: 5px;
  color: #55535B;

  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
  
`

interface Props {
  show: boolean;
  onClose: () => void;
}
const GetApiKeyModal = ({ show, onClose }: Props) => {

  return (
    <StyledModal show={show} onHide={onClose} centered contentClassName="connect-success-content">
      <ModalHeader closeButton>
        API Key
      </ModalHeader>
      <ModalBody>
        <FlexBox direction='column' gap="8px" justifyContent='start'>
          <SubjectText>Public Key</SubjectText>
          <CopyBox
            text="11b7bb98-aff3-4590-b4e8-ca63bac2977b"
          />
        </FlexBox>
        <FlexBox direction='column' gap="8px">
          <SubjectText>Private Key</SubjectText>
          <CopyBox
            text="8ab28657-d176-4809-bbbc-1c8dc2d7ec4a"
          />
        </FlexBox>
        <BottomText>
          <CustomImage
            image="/assets/images/icons/info.svg"
            cursor='pointer'
          />
          Save the private key somewhere safe, you will only see it once
        </BottomText>
      </ModalBody>
    </StyledModal>
  )
}

export default GetApiKeyModal