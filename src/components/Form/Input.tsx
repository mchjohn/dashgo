import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps,
  FormErrorMessage
} from '@chakra-ui/react'
import { FieldError } from 'react-hook-form';
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface InputProps extends ChakraInputProps {
  name: 'email' | 'password' | 'name' | 'password_confirmation';
  label?: 'Senha' | 'E-mail' | 'Nome completo' | 'Confirmação da senha';
  error: FieldError | any;
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> =
  ({ name, label, error, ...rest }: InputProps, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor="email">{label}</FormLabel>}

      <ChakraInput
        size='lg'
        id={name}
        name={name}
        type={name}
        bg='gray.900'
        variant='filled'
        _hover={{
          bg: 'gray.900'
        }}
        focusBorderColor="pink.500"
        ref={ref}
        {...rest} />
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)