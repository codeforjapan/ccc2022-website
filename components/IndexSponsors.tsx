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

const IndexSponsors = (props: Props) => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box as={'section'} bgColor="white" p={6}>
        <AppSectionTitle enTitle="Sponsors" jaTitle="協賛" />
        {props.showComingSoon ? (
          <AppComingSoon />
        ) : (
          <Flex direction="row" flexWrap="wrap" justifyContent="space-evenly">
            <SponsorLogo
              href="https://udtalk.jp/"
              image="/sponsors/ud-talk.svg"
              alt="Shamrock Records"
            />
            <SponsorLogoSalesforce
              href="https://www.salesforce.com/jp/"
              image="/sponsors/salesforce.svg"
              alt="Salesforce"
            />
            <SponsorLogoSalesforce
              href="https://www.google.co.jp/"
              image="/sponsors/tis.svg"
              alt="TIS"
            />
            {/* <SponsorLogo href="#" image="/sponsors/yahoo.svg" alt="Yahoo" /> */}
          </Flex>
        )}

        {props.showAndMore && <AppAndMore />}
      </Box>
    </Container>
  )
}

export default IndexSponsors
