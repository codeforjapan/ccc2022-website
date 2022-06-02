import { Button, Center } from '@chakra-ui/react'

const IndexLinkTo2022 = () => {
  return (
    <Center my={3}>
      {
        <Button
          rounded={100}
          disabled
          px={8}
          py={6}
          _disabled={{
            opacity: 1,
            cursor: 'default'
          }}
          _hover={{}}
        >
          エントリーは終了しました
        </Button>
      }
    </Center>
  )
}

export default IndexLinkTo2022
