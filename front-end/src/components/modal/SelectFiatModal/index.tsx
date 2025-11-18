import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { device } from '../../../styles/Breakpoints';
import { FlexBox } from '../../common/FlexBox';
import CustomImage from '../../common/CustomImage';
import CustomText from '../../common/CustomText';
import { globalFonts } from '../../../constants/fonts.constant';
import { FIAT_CONSTANT } from '../../../constants/fiat.constant';
import { useAppSelector } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { updateFiatName, updateFiatSymbol } from '../../../features/globalSlice';
import { COLORS_CONSTANT } from '../../../constants/colrs.constant';
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
  color: ${COLORS_CONSTANT.secondary};
  font-family: ${globalFonts.Poppins};
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
const SelectFiatModal = ({ show, onClose }: Props) => {
  const dispatch = useDispatch();
  const globalFiat = useAppSelector((state) => state.global.fiat)

  const handleChangeFiat = useCallback((name: string, symbol: string) => {
    dispatch(updateFiatName(name));
    dispatch(updateFiatSymbol(symbol));
  }, [dispatch]);

  const memoizedFiatConstant = useMemo(() => FIAT_CONSTANT, []);

  return (
    <StyledModal show={show} onHide={onClose} centered contentClassName="connect-success-content">
      <ModalHeader closeButton>
        Currency
      </ModalHeader>
      <ModalBody>
        <FlexBox direction='column' gap="24px" justifyContent='start'>
          <CustomText
            text="CURRENCY"
            color="#55535B"
            fontWeight='600'
            fontSize='10px'
            lineHeight='14px'
            fontFamily={globalFonts.Poppins}
          />
          <FlexBox gap="24px 25px" flexWrap='wrap' justifyContent='start' alignItems='center'>
            {memoizedFiatConstant.map((fiat: IFiat) => (
              <FiatText
                key={fiat.name}
                className={globalFiat.name === fiat.name ? 'active' : ''}
                onClick={() => handleChangeFiat(fiat.name, fiat.symbol)}
              >
                {`${fiat.name}-${fiat.symbol}`}
                {globalFiat.name === fiat.name && (
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

export default React.memo(SelectFiatModal);