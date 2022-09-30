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
    <Container maxW="container.xl" pt={8} pb={2}>
      <Box as={'section'} className={styles.FinalWinners}>
        <AppSectionTitle
          enTitle="Final Review Result!"
          jaTitle="受賞者の皆さま、おめでとうございました！！"
          textAlign="center"
        />
        <Flex>
          {props.winners.map((winner, index) => (
            <Box key={index} pt={4} textAlign="center">
              <Text>{winner.title}</Text>
              <Text>{winner.team}</Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Container>
  )
}

export default IndexAwards
