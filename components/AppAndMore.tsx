import { Flex } from '@chakra-ui/react'

import styles from '@/styles/GhostText.module.scss'

const AppComingSoon = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} mt={6}>
      <span className={styles.GhostText}>And More</span>
    </Flex>
  )
}

export default AppComingSoon
