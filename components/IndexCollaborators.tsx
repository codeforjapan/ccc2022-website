import { Box, Container, Flex } from '@chakra-ui/react'

import AppSectionTitle from '@/components/AppSectionTitle'
import AppComingSoon from '@/components/AppComingSoon'
import AppAndMore from '@/components/AppAndMore'
import SponsorLogo from '@/components/SponsorLogo'
import SponsorLogoSalesforce from '@/components/SponsorLogoSalesforce'

interface Props {
  showComingSoon: boolean
  showAndMore: boolean
}

const IndexCollaborators = (props: Props) => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box as={'section'} bgColor="white" p={6}>
        <AppSectionTitle enTitle="Collaborators" jaTitle="協力" />
        {props.showComingSoon ? (
          <AppComingSoon />
        ) : (
          <Flex direction="row" flexWrap="wrap" justifyContent="space-evenly">
            <SponsorLogo
              href="https://waffle-waffle.org/"
              image="/collaborators/waffle.png"
              alt="Waffle"
            />
            <SponsorLogoSalesforce
              href="https://microbit.org/ja/"
              image="/collaborators/micro-bit.svg"
              alt="micro:bit"
            />
            <SponsorLogoSalesforce
              href="https://jphacks.com/"
              image="/collaborators/jphacks.png"
              alt="JP Hacks"
            />
          </Flex>
        )}

        {props.showAndMore && <AppAndMore />}
      </Box>
    </Container>
  )
}

export default IndexCollaborators
