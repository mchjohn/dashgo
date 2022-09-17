import { Box, Stack, Text } from "@chakra-ui/react"
import { ReactNode } from "react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri"

interface NavSectionProps {
  title: 'geral' | 'automação';
  children: ReactNode;
}

export const NavSection = ({ title, children }: NavSectionProps) => {
  return (
    <Box>
      <Text
        fontSize='small'
        color='gray.400'
        fontWeight='bold'
        textTransform='uppercase'
      >
        {title}
      </Text>

      <Stack spacing='4' mt='8' align='stretch'>
        {children}
      </Stack>
    </Box>
  )
}