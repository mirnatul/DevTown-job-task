import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 mt-4">
                <div className="navbar-start">
                    <a className="text-xl lg:text-5xl font-extrabold">DevTown</a>
                </div>
                <div className="navbar-end">
                    <div className="form-control">
                        <input type="text" placeholder="Search your product..." className="input input-bordered w-[220px] md:w-[400px]" />
                    </div>
                </div>
            </div>
            <hr className='border-2 my-3' />
        </div>
    );
};

export default Navbar;