import React from 'react';
import { useGetUSersQuery } from './usersApiSlice';

const UsersList = () => {

  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUSersQuery;

  return (
    <h1>UsersList</h1>
  )
}

export default UsersList;