import React from 'react';
import { Link } from 'react-router-dom';

const DashHeader = () => {

    const content = (
        <header className='dash-header'>
            <div className='dash-header__container'>
                <Link>
                    <h1 className='dash-header__title'>techNotes</h1>
                </Link>
                <nav className=''></nav>
            </div>
        </header>
    );

  return content;
}

export default DashHeader;