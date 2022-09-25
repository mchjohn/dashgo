import { Box, Stack, Text } from "@chakra-ui/react"

import { PaginationItem } from "./PaginationItem"

interface PaginationProps {
  currentPage?: number;
  registersPerPage?: number;
  totalCountOfRegisters: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

const generatePagesArray = (from: number, to: number) => {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0);
}

export const Pagination = ({
  currentPage = 1,
  registersPerPage = 10,
  totalCountOfRegisters,
  onPageChange
}: PaginationProps) => {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);
  
  const from = currentPage - 1 - siblingsCount
  const to = currentPage - 1
  const previousPages = currentPage > 1 ? generatePagesArray(from, to) : [];

  const toNextPage = Math.min(currentPage + siblingsCount, lastPage)
  const nextPages = currentPage < lastPage ? generatePagesArray(currentPage, toNextPage) : [];

  return (
    <Stack direction={['column', 'row']} mt='8' justify='space-between' align='center' spacing='6'>
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction='row' spacing='2'>
        {currentPage > (1 +siblingsCount) && (
          <>
            <PaginationItem pageNumber={1} />
            {currentPage > (2 + siblingsCount) &&
              <Text color='gray.300' w='8' textAlign='center'>...</Text>
            }
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem key={page} pageNumber={page} />
        })}

        <PaginationItem pageNumber={currentPage} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem key={page} pageNumber={page} />
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage &&
              <Text color='gray.300' w='8' textAlign='center'>...</Text>
            }
            <PaginationItem pageNumber={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  )
}