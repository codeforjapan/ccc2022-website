import { Flex, Box, Container, Text } from '@chakra-ui/react'

import AppSectionTitle from '@/components/AppSectionTitle'
import styles from '@/styles/FinalWinners.module.scss'

export type Winner = {
  title: string
  team: string
}

type Props = {
  winners: Winner[]
}

const IndexAwards = (props: Props) => {
  return (
    <Container maxW="container.xl" pt={10} pb={10}>
      <Box as={'section'} className={styles.FinalWinners}>
        <AppSectionTitle
          enTitle="Final Review Result!"
          jaTitle="受賞者一覧"
          textAlign="center"
        />
        <Flex wrap="wrap" justify="center">
          {props.winners.map((winner, index) => (
            <Box
              flexBasis="33.3%"
              key={index}
              p={5}
              textAlign="center"
              minW="250px"
              flex
            >
              <Text fontSize="1xl" whiteSpace="nowrap" margin="0 auto">
                {winner.title}
              </Text>
              <Text fontSize="2xl">{winner.team}</Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Container>
  )
}

export default IndexAwards
