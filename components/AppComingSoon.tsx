import { Flex } from '@chakra-ui/react'

import styles from '@/styles/GhostText.module.scss'

const AppComingSoon = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'}>
      <span className={styles.GhostText}>Coming Soon</span>
    </Flex>
  )
}

export default AppComingSoon
