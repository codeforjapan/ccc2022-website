import { Box, Container } from '@chakra-ui/react'

import AppSectionTitle from '@/components/AppSectionTitle'
import styles from '@/styles/FinalWinners.module.scss'

const IndexAwards = () => {
  return (
    <Container maxW="container.xl" pt={8} pb={2}>
      <Box as={'section'} className={styles.FinalWinners}>
        <AppSectionTitle
          enTitle="Final Review Result!"
          jaTitle="受賞者の皆さま、おめでとうございました！！"
        />
        <Box pt={4}></Box>
      </Box>
    </Container>
  )
}

export default IndexAwards
