import { Box, Container, Flex } from '@chakra-ui/react'

import AppSectionTitle from '@/components/AppSectionTitle'
import AppComingSoon from '@/components/AppComingSoon'
import SponsorLogo from './SponsorLogo'

interface Props {
  showComingSoon: boolean
}

const IndexSpecialSponsors = (props: Props) => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box as={'section'} bgColor="white" p={6}>
        <AppSectionTitle enTitle="Special Sponsors" jaTitle="特別協賛" />
        {props.showComingSoon ? (
          <AppComingSoon />
        ) : (
          <Flex direction="row" flexWrap="wrap" justifyContent="space-evenly">
            <SponsorLogo
              href="https://aws.amazon.com/jp/"
              image="/sponsors/aws.png"
              alt="AWS"
              larger
            />
            <SponsorLogo
              href="https://www.creatures.co.jp/"
              image="/sponsors/creatures.svg"
              alt="Creatures"
              larger
            />
          </Flex>
        )}
      </Box>
    </Container>
  )
}

export default IndexSpecialSponsors
