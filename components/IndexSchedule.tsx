import { Box, Container } from '@chakra-ui/react'

import AppSectionTitle from '@/components/AppSectionTitle'
import styles from '@/styles/Schedule.module.scss'

const IndexSchedule = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box
        as={'section'}
        className={styles.Schedule}
        style={{ padding: '0 24px' }}
      >
        <AppSectionTitle enTitle="Schedule" jaTitle="コンテストの流れ" />
        <Box>
          <ul>
            <li>
              <b>エントリー募集期間</b>
            </li>
            <ul>
              <p>
                <b>4月～5月 ※ 5月31日（火）締切予定</b>
              </p>
            </ul>
          </ul>
          <ul>
            <li>
              <b>作品提出期間</b>
            </li>
            <ul>
              <p>
                <b>9月初旬</b>
              </p>
            </ul>
          </ul>
          <ul>
            <li>
              <b>ファイナリスト選出</b>
            </li>
            <ul>
              <p>
                <b>9月中旬 </b>
              </p>
              <p>
                <b>
                  ※ 提出された作品と資料をもとにファイナリストが選出されます。
                </b>
              </p>
            </ul>
          </ul>
          <ul>
            <li>
              <b>最終審査会</b>
            </li>
            <ul>
              <p>
                <b>9月下旬</b>
              </p>
              <p>
                <b>※ ファイナリストの中から大賞・企業賞が授与されます。</b>
              </p>
            </ul>
          </ul>
        </Box>
      </Box>
    </Container>
  )
}

export default IndexSchedule
