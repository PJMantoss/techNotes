import React from 'react';
import { useGetUSersQuery } from '../users/usersApiSlice';

const NotesList = () => {
  const {
    data: notes,
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

  return (
    <h1>NotesList</h1>
  )
}

export default NotesList;