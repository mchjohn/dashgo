import Link from 'next/link';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue
} from '@chakra-ui/react'

import { useUsers } from '../../services/hooks/useUsers';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Pagination } from '../../components/Pagination';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  const { data, isLoading, isFetching, error } = useUsers();

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {
                !isLoading &&
                isFetching &&
                <Spinner ml='5' size='sm' color='gray.500' />
              }
            </Heading >

            <Link href='/users/create' passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={ <Icon as={RiAddLine} fontSize='20' /> }
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          { isLoading ? (
            <Flex justify='center'>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify='center'>
              <Text>Falha....</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={['4', '4', "6"]} color="gray.380" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>
                    { isWideVersion && <Th>Data de cadastro</Th>}
                    <Th w='8'></Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {data.map((user) => {
                    return (
                      <Tr key={user.id}>
                        <Td px={['4', '4', "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                          </Box>
                        </Td>
                        { isWideVersion && <Td>{user.createdAt}</Td>}
                        <Td>
                          <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="blue"
                            leftIcon={ <Icon as={RiPencilLine} fontSize='16' /> }
                          >
                            { isWideVersion ? 'Editar' : ''}
                          </Button>
                        </Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>

              <Pagination
                currentPage={5}
                totalCountOfRegisters={100}
                onPageChange={() => {}}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}
