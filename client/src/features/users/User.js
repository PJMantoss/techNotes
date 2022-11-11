import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectUserById } from './usersApiSlice';

import React from 'react'

const User = ({ userId }) => {
    const user = useSelector();
    
  return (
    <div>User</div>
  )
}

export default User