import Head from 'next/head'
import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import styles from '@/styles/index.module.scss'

import IndexAwards from '@/components/IndexAwards'
import IndexCollaborators from '@/components/IndexCollaborators'
import IndexExaminationCriteria from '@/components/IndexExaminationCriteria'
// import FinalReviewVideo from '@/components/IndexFinalReviewVideo'
// import FinalWinners from '@/components/IndexFinalWinners'
import IndexGuidelines from '@/components/IndexGuidelines'
import IndexHeroView from '@/components/IndexHeroView'
import IndexLinkToPast from '@/components/IndexLinkToPast'
import IndexNewsList, { NewsItem } from '@/components/IndexNewsList'
import IndexOrganizer from '@/components/IndexOrganizer'
// import IndexPersonalSponsors from '@/components/IndexPersonalSponsors'
import IndexSchedule from '@/components/IndexSchedule'
import IndexSpecialSponsors from '@/components/IndexSpecialSponsors'
import IndexSponsors from '@/components/IndexSponsors'
import AppFooter from '@/components/AppFooter'
import AppInquiry from '@/components/AppInquiry'
import AppShare from '@/components/AppShare'
import IndexLinkTo2022 from '@/components/AppButtonApplicationForm'

const IndexPage: NextPage = (/* { contents, fallbackEnabled }: Props */) => {
  const pageTitle = 'Civictech Challenge Cup 2022'

  const newsItems: NewsItem[] = [
    {
      "date": "2022/04/23",
      "title": "Civictech Challenge Cup U-22 開会式が6月4日（土）に開催決定！",
      "summary": "2022年6月4日（土）、エントリーした方全員に向けた開会式を開催します。 エントリーされた方は日程のご確認をお願いします。・時間：10:00 - 14:00（お昼休憩あり） ・場所：オンライン",
      "thumbnail": {
        "name": "",
        "url": "",
        "rawUrl": "",
      },
      "link": "",
      "isDraft": false,
    },
  ]

  return (
    <Box className={styles.Index}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="apple-mobile-web-app-title" content={pageTitle} />
        <meta property="og:title" content={pageTitle} />
      </Head>
      <IndexHeroView showApplicationButton={true} />
      <AppShare />
      <IndexLinkTo2022 />
      <IndexLinkToPast />
      <IndexNewsList newsItems={newsItems} />
      <IndexExaminationCriteria />
      <IndexAwards />
      <IndexGuidelines />
      <IndexSchedule />
      <IndexSpecialSponsors showComingSoon />
      <IndexSponsors showComingSoon showAndMore={false} />
      <IndexCollaborators showComingSoon showAndMore={false} />
      {/* <IndexPersonalSponsors /> */}
      <IndexOrganizer />
      <IndexLinkTo2022 />
      <AppInquiry />
      <AppFooter />
    </Box>
  )
}

export default IndexPage
