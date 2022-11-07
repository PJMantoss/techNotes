import React from 'react';
import { Link } from 'react-router-dom';

const DashHeader = () => {

    const content = (
        <header className=''>
            <div className=''>
                <Link>
                    <h1 className=''></h1>
                </Link>
                <nav className=''></nav>
            </div>
        </header>
    );

  return content;
}

export default DashHeader;