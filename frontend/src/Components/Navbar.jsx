import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='w-full h-20 bg-black flex items-center justify-center text-white'>
            <div className='flex gap-4 text-xl'>
                <Link to="/upload">Upload</Link>
                <Link to="/">Gallery</Link>
            </div>
        </div>
    )
}

export default Navbar