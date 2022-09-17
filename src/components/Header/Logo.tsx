import { Text } from "@chakra-ui/react"

export const Logo = () => {
  return (
    <Text
      w='64'
      fontSize={['2xl', '3xl']}
      fontWeight='bold'
      letterSpacing='tight'
    >
      dashgo
      <Text ml='1' as='span' color='pink.500'>.</Text>
    </Text>
  )
}