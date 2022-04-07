import { Box, Container, Flex } from '@chakra-ui/react'

import AppSectionTitle from '@/components/AppSectionTitle'
import AppComingSoon from '@/components/AppComingSoon'
// import SponsorLogo from './SponsorLogo'

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
            {/* Insert <SponsorLogo /> here */}
          </Flex>
        )}
      </Box>
    </Container>
  )
}

export default IndexSpecialSponsors
