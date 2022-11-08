import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const DashFooter = () => {

    const content = (
        <footer className='dash-footer'>
            <p>Current User:</p>
            <p>Status:</p>
        </footer>
    )
  return content;
}

export default DashFooter;