import { Box, Container } from '@chakra-ui/react'
import YouTube from 'react-youtube'

import styles from '@/styles/FinalReviewVideo.module.scss'

const IndexAwards = () => {
  return (
    <Container maxW="container.xl">
      <Box
        as={'section'}
        className={styles.FinalReviewVideo}
        style={{ padding: '0 24px' }}
      >
        <Box textAlign="center" pb={2} fontSize="1.1rem">
          最終審査会の様子はこちらからご覧いただけます
        </Box>
        <YouTube
          videoId="Lh3CK4Jy8U8"
          className={styles.FinalReviewVideoOuter}
          iframeClassName={styles.FinalReviewVideoItem}
          opts={{ height: '', width: '' }}
        />
      </Box>
    </Container>
  )
}

export default IndexAwards
