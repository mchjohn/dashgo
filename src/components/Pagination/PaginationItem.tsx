import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
  pageNumber: number;
  isCurrent?: boolean;
}

export const PaginationItem = ({ pageNumber, isCurrent = false }: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        w="4"
        disabled
        size="sm"
        fontSize="xs"
        colorScheme="pink"
        _disabled={{
          bg: 'pink.500',
          cursor: 'default'
        }}
      >
        {pageNumber}
      </Button>
    )
  }

  return (
    <Button
      w="4"
      size="sm"
      fontSize="xs"
      bg='gray.700'
      _hover={{
        bg: 'gray.500',
      }}
    >
      {pageNumber}
    </Button>
  )
}