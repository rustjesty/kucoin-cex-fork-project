import styled from "styled-components"

interface ISubmitButton {
  width?: string;
  text?: string;
}

const SubmitButtonStyle = styled.button<ISubmitButton>`
  height: 48px;
  color: #18171C;

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;

  border-radius: 8px;
  background: #45EFD2;

  width: ${(props) => props.width || '100%'};

  border: none;
`

const SubmitButton = ({
  width,
  text
}: ISubmitButton) => {
  return (
    <SubmitButtonStyle
      type="submit"
      width={width}
    >
      {
        text ? text : 'Submit'
      }
    </SubmitButtonStyle>
  )
}

export default SubmitButton