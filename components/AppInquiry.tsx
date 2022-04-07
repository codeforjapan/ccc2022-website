import { Flex } from '@chakra-ui/react'
import AppButtonRounded from '@/components/AppButtonRounded'

const AppShare = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} pb={'24px'}>
      {/* @TODO replace form link */}
      <AppButtonRounded
        href="https://docs.google.com/forms/d/e/1FAIpQLSeMSV1KPCzKGHoq1D9W1TbrEO4hWlZMywTxF__xxYYjbKnCrA/viewform?usp=sf_link"
        isOutlined
        isExternal
      >
        お問い合わせ・取材依頼はこちら
      </AppButtonRounded>
    </Flex>
  )
}

export default AppShare
