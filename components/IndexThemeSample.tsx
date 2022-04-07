import { Box, Container } from '@chakra-ui/react'

import AppSectionTitle from '@/components/AppSectionTitle'

const IndexThemeSample = () => {
  return (
    <Container maxW="container.xl">
      <Box as={'section'} style={{ padding: '0 24px' }}>
        <AppSectionTitle enTitle="Theme Samples" jaTitle="テーマサンプル" />
      </Box>
    </Container>
  )
}

export default IndexThemeSample
