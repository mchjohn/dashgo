import { RiSearch2Line } from "react-icons/ri"
import { Flex, Icon, Input } from "@chakra-ui/react"

export const SearchBox = () => {
  return (
    <Flex
      py='4'
      px='8'
      ml='6'
      flex='1'
      as='label'
      maxW={400}
      bg='gray.800'
      color='gray.200'
      alignSelf='center'
      position='relative'
      borderRadius='full'
    >
      <Input
        color='gray.50'
        variant='unstyled'
        px='4'
        mr='4'
        _placeholder={{color: 'gray.400'}}
        placeholder='Buscar na plataforma' />

      <Icon as={RiSearch2Line} fontSize='20' />
    </Flex>
  )
}