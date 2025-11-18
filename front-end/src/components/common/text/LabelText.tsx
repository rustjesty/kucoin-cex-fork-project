import styled from "styled-components"

interface ILabelText {
  text: string;
}

const LabelTextStyle = styled.span`
  color: #55535B;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 14.327px; /* 143.272% */
  text-transform: uppercase;
`
const LabelText = ({
  text
}: ILabelText) => {
  return (
    <LabelTextStyle>
      {text}
    </LabelTextStyle>
  )
}

export default LabelText