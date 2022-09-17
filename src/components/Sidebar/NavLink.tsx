import { ElementType } from "react"
import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react"

import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps {
  href: string;
  icon: ElementType;
  children: string;
}

export const NavLink = ({ href, icon, children, ...rest }: NavLinkProps) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display='flex' alignItems='center' {...rest}>
        <Icon as={icon} fontSize='20' />
        <Text ml='4' fontSize='medium'>
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}