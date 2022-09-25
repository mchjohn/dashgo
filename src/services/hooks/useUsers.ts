import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { api } from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export const useUsers = () => {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const getUsers = async (): Promise<User[]> => {
    const { data } = await api.get<User[]>('/users')

    const total = data.length;
    const pageStart = page * perPage;
    const pageEnd = pageStart + perPage;

    const users: User[] = data.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month:'long',
          year: 'numeric',
        }),
      }
    })

    const arrayUsers = users.slice(page, perPage);
    console.log('ARRAY', arrayUsers);
    

    return users;
  }

  return useQuery(['users'], getUsers, { staleTime: 5000 });
}