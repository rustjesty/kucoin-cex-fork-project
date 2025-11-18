import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { device } from '../../../styles/Breakpoints';
import { FlexBox } from '../../common/FlexBox';
import CustomImage from '../../common/CustomImage';
import CustomText from '../../common/CustomText';
import { globalFonts } from '../../../constants/fonts.constant';
import { useAppSelector } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { updateLanguage } from '../../../features/globalSlice';
import { LANG_CONSTANT } from '../../../constants/lang.constant';
import React, { useCallback, useMemo } from 'react';


interface IStyledModalProps {
  colorMode?: string;
}
const StyledModal = styled(Modal) <IStyledModalProps>`
  .modal-dialog{
    margin: auto;
    max-width: 656px;
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

const FiatText = styled.div`
  font-size: 14px;
  line-height: 24px;
  font-family: ${globalFonts.Poppins};
  font-weight: 500;
  width: 130px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  &.active{
    color: #33C4AC;
    border: 1px solid #33C4AC;
    border-radius: 100px;
    padding: 10px 16px;
  }
`

interface Props {
  show: boolean;
  onClose: () => void;
}
const SelectLangModal = ({ show, onClose }: Props) => {
  const dispatch = useDispatch();
  const globalLang = useAppSelector((state) => state.global.language)

  const handleChangeLang = useCallback((lang: ILang) => {
    dispatch(updateLanguage(lang));
  }, [dispatch]);

  const memoizedLangConstant = useMemo(() => LANG_CONSTANT, []);

  return (
    <StyledModal show={show} onHide={onClose} centered contentClassName="connect-success-content">
      <ModalHeader closeButton>
        Language
      </ModalHeader>
      <ModalBody>
        <FlexBox direction='column' gap="24px" justifyContent='start'>
          <CustomText
            text="LANGUAGE/REGION"
            color="#55535B"
            fontWeight='600'
            fontSize='10px'
            lineHeight='14px'
            fontFamily={globalFonts.Poppins}
          />
          <FlexBox gap="24px 25px" flexWrap='wrap' justifyContent='start' alignItems='center'>
            {memoizedLangConstant.map((lang: ILang) => (
              <FiatText
                key={lang.name}
                className={globalLang.name === lang.name ? 'active' : ''}
                onClick={() => handleChangeLang(lang)}
              >
                {lang.name}
                {globalLang.name === lang.name && (
                  <CustomImage image="/assets/images/icons/checkmark.svg" />
                )}
              </FiatText>
            ))}
          </FlexBox>
        </FlexBox>
      </ModalBody>
    </StyledModal>
  )
}

export default React.memo(SelectLangModal);