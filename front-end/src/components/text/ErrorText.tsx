import styled from "styled-components";

const ErrorTextStyle = styled.div`
  color: red;
  font-family: Poppins;
  font-size: 12px;
  line-height: 14px;
`;

const ErrorText = ({ text }: { text: any }) => {
  return <ErrorTextStyle>{text}</ErrorTextStyle>;
};

export default ErrorText;