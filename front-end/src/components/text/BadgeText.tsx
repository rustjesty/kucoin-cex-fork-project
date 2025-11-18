import styled from "styled-components"

interface IBadgeText{
  text: string;
  onClick?: any;
}

const BadgeTextStyle = styled.span`
  padding: 5px 8px;
  border-radius: 4px;
  background: rgba(236, 236, 236, 0.70);
  color: var(--Secondary, #18171C);
  text-align: center;
  font-family: Raleway;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
`

const BadgeText = (
  {
    text,
    onClick
  }: IBadgeText
) => {
  return (
    <BadgeTextStyle onClick = {onClick}>{text}</BadgeTextStyle>
  )
}

export default BadgeText