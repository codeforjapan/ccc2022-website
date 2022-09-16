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
import IndexPersonalSponsors, {
  PersonalSponsor
} from '@/components/IndexPersonalSponsors'
import IndexSchedule from '@/components/IndexSchedule'
import IndexSpecialSponsors from '@/components/IndexSpecialSponsors'
import IndexSponsors from '@/components/IndexSponsors'
import AppFooter from '@/components/AppFooter'
import AppInquiry from '@/components/AppInquiry'
import AppShare from '@/components/AppShare'
import IndexLinkTo2022 from '@/components/AppButtonApplicationForm'
import IndexFinalists from '@/components/IndexFinalists'

const IndexPage: NextPage = (/* { contents, fallbackEnabled }: Props */) => {
  const pageTitle = 'Civictech Challenge Cup 2022'

  const newsItems: NewsItem[] = [
    {
      date: '2022/09/09',
      title: '最終審査会が開催決定！',
      summary:
        '2022年9月17日（土）に最終審査会を開催します。150名の参加者から選出された8チームのファイナリストがプレゼンを行います。\n ・時間 : 14:00 - 17:15',
      thumbnail: {
        name: '',
        url: '',
        rawUrl: ''
      },
      link: 'https://cccu22-final-2022.peatix.com/view',
      isDraft: false
    },
    {
      date: '2022/04/23',
      title: '開会式が開催決定！',
      summary:
        '2022年6月4日（土）、エントリーした方全員に向けた開会式を開催します。 エントリーされた方は日程のご確認をお願いします。\n・時間 : 10:00 - 14:00\n',
      thumbnail: {
        name: '',
        url: '',
        rawUrl: ''
      },
      link: 'https://www.youtube.com/watch?v=a-f84k8SfeY',
      isDraft: false
    }
  ]

  const finalists = [
    'Bibliotech',
    'Scholactive',
    'be♭',
    'Idea×Tech',
    'dp9',
    '非日常',
    'Coco makers'
  ]

  const sponsors: PersonalSponsor[] = [
    {
      name: '矢野敏樹',
      isHidden: false
    },
    {
      name: '田中瑞人',
      isHidden: false
    },
    {
      name: '前川弘樹',
      isHidden: false
    }
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
      <IndexFinalists finalists={finalists} />
      <IndexNewsList newsItems={newsItems} />
      <IndexExaminationCriteria />
      <IndexAwards />
      <IndexGuidelines />
      <IndexSchedule />
      <IndexSpecialSponsors showComingSoon={false} />
      <IndexSponsors showComingSoon={false} showAndMore={false} />
      <IndexCollaborators showComingSoon={false} showAndMore={false} />
      <IndexPersonalSponsors sponsors={sponsors} />
      <IndexOrganizer />
      <IndexLinkTo2022 />
      <AppInquiry />
      <AppFooter />
    </Box>
  )
}

export default IndexPage
