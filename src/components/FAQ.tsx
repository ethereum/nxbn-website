import { Box, Flex, Text } from "@chakra-ui/react"

import { H2, H4 } from "@/components/Headings"

export type Question = {
  question: string
  answer: string[]
}

interface FAQInterface {
  questions: Question[]
}

const FAQ = ({ questions }: FAQInterface) => {
  return (
    <Box gap={16} px={{ base: 6, md: 16 }}>
      <H2 variant="action">FAQ</H2>
      {questions.map((question, index) => (
        <Flex
          key={index}
          direction={{ base: "column", md: "row" }}
          gap={{ base: 4, md: 8 }}
          mb={{ base: 8, md: 16 }}
        >
          <Box w="100%" flex="1 0 0" maxW={350}>
            <H4 variant="action" textAlign="right">{question.question}</H4>
          </Box>
          <Box w="auto" flex={1}>
            {question.answer.map((answer, index) => (
              <Text key={index} fontSize={18}>{answer}</Text>
            ))}
          </Box>
        </Flex>
      ))}
    </Box>
  )
}

export default FAQ
