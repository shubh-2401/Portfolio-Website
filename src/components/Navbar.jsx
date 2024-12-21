import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"


function Navbar() {
    return (
        <>
            <nav className='mb-20 flex items-center justify-between py-6'>
                <div className='flex flex-shrink-0 items-centre' >
                    <p className='ml-10'>Shubham Thakur</p>
                </div>
                
                <div className='m-8 flex item-center justify-center gap-4 text-2xl'>
                    <FaLinkedin />
                    <FaGithub />
                    <FaInstagram />
                </div>
            </nav>
        </>
    )
}

export default Navbar
