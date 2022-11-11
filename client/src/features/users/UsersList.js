import React from 'react';
import { useGetUSersQuery } from './usersApiSlice';

const UsersList = () => {

  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUSersQuery();

  let content

  if(isLoading) content = <p>Loading...</p>

  if(isError){
    content = <p className={isError ? "errmsg" : "offscreen"}> 
      {error?.data?.message} 
      </p>
  }

  return (
    <h1>UsersList</h1>
  )
}

export default UsersList;