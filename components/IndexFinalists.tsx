import { Box, Container } from '@chakra-ui/react'

import AppSectionTitle from '@/components/AppSectionTitle'
import styles from '@/styles/Awards.module.scss'

interface Props {
  finalists: string[]
}

const IndexFinalists = ({ finalists }: Props) => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box
        as={'section'}
        className={styles.Award}
        style={{ padding: '0 24px' }}
      >
        <AppSectionTitle enTitle="Finalists" jaTitle="ファイナリスト一覧" />
        <Box>
          <ul>
            {finalists.map((finalist, index) => (
              <li key={index}>{finalist}</li>
            ))}
          </ul>
          <h3>
            <b>
              選出された8チームのファイナリストは9月17日の最終審査会にてプレゼンテーションを行います
            </b>
          </h3>
        </Box>
      </Box>
    </Container>
  )
}

export default IndexFinalists
