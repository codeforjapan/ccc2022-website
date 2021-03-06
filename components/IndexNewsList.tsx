import {
  Box,
  Container,
  SimpleGrid,
  Center,
  Heading,
  Text,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react'

import AppSectionTitle from '@/components/AppSectionTitle'
import styles from '@/styles/NewsList.module.scss'

interface Thumbnail {
  name: string
  url: string
  rawUrl: string
}
export interface NewsItem {
  title: string
  summary: string
  date: string
  thumbnail: Thumbnail
  link: string
  isDraft: boolean
}

interface Props {
  newsItems: NewsItem[]
}

const IndexNewsList = ({ newsItems }: Props) => {
  const items = newsItems
    .filter((i) => !i.isDraft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  if (items.length < 1) {
    return (
      <Container maxW="container.xl" py={10}>
        <Box as={'section'} style={{ padding: '0 24px' }}>
          <AppSectionTitle enTitle="News" jaTitle="お知らせ" />
          <Center>
            <span className={styles.NewsListNoItems}>
              まだお知らせはありません
            </span>
          </Center>
        </Box>
      </Container>
    )
  }

  function OnPublished(date: string) {
    return date ? (
      <Box
        as="time"
        dateTime={date}
        d="block"
        color="gray.500"
        className={styles.NewsListItemDate}
      >
        {date}
      </Box>
    ) : (
      <Box
        as="span"
        d="block"
        color="gray.500"
        className={styles.NewsListItemDate}
      >
        2021-XX-XX
      </Box>
    )
  }

  return (
    <Container maxW="container.xl" py={10}>
      <Box as={'section'} style={{ padding: '0 24px' }}>
        <AppSectionTitle enTitle="News" jaTitle="お知らせ" />
        <SimpleGrid spacing={6} minChildWidth="18em" justifyContent="center">
          {items.map((item, index) => (
            <LinkBox
              key={index}
              className={styles.NewsListItem}
              borderRadius="sm"
              shadow="lg"
              bg="white"
              overflow="hidden"
              maxW={{ base: undefined, md: 'lg' }}
              p={5}
            >
              {OnPublished(item.date)}
              <Heading as="h3">{item.title}</Heading>
              <Text pt={3} pb={5}>
                {item.summary}
              </Text>
              {item.link && (
                <LinkOverlay isExternal href={item.link}>
                  詳細はこちら
                </LinkOverlay>
              )}
            </LinkBox>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  )
}

export default IndexNewsList
