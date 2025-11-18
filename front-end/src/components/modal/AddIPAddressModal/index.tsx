import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { device } from '../../../styles/Breakpoints';
import { FlexBox } from '../../common/FlexBox';

import { useAppSelector } from '../../../hooks';

import React, { useState } from 'react';
import CustomButton from '../../common/CustomButton';
import { instance } from '../../../api';
import CustomInput from '../../common/CustomInput';
import { infoAlert, successAlert } from '../../../utils/alert';


interface IStyledModalProps {
  colorMode?: string;
}
const StyledModal = styled(Modal) <IStyledModalProps>`
  .modal-dialog{
    margin: auto;
    max-width: 450px;
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

interface Props {
  show: boolean;
  onClose: () => void;
}
const AddIPAddressModal = ({ show, onClose }: Props) => {
  // const dispatch = useDispatch();
  const token = useAppSelector((state) => state.auth.accessToken)

  const [input, setInput] = useState<string>("")

  const handleSubmit = () => {
    if(input !== ""){
      postIPAddr()
    }else{
      infoAlert("Input is empty")
    }
  }

  const postIPAddr = async () => {
    try {
      const { data } = await instance({
        url: '/api/Add_IP_Whitelist',
        method: 'POST',
        headers: {
          'Authorization': token
        },
        data: {
          cidr: input + "/32",
          type: "Login"
        }
      });
      if (data.status === "Success") {
        window.location.href = "/sign-in"
        successAlert("Successfully added!!!")
        onClose()
      }

    } catch (err) {
      console.error("err", err)
    }
  }

  return (
    <StyledModal show={show} onHide={onClose} centered contentClassName="connect-success-content">
      <ModalHeader closeButton>
        Add IP
      </ModalHeader>
      <ModalBody>
        <FlexBox direction='column' gap="24px" justifyContent='start'>
          {/* <CustomText
            text="LANGUAGE/REGION"
            color="#55535B"
            fontWeight='600'
            fontSize='10px'
            lineHeight='14px'
            fontFamily={globalFonts.Poppins}
          /> */}
          <CustomInput
            placeholder='IP address'
            value={input}
            onChange={(e: any) => {
              setInput(e.target.value)
            }}
          />
          <CustomButton
            text="Submit"
            width="100%"
            onClick={handleSubmit}
          />
        </FlexBox>
      </ModalBody>
    </StyledModal>
  )
}

export default React.memo(AddIPAddressModal);