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
    content = <p className="errmsg"> {error?.data?.message} </p>
  }

  return content;
}

export default UsersList;