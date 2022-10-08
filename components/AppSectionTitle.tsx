import { Box, Heading } from '@chakra-ui/react'

interface Props {
  enTitle: string
  jaTitle?: string
  textAlign?: 'left' | 'center' | 'right'
}

const AppSectionTitle = (props: Props) => {
  return (
    <Box textAlign={props.textAlign || 'left'}>
      <Heading
        color={'brand.indigo'}
        fontFamily={'brand.enTitle'}
        fontSize={{ base: '2.4rem', md: '55px' }}
        fontWeight={'800'}
        letterSpacing={'-0.8px'}
        lineHeight={1}
        pb={2}
      >
        {props.enTitle}
      </Heading>
      <Heading
        color={'brand.indigo'}
        fontFamily={'brand.jaTitle'}
        fontSize={'20px'}
        fontWeight={'700'}
        letterSpacing={'normal'}
        lineHeight={1}
        pb={4}
        pl={'0.2rem'}
      >
        {props.jaTitle}
      </Heading>
    </Box>
  )
}

export default AppSectionTitle
