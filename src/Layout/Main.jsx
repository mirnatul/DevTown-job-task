import React from 'react';
import Navbar from '../pages/shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <div className='px-2'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;