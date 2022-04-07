import {
  Box,
  Flex,
  Spacer,
  Text,
  Heading,
  TextProps,
  useMediaQuery
} from '@chakra-ui/react'

import AppButtonApplicationForm from '@/components/AppButtonApplicationForm'
import styles from '@/styles/Header.module.scss'

interface Props {
  showApplicationButton: boolean
}

const IndexHeroView = (props: Props) => {
  const [smallerTitle] = useMediaQuery('(max-width: 525px)')
  const NoWrapSpan = ({ children }: TextProps) => {
    return (
      <Text
        as="span"
        whiteSpace="nowrap"
        fontSize={
          smallerTitle ? 'max(16px, calc((80vw - 60px) / 10))' : undefined
        }
      >
        {children}
      </Text>
    )
  }

  return (
    <Box className={styles.FirstView}>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        wrap="wrap"
        bg="transparent"
        color="black"
        height="60px"
      >
        <Flex align="center" ml={5}>
          <div className={styles.Title}>
            <Text className={styles.TitleLine}>Civictech</Text>
            <Text className={styles.TitleLine}>Challenge</Text>
            <Text className={styles.TitleLine}>
              Cup&nbsp;<span className={styles.TitleLineSmaller}>2022</span>
            </Text>
          </div>
        </Flex>
        <Spacer />
        {props.showApplicationButton && <AppButtonApplicationForm />}
      </Flex>
      <Box className={styles.FirstViewContain}>
        <img src="/ccc-logo.svg" className={styles.Logo} />
        <Box className={styles.FirstViewCard} as="main">
          <Heading
            as="h1"
            lineHeight={
              smallerTitle
                ? 'max(16px, calc((80vw - 60px) / 10 * 1.3))'
                : '1.51'
            }
          >
            <NoWrapSpan>半径3mの野望から、</NoWrapSpan>
            <NoWrapSpan>未来は生まれる。</NoWrapSpan>
          </Heading>
          <Box my="1em">
            <Text>いつかできたらいいなと思ってたこと</Text>
            <Text>こんなふうにつくれるんじゃない？と感じていたこと</Text>
            <Text>だれかのためにやってみたいこと</Text>
          </Box>
          <Text>さあ、仲間とともにカタチにしよう</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default IndexHeroView
