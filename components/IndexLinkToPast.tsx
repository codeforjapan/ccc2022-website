import { Box, Heading, Flex } from '@chakra-ui/react'

import AppButtonRounded from '@/components/AppButtonRounded'
import styles from '@/styles/LinkToPast.module.scss'

const IndexLinkTo2020 = () => {
  return (
    <Box pt={8} className={styles.LinkToPast}>
      <Heading
        as="h2"
        color={'brand.indigo'}
        fontFamily={'brand.jaTitle'}
        fontSize={'26px'}
        fontWeight={'700'}
        textAlign="center"
      >
        過去の開催の様子もチェック！
      </Heading>
      <Flex
        justify="center"
        mt={8}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <AppButtonRounded
          fontSize="1rem"
          href="https://ccc2020.code4japan.org"
          isOutlined
          isExternal
          m={2}
        >
          第1回サイト (2020年)
        </AppButtonRounded>
        <AppButtonRounded
          fontSize="1rem"
          href="https://ccc2021.code4japan.org"
          isOutlined
          isExternal
          m={2}
        >
          第2回サイト (2021年)
        </AppButtonRounded>
      </Flex>
    </Box>
  )
}

export default IndexLinkTo2020
