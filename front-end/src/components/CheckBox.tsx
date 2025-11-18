import styled from "styled-components"

const CheckBoxStyle = styled.input`
  border-radius: 3.333px;
  border: 2px solid var(--primary-text, #33C4AC);
  background: #edfefb;
`
const CheckBox = () => {
  return (
    <CheckBoxStyle
      type="checkbox"
    />
  )
}

export default CheckBox