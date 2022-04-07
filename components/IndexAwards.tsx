import { Box, Container } from '@chakra-ui/react'

import AppSectionTitle from '@/components/AppSectionTitle'
import styles from '@/styles/Awards.module.scss'

const IndexAwards = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box
        as={'section'}
        className={styles.Award}
        style={{ padding: '0 24px' }}
      >
        <AppSectionTitle enTitle="Awards" jaTitle="表彰・賞典" />
        <Box>
          <p>
            <b>選出されたファイナリストから次の賞が授与されます。</b>
          </p>
          <ul>
            <li>
              <b>大賞: 1作品（賞金 50万円）</b>
            </li>
          </ul>
          <ul>
            <li>
              <b>企業賞: 数作品（賞金 10万円）</b>
            </li>
          </ul>
          {/* <p>
            <b>10月25日に最終審査会を開催する予定です。</b>
          </p>
          <p>
            <b>（詳細は「コンテストの流れ」セクションを参照）</b>
          </p> */}
        </Box>
      </Box>
    </Container>
  )
}

export default IndexAwards
