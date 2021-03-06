import { Box, Container, Center, Heading, Text } from '@chakra-ui/react'

import AppButtonRounded from '@/components/AppButtonRounded'
import AppSectionTitle from '@/components/AppSectionTitle'
import styles from '@/styles/PersonalSponsors.module.scss'

export interface PersonalSponsor {
  name: string
  isHidden: boolean
}

interface Props {
  sponsors: PersonalSponsor[]
  updateAt?: string
}

const IndexPersonalSponsors = (props: Props) => {
  const sponsors = props.sponsors.filter((i) => !i.isHidden)

  return (
    <Container maxW="container.xl" py={10}>
      <Box
        as={'section'}
        className={styles.PersonalSponsors}
        style={{ padding: '0 24px' }}
      >
        <AppSectionTitle enTitle="Personal Sponsors" jaTitle="個人協賛" />
        {/* <NotionRenderer blockMap={props.pageData} /> */}
        <Center mb={3}>
          <AppButtonRounded
            href="https://forms.gle/X3dkijBqeZDRPiHr8"
            isOutlined
            isExternal
          >
            個人協賛のお申し込みはこちら
          </AppButtonRounded>
        </Center>
        <Heading
          color={'brand.indigo'}
          fontFamily={'brand.jaTitle'}
          fontSize={'1.5rem'}
          fontWeight={'700'}
          letterSpacing={'normal'}
          lineHeight={1}
          pb={4}
          pl={'0.2rem'}
        >
          ご協賛いただいた皆様{' '}
          <Text as="span" fontSize="1.2rem">
            {props.updateAt || ''}
          </Text>
        </Heading>
        <Box>
          {sponsors.map((item, index) => (
            <Text
              d="inline-block"
              key={index}
              className={styles.PersonalSponsorsName}
            >
              {item.name}
              <Text as="span" className={styles.PersonalSponsorsSama}>
                様
              </Text>
            </Text>
          ))}
        </Box>
      </Box>
    </Container>
  )
}

export default IndexPersonalSponsors
