import React from 'react';
import { Outlet } from 'react-router-dom';
import DashHeader from './DashHeader';

// Dash Layout is the protected part of the application

const DashLayout = () => {
  return (
    <>
        <DashHeader />
        <div className='dash-container'>
            <Outlet />
        </div>
    </>
  )
}

export default DashLayout;