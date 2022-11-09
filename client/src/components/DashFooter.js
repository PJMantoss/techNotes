import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

const DashFooter = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const onGoHome = () => navigate('/dash');

    const content = (
        <footer className='dash-footer'>
            <p>Current User:</p>
            <p>Status:</p>
        </footer>
    )
  return content;
}

export default DashFooter;