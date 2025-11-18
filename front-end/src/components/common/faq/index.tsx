import styled from "styled-components"
import { Container } from "../../../styles/globalStyles"
import { FlexBox } from "../FlexBox";
import CustomImage from "../CustomImage";
import { CLOSE_ICON, PLUS_ICON } from "../../../constants/image.constants";
import React from "react";
import Title from "../text/Title";

interface IFaq {
  question: string;
  answer: string;
}

const faqData: IFaq[] = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: "Mauris suscipit, enim non rhoncus lobortis, enim nunc rhoncus urna, et venenatis enim arcu nec nibh?",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: "Mauris suscipit, enim non rhoncus lobortis, enim nunc rhoncus urna, et venenatis enim arcu nec nibh?",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: "Mauris suscipit, enim non rhoncus lobortis, enim nunc rhoncus urna, et venenatis enim arcu nec nibh?",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: "Mauris suscipit, enim non rhoncus lobortis, enim nunc rhoncus urna, et venenatis enim arcu nec nibh?",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: "Mauris suscipit, enim non rhoncus lobortis, enim nunc rhoncus urna, et venenatis enim arcu nec nibh?",
  }
]

const FAQStyle = styled.div`
  background-color: #F7F7F7;
  width: 100vw;
  display: flex;
  justify-content: center;
`

const FAQ = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const QuestionFlex = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: #e1e1e2 1px solid;
  width: 100%;
`

const Question = styled.div`
  color: #18171C;
  font-size: 16px;
  line-height: 1.5;
  font-family: Poppins;
  font-weight: 500;
  padding: 16px 0;
`

const AnswerFlex = styled.div`
  display: flex;
  justify-content: space-between;  
  width: 100%;
`

const Answer = styled.div`
  color: #55535B;
  font-size: 16px;
  line-height: 1.5;
  font-family: Roboto;
  font-weight: 500;
  padding: 16px 0;
`

const FAQs = () => {
  const [status, setStatus] = React.useState<number | undefined>();
  return (
    <FAQStyle>
      <Container>
        <FlexBox maxWidth="952px" direction="column" marginLeft="auto" marginRight="auto" padding="150px 15px" gap="70px" smPadding="50px 15px" smGap="32px">
          <Title text = "FAQs" maxWidth="100%" />
          <FlexBox direction="column" gap="16px">
            {
              faqData.map((faq: IFaq, key: number) => {
                return (
                  <FAQ key={key}>
                    <QuestionFlex>
                      <Question>
                        {faq.question}
                      </Question>
                      <CustomImage
                        image={PLUS_ICON}
                        cursor="pointer"
                        scale="1.5"
                        onClick={
                          () => {
                            setStatus(key)
                          }
                        }
                      />
                    </QuestionFlex>
                    {
                      status === key &&
                      <AnswerFlex>
                        <Answer>
                          {faq.answer}
                        </Answer>
                        <CustomImage
                          image={CLOSE_ICON}
                          cursor="pointer"
                          scale="1.5"
                          onClick={
                            () => {
                              setStatus(-1)
                            }
                          }
                        />
                      </AnswerFlex>
                    }
                  </FAQ>
                )
              })
            }
          </FlexBox>
        </FlexBox>
      </Container>
    </FAQStyle>

  )
}

export default FAQs