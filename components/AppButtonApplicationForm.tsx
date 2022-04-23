import { Center } from '@chakra-ui/react'

import AppButtonRounded from '@/components/AppButtonRounded'

const IndexLinkTo2022 = () => {
  return (
    <Center my={3}>
      {
        <AppButtonRounded
          fontSize={{ base: '0.9rem', sm: '1.2rem' }}
          href="https://forms.gle/QP8rxGyj5ckxZffdA"
          isExternal
          mr={1}
        >
          エントリーはコチラ！
        </AppButtonRounded>
      }
    </Center>
  )
}

export default IndexLinkTo2022
