import { Box, Container } from '@chakra-ui/react'

import AppSectionTitle from '@/components/AppSectionTitle'
import styles from '@/styles/Organizer.module.scss'

const IndexOrganizer = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box
        as={'section'}
        className={styles.Organizer}
        style={{ padding: '0 24px' }}
      >
        <AppSectionTitle enTitle="Organizer" jaTitle="運営" />
        <Box>
          <p>主催：一般社団法人コード・フォー・ジャパン</p>
        </Box>
      </Box>
    </Container>
  )
}

export default IndexOrganizer
