import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean
}

export const Profile = ({ showProfileData }: ProfileProps) => {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Michel John</Text>
          <Text color='gray.300' fontSize='small'>micheljohndev@gmail.com</Text>
        </Box>
      )}

      <Avatar size='md' name='Michel John' src='https://github.com/mchjohn.png' />
    </Flex>
  )
}