import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { theme } from '../styles/theme';

import { makeServer } from '../services/mirage/index';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';

if (process.env.NODE_ENV !== 'development') {
  makeServer();
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <Component {...pageProps} />
          </QueryClientProvider>
        </SidebarDrawerProvider>
      </ChakraProvider>
    )
}

export default MyApp
