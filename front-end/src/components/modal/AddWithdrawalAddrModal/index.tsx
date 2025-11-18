import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { device } from '../../../styles/Breakpoints';
import { FlexBox } from '../../common/FlexBox';
// import CustomImage from '../../common/CustomImage';
import CustomText from '../../common/CustomText';
import { globalFonts } from '../../../constants/fonts.constant';
import { useAppSelector } from '../../../hooks';
// import { useDispatch } from 'react-redux';
// import { updateLanguage } from '../../../features/globalSlice';
// import { LANG_CONSTANT } from '../../../constants/lang.constant';
import React from 'react';
import CustomButton from '../../common/CustomButton';
import CustomInput from '../../common/CustomInput';
import { instance } from '../../../api';
import { successAlert } from '../../../utils/alert';


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

// const FiatText = styled.div`
//   font-size: 14px;
//   line-height: 24px;
//   font-family: ${globalFonts.Poppins};
//   font-weight: 500;
//   width: 130px;
//   display: flex;
//   justify-content: space-between;
//   cursor: pointer;
//   &.active{
//     color: #33C4AC;
//     border: 1px solid #33C4AC;
//     border-radius: 100px;
//     padding: 10px 16px;
//   }
// `

interface Props {
  show: boolean;
  onClose: () => void;
}
const AddWithdrawAddrModal = ({ show, onClose }: Props) => {
  // const dispatch = useDispatch();
  // const globalLang = useAppSelector((state) => state.global.language)

  // const handleChangeLang = useCallback((lang: ILang) => {
  //   dispatch(updateLanguage(lang));
  // }, [dispatch]);

  // const memoizedLangConstant = useMemo(() => LANG_CONSTANT, []);

  const token = useAppSelector((state) => state.auth.accessToken);

  const requestOTP = async () => {
    try {
      const { data } = await instance({
        url: "/api/request-otp-addressbook",
        method: "POST",
        headers: {
          'Authorization': token
        },
        data: {
          Address: "d",
          Currency: "1INCH",
          DT_Memo: "",
          type: "email"
        }
      })
      if (data.status === "Success") {
        successAlert("OTP Code is sent to your email")
      }
    } catch (err) {
      console.log("err", err)
    }
  }

  return (
    <StyledModal show={show} onHide={onClose} centered contentClassName="connect-success-content">
      <ModalHeader closeButton>
        Add Withdrawal Address
      </ModalHeader>
      <ModalBody>
        <FlexBox direction='column' gap="20px" justifyContent='start'>
          <FlexBox direction='column' gap="8px">
            <CustomText
              text="Address label"
              color="#55535B"
              fontWeight='600'
              fontSize='10px'
              lineHeight='14px'
              fontFamily={globalFonts.Poppins}
            />
            <CustomInput
              placeholder='4-20 characters'
              padding='14px 20px'
            />
          </FlexBox>
          <FlexBox direction='column' gap="8px">
            <CustomText
              text="Coin"
              color="#55535B"
              fontWeight='600'
              fontSize='10px'
              lineHeight='14px'
              fontFamily={globalFonts.Poppins}
            />
            <CustomInput
              placeholder='4-20 characters'
              padding='14px 20px'
            />
          </FlexBox>
          <FlexBox direction='column' gap="8px">
            <CustomText
              text="Address"
              color="#55535B"
              fontWeight='600'
              fontSize='10px'
              lineHeight='14px'
              fontFamily={globalFonts.Poppins}
            />
            <CustomInput
              placeholder='Enter address'
              padding='14px 20px'
            />
          </FlexBox>
          {/* <FlexBox direction='column' gap="8px">
            <CustomText
              text="Network"
              color="#55535B"
              fontWeight='600'
              fontSize='10px'
              lineHeight='14px'
              fontFamily={globalFonts.Poppins}
            />
            <CustomInput
              placeholder='4-20 characters'
              padding='14px 20px'
            />
          </FlexBox> */}
          <FlexBox direction='column' gap="8px">
            <CustomText
              text="Email Verification Code"
              color="#55535B"
              fontWeight='600'
              fontSize='10px'
              lineHeight='14px'
              fontFamily={globalFonts.Poppins}
            />
            <FlexBox>
              <CustomInput
                placeholder='OTP'
                padding='14px 20px'
              />
              <CustomButton
                text="Request OTP"
                onClick={() => {
                  requestOTP()
                }}
              />
            </FlexBox>
          </FlexBox>


        </FlexBox>
        <CustomButton
          width='100%'
          text="Add Address"
        />
      </ModalBody>
    </StyledModal>
  )
}

export default React.memo(AddWithdrawAddrModal);