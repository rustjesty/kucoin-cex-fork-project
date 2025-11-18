import styled from "styled-components"

interface INumberCircleButton{
  text?: string;
  active?: boolean;
  onClick: () => void;
}

const NumberBtnStyle = styled.div<INumberCircleButton>`
  cursor: pointer;
  border-radius: 53.333px;
  border: 1px solid #E6E8E8;
  background: #FFF;

  display: flex;
  width: 32px;
  height: 32px;
  padding: 5.333px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #051B13;
  font-family: "Neue Montreal";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 155%;

  &.active{
    border: 1px solid #45EFD2;
  }
`

const NumberCircleButton = ({
  text,
  active,
  onClick
}: INumberCircleButton) => {
  return (
    <NumberBtnStyle className={active ? 'active' : ''} onClick = {onClick}>
      {
        text
      }
    </NumberBtnStyle>
  )
}

export default NumberCircleButton