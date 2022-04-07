import { Box, Container } from '@chakra-ui/react'

import AppSectionTitle from '@/components/AppSectionTitle'
import styles from '@/styles/ExaminationCriteria.module.scss'

const IndexExaminationCriteria = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box
        as={'section'}
        className={styles.ExaminationCriteria}
        style={{ padding: '0 24px' }}
      >
        <AppSectionTitle enTitle="Examination Criteria" jaTitle="審査基準" />
        <Box>
          <ol>
            <li>
              <b>社会課題の提起とその解決案の企画</b>
            </li>
            <li>
              <b>応募作品の実現可能性・課題解決力</b>
            </li>
            <li>
              <b>応募作品の技術的な完成度</b>
            </li>
            <li>
              <b>応募作品の設計・デザイン・アクセシビリティ</b>
            </li>
            <li>
              <b>チーム開発プロセス</b>
            </li>
          </ol>
        </Box>
      </Box>
    </Container>
  )
}

export default IndexExaminationCriteria
