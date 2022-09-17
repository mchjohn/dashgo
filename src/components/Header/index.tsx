import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'

import { Logo } from './Logo'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'
import { NotificationsNav } from './NotificationsNav'

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'

export const Header = () => {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      mt='4'
      px='6'
      h='20'
      w='100%'
      mx='auto'
      as='header'
      maxW={1480}
      align='center'
    >
      {!isWideVersion && (
        <IconButton
          mr='2'
          fontSize='24'
          onClick={onOpen}
          variant='unstyled'
          aria-label='Open navigation'
          icon={<Icon as={RiMenuLine} />}
        >

        </IconButton>
      )}

      <Logo />

      { isWideVersion && <SearchBox /> }

      <Flex
        ml='auto'
        align='center'
      >
        <NotificationsNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}